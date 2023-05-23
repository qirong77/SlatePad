import { Editor, Element, Range, Point } from 'slate'
import { CustomEditor } from '../../types/slate'

export const withTables = (editor: CustomEditor) => {
  const { deleteBackward } = editor
  // 按下delete的时候,不会删除当前的表格单元
  editor.deleteBackward = unit => {
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'table-cell'
      })
      if (cell) {
        const [, cellPath] = cell
        const start = Editor.start(editor, cellPath)
        if (Point.equals(selection.anchor, start)) {
          return
        }
      }
    }
    deleteBackward(unit)
  }
  return editor
}
