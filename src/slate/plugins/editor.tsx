import { createEditor } from 'slate'
import { withHeadings } from './withHeadings'
import { withImages } from './withImages'
import { withInlines } from './withInlines'
import { withPastHtml } from './withPastHtml'
import { withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import { withShortcuts } from './withShortcuts'

export const createSlatepad = () => {
  const editor = withInlines(
    withPastHtml(
      withImages(
        withHeadings(withShortcuts(withHistory(withReact(createEditor()))))
      )
    )
  )
  return editor
}
