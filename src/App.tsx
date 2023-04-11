import { useCallback, useMemo, useState } from 'react'
import { Editable, Slate, withReact } from 'slate-react'
import { initialValue } from './common/const'
import { handleKeyDown } from './slate/helper/handleKeyDown'
import { _renderElement } from './slate/helper/renderElement'
import { _renderLeaf } from './slate/helper/renderLeaf'
import { ToolBar } from './slate/components/ToolBar'
import { Search } from './assets/svg'
import { HoveringToolBar } from './slate/components/HoveringToolBar'
import { useDecorate } from './slate/helper/decorate'
import { Side } from './slate/components/Side'
import { createSlatepad } from './slate/plugins/editor'

export const App = () => {
  const [search, setSearch] = useState('')
  const [outline, setOutline] = useState(false)
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const decorate = useCallback(useDecorate(search), [search])
  const editor = useMemo(() => createSlatepad(), [])
  return (
    <div>
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <div className="relative  bg-white rounded c-shadow" spellCheck={false}>
        <Slate editor={editor} value={initialValue}>
          <ToolBar setOutline={setOutline} outline={outline}>
            <div className="ml-auto flex items-center">
              <Search className="absolute ml-2" />
              <input
                placeholder="搜索"
                className="border-blue-400  pl-[30px] rounded border-2 outline-blue-600"
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </ToolBar>
          <HoveringToolBar />
          <div className="flex">
            <Side outline={outline} />
            <div className="w-[70vw]  h-[70vh] overflow-scroll">
              <Editable
                className="ediable px-[40px]"
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
