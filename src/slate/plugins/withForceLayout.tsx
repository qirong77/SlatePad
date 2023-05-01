import { CustomEditor, SlateElement } from '../../types/slate'
import { Editor, Node, Path, Transforms, Element, NodeEntry } from 'slate'
// normalize只有在节点变化的时候会执行
export const withForceLayout = (editor: CustomEditor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = entry => {
    if (!entry[1].length) {
      // 强制最后一个元素为段落
      const path = Editor.end(editor, [])
      const block = Editor.above(editor, {
        match: n =>
          Element.isElement(n) &&
          Editor.isBlock(editor, n) &&
          n.type !== 'list-item' &&
          n.type !== 'code-line',
        at: path
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
      const [startBlock] = Editor.above(editor, {
        match: n =>
          Element.isElement(n) &&
          Editor.isBlock(editor, n) &&
          n.type !== 'list-item' &&
          n.type !== 'code-line',
        at: startPath
      }) as NodeEntry<SlateElement> || []
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

    return normalizeNode(entry)
  }

  return editor
}
