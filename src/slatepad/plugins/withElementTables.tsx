import { Editor, Element, Range, Point, NodeEntry } from 'slate'
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from '../types'

export const withTables = (editor: SlatePadEditor) => {
  const { deleteBackward } = editor
  // 按下delete的时候,不会删除当前的表格单元
  editor.deleteBackward = unit => {
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: n => Element.isElement(n) && n.type === SlatePadElementEnum.TABLE_CELL
      })
      if (cell) {
        const [cellNode, cellPath] = cell as NodeEntry<SlatePadElement>
        const start = Editor.start(editor, cellPath)
        if (
          Point.equals(selection.anchor, start) &&
          (cellNode.children[0] as any)?.type === SlatePadElementEnum.PARAGRAPH
        ) {
          return
        }
      }
    }
    deleteBackward(unit)
  }
  return editor
}
