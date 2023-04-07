import { useCallback, useEffect, useState } from 'react'
import { withHistory } from 'slate-history'
import { Editable, Slate,  withReact } from 'slate-react'
import { createEditor, Text, NodeEntry,  } from 'slate'
import { initialValue } from './common/const'
import { handleKeyDown } from './slate/helper/handleKeyDown'
import { withShortcuts } from './slate/plugins/withShortcuts'
import { _renderElement } from './slate/helper/renderElement'
import { _renderLeaf } from './slate/helper/renderLeaf'
import { withInlines,  } from './slate/plugins/withInlines'
import { withHeadings } from './slate/plugins/withHeadings'
import { withPastHtml } from './slate/plugins/withPastHtml'
import { ToolBar } from './slate/components/ToolBar'

export const App = () => {
  const [search, setSearch] = useState('')
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const decorate = useCallback(_decorate, [search])
  const editor = withInlines(
    withPastHtml(
      withHeadings(withShortcuts(withHistory(withReact(createEditor()))))
    )
  )
  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      console.log('selectionchange')
    })
  }, [editor])
  return (
    <div className="flex">
      <div className="w-[600px] bg-slate-100" spellCheck={false}>
        <Slate editor={editor} value={initialValue}>
          <ToolBar />
          <input onChange={e => setSearch(e.target.value)} />
          <div className="p-[20px]">
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorate}
              onKeyDown={e => handleKeyDown(e, editor)}></Editable>
          </div>
        </Slate>
      </div>
      <pre className="h-[400px] w-[400px] overflow-scroll bg-blue-200">
        <code className="state"></code>
      </pre>
    </div>
  )
  function _decorate(entry: NodeEntry) {
    const [node, path] = entry
    const ranges: any = []
    if (search && Text.isText(node)) {
      const { text } = node
      const parts = text.split(search)
      let offset = 0

      parts.forEach((part, i) => {
        if (i !== 0) {
          ranges.push({
            anchor: { path, offset: offset - search.length },
            focus: { path, offset },
            highlight: true
          })
        }

        offset = offset + part.length + search.length
      })
    }
    return ranges
  }
}
