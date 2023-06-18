import { Transforms, Node, Editor, Path, Element, Range, Text, NodeEntry } from 'slate'
import { CodeLineElement, CustomEditor, SlateElement } from '../../types/slate'
import { getCurrentBlock } from '../utils/BlockUtils'
/* 
在 Slate.js 中，normalizeNode 方法用于规范化节点，它的执行时机有以下几种情况：

当节点首次被添加到 Slate.js 的文档树中时；
当节点内容发生变化时；
当节点的祖先节点发生变化时；
当用户执行了一些操作（如拖放）之后。
*/
// 执行时间:节点变化时,并不会遍历所有的节点,而是类似于Editor.above方式,从内向外,遍历当前选区的节点
// 当粘贴文本时,会遍历所有的粘贴文本
// 通过normalizing,可以处理粘贴的文本不符合文档的schema问题
export const withNormalizing = (editor: CustomEditor) => {
  // normalize只有在节点变化的时候会执行
  const { normalizeNode } = editor
  editor.normalizeNode = entry => {
    const [node, path] = entry as [SlateElement, Path]
    if (Element.isElement(node) && node.type === 'list-item') {
      const [parentBlock, parentPath] = Editor.parent(editor, path) as NodeEntry<SlateElement>
      // 从飞书对话框粘贴列表,发现里面的list没有用ul或者ol包围
      if (parentBlock.type !== 'bulleted-list' && parentBlock.type !== 'number-list') {
        Transforms.wrapNodes(
          editor,
          {
            type: 'bulleted-list',
            children: []
          },
          {
            match: n => Element.isElement(n) && n.type === 'list-item',
            at: parentPath,
            split: true
          }
        )
        return
      }
      const isOperation = wrapTextNode(editor, path)
      if (isOperation) return
    }
    // 段落或者引用无法嵌套
    if (Element.isElement(node) && (node.type === 'paragraph' || node.type === 'block-quote')) {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (Element.isElement(child) && !editor.isInline(child)) {
          Transforms.unwrapNodes(editor, { at: childPath })
          return
        }
      }
    }
    if (Element.isElement(node) && node.type === 'table-row') {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (!(Element.isElement(child) && child.type === 'table-cell')) {
          Transforms.wrapNodes(
            editor,
            { type: 'table-cell', children: [] },
            {
              at: childPath
            }
          )
          return
        }
      }
    }
    if (Element.isElement(node) && node.type === 'table-cell') {
      const isOperation = wrapTextNode(editor, path)
      if (isOperation) return
    }
    // Code-Block里面必须是codeline
    if (Element.isElement(node) && node.type === 'code-block') {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (Element.isElement(child) && child.type !== 'code-line') {
          const codeLines = Node.string(node)
            .split('\n')
            .map(
              text =>
                ({
                  type: 'code-line',
                  children: [{ text }]
                } as CodeLineElement)
            )
          Transforms.setNodes(editor, {
            type: 'code-block',
            children: codeLines
          })
          return
        }
      }
    }
    return normalizeNode([node, path])
  }

  return editor
}

// 不希望某些元素的直接子元素是text,比如不希望list或者td里面的直接子元素是文本,需要把这些文本用段落包裹起来
function wrapTextNode(editor: CustomEditor, path: Path) {
  for (const [child] of Node.children(editor, path)) {
    // 如果list里面有子节点是text,就把这些节点都放在一个段落里面(保证list里面直接子元素都是块)
    if (!(Element.isElement(child) && Editor.isBlock(editor, child))) {
      Transforms.wrapNodes(
        editor,
        { type: 'paragraph', children: [] },
        {
          at: path,
          match: node =>
            Text.isText(node) || (Element.isElement(node) && Editor.isInline(editor, node)),
          split: true
        }
      )
      return true
    }
  }
}
