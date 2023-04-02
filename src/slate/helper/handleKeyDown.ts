import { Editor, Range, Element, Text } from 'slate'
import { CustomEditor } from '../../types/slate'

export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  editor: CustomEditor
) => {
  if (e.key === 'Enter' && e.shiftKey) {
    e.preventDefault()
    Editor.insertText(editor, '\n')
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
