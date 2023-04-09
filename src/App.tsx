import { useCallback, useEffect, useState } from 'react'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor, Text, NodeEntry } from 'slate'
import { initialValue } from './common/const'
import { handleKeyDown } from './slate/helper/handleKeyDown'
import { withShortcuts } from './slate/plugins/withShortcuts'
import { _renderElement } from './slate/helper/renderElement'
import { _renderLeaf } from './slate/helper/renderLeaf'
import { withInlines } from './slate/plugins/withInlines'
import { withHeadings } from './slate/plugins/withHeadings'
import { withPastHtml } from './slate/plugins/withPastHtml'
import { ToolBar } from './slate/components/ToolBar'
import { withImages } from './slate/plugins/withImages'
import { Search } from './assets/svg'

export const App = () => {
  const [search, setSearch] = useState('')
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const decorate = useCallback(_decorate, [search])
  const editor = withInlines(
    withPastHtml(
      withImages(
        withHeadings(withShortcuts(withHistory(withReact(createEditor()))))
      )
    )
  )
  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      console.log('selectionchange')
    })
  }, [editor])
  return (
    <div>
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <div className="relative  bg-white rounded c-shadow" spellCheck={false}>
        <Slate editor={editor} value={initialValue}>
          <ToolBar>
            <div className="ml-auto flex items-center">
              <Search className="absolute ml-2 text-cyan-800" />
              <input
                placeholder="搜索"
                className="border-blue-200  pl-[30px] rounded border-2 outline-blue-500"
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </ToolBar>
          <div className="w-[90vw] h-[80vh] overflow-scroll">
            <Editable
              className="p-[20px]"
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorate}
              onKeyDown={e => handleKeyDown(e, editor)}
            />
          </div>
        </Slate>
      </div>
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
    if (ranges.length) {
      console.log(ranges)
    }
    return ranges
  }
}
