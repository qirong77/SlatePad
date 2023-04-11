import { useCallback, useMemo, useState } from 'react'
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
import { HoveringToolBar } from './slate/components/HoveringToolBar'
import {  useDecorate } from './slate/helper/decorate'

export const App = () => {
  const [search, setSearch] = useState('')
  const [outline, setOutline] = useState(false)
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const decorate = useCallback(useDecorate(search), [search])
  const editor = useMemo(
    () =>
      withInlines(
        withPastHtml(
          withImages(
            withHeadings(withShortcuts(withHistory(withReact(createEditor()))))
          )
        )
      ),
    []
  )
  return (
    <div>
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <div className="relative  bg-white rounded c-shadow" spellCheck={false}>
        <Slate editor={editor} value={initialValue}>
          <ToolBar setOutline={setOutline} outline={outline}>
            <div className="ml-auto flex items-center">
              <Search className="absolute ml-2 text-cyan-800" />
              <input
                placeholder="搜索"
                className="border-blue-400  pl-[30px] rounded border-2 outline-blue-600"
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </ToolBar>
          <HoveringToolBar />
          <div className="flex">
            <div
              className="h-[70vh] overflow-scroll bg-slate-400 transition-all"
              style={{
                width: outline ? '180px' : '0px'
              }}></div>
            <div className="w-[70vw]  h-[70vh] overflow-scroll">
              <Editable
                className="px-[40px]"
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                decorate={decorate}
                onKeyDown={e => handleKeyDown(e, editor)}
              />
            </div>
          </div>
        </Slate>
      </div>
    </div>
  )
}
