import { SlatePadEditor, SlateElement } from '../../types/slate'
import { Editor, Node, Path, Transforms, Element, NodeEntry } from 'slate'
// normalize只有在节点变化的时候会执行
export const withForceLayout = (editor: SlatePadEditor) => {
  const { normalizeNode } = editor
  // 如果第一个元素,直接是个表格,这里有个bug
  // setTimeout(() => {
  //   forceLayout(editor)
  // }, 100)
  // 后面对编辑器输入的时候,会执行
  editor.normalizeNode = entry => {
    if (!entry[1].length) {
      forceLayout(editor)
    }

    return normalizeNode(entry)
  }

  return editor
}

// 强制最后一个元素为段落
function forceLayout(editor: SlatePadEditor) {
  const endPath = Editor.end(editor, [])
  const lastBlockType = editor.children.at(-1)?.type || ''
  const block = Editor.above(editor, {
    match: node =>
      Element.isElement(node) && Editor.isBlock(editor, node) && node.type === lastBlockType,
    at: endPath
  }) as NodeEntry<SlateElement>
  if (block) {
    const [lastBlock, lastPath] = block
    if (lastBlock.type === 'paragraph' && !Node.string(lastBlock).length) {
      return
    }
    Transforms.insertNodes(
      editor,
      {
        type: 'paragraph',
        children: [{ text: '' }]
      },
      {
        at: Path.next(lastPath)
      }
    )
  }
  // 强制第一个为fixSelect
  const startPath = Editor.start(editor, [])
  const firstBlockType = editor.children.at(-1)?.type || ''
  const [startBlock] =
    (Editor.above(editor, {
      match: node =>
        Element.isElement(node) && Editor.isBlock(editor, node) && node.type === firstBlockType,
      at: startPath
    }) as NodeEntry<SlateElement>) || []
  if (startBlock?.type !== 'fix-select') {
    Transforms.insertNodes(
      editor,
      {
        type: 'fix-select',
        children: [{ text: '' }]
      },
      { at: [0] }
    )
  }
}
