import { CustomEditor } from '../../types/slate'
import { Editor, Node, Path, Transforms, Element } from 'slate'
// normalize只有在节点变化的时候会执行
export const withForceLayout = (editor: CustomEditor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = entry => {
    if (!entry[1].length) {
      const path = Editor.end(editor, [])
      const block = Editor.above(editor, {
        match: n =>
          Element.isElement(n) &&
          Editor.isBlock(editor, n) &&
          n.type !== 'list-item' &&
          n.type !== 'code-block',
        at: path
      })
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
    }

    return normalizeNode(entry)
  }

  return editor
}
