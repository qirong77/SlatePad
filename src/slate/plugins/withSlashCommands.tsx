import { SlatePadEditor, SlateElement } from '../../types/slate'
import { Editor, Range, Transforms, Element as SlateElementType } from 'slate'

export interface SlashCommandItem {
  title: string
  description: string
  icon?: string
  keywords?: string[]
  onSelect: (editor: SlatePadEditor) => void
}

export const withSlashCommands = (editor: SlatePadEditor) => {
  const { insertText } = editor

  editor.insertText = (text) => {
    const { selection } = editor

    if (text === '/' && selection && Range.isCollapsed(selection)) {
      const block = Editor.above(editor, {
        match: (n) => SlateElementType.isElement(n) && Editor.isBlock(editor, n),
      })

      if (block) {
        const [, path] = block
        const start = Editor.start(editor, path)
        const range = { anchor: selection.anchor, focus: start }
        const beforeText = Editor.string(editor, range)

        // 只在行首或空格后触发斜杠命令
        if (beforeText === '' || beforeText.endsWith(' ')) {
          insertText(text)
          return
        }
      }
    }

    insertText(text)
  }

  return editor
}
