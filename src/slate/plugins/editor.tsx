import { createEditor } from 'slate'

import { withImages } from './withImages'
import { withInlines } from './withInlines'
import { withPastHtml } from './withPastHtml'
import { withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import { withShortcuts } from './withShortcuts'
import { withForceLayout } from './withForceLayout'
import { withNormalizing } from './withNormalizing'

export const createSlatepad = () => {
  const editor = withInlines(
    withPastHtml(
      withImages(
        withForceLayout(
          withNormalizing(withShortcuts(withHistory(withReact(createEditor()))))
        )
      )
    )
  )
  return editor
}
