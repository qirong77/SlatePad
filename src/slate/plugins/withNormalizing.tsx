import { Transforms, Node, Editor, Path, Element, Range } from 'slate'
import { CustomEditor, SlateElement } from '../../types/slate'
import { getCurrentBlock } from '../utils/getCurrentBlock'
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
    // 解决从typora粘贴文本时,li里面是p的问题
    // If the element is a paragraph, ensure its children are valid.
    if (Element.isElement(node) && node.type === 'list-item') {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (
          Element.isElement(child) &&
          !editor.isInline(child) &&
          child.type === 'paragraph'
        ) {
          // Transforms.unwrapNodes(editor, { at: childPath })
          // return
        }
      }
    }

    return normalizeNode([node, path])
  }

  return editor
}
