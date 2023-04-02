import { Editor, Range, Element, Text, Transforms, Path } from 'slate'
import { CustomEditor } from '../../types/slate'

export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  editor: CustomEditor
) => {
  if (e.key === 'Enter' && e.shiftKey) {
    e.preventDefault()
    Editor.insertText(editor, '\n')
  }
  // commend+enter跳出当前的块
  if (e.key === 'Enter' && e.metaKey) {
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: n =>
          !Editor.isEditor(n) &&
          Element.isElement(n) &&
          (n.type === 'list-item' || n.type === 'code-line')
      })
      if (match) {
        const [_li, liPath] = match
        const [_ul, ulPath] = Editor.parent(editor, liPath)
        const hasNext = Editor.hasPath(editor, Path.next(ulPath))
        if (!hasNext) {
          Transforms.insertNodes(
            editor,
            {
              type: 'paragraph',
              children: []
            },
            {
              at: Path.next(ulPath)
            }
          )
        }
        Transforms.select(editor, Path.next(ulPath))
      }
    }
  }
  if (e.key === 'Enter') {
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection)
      const [parentNode] = Editor.parent(editor, start.path)
      if (
        Element.isElement(parentNode) &&
        Text.isText(parentNode.children[0]) &&
        parentNode.children[0].text === ''
      ) {
        e.preventDefault()
        editor.deleteBackward('block')
      }
    }
  }
}
