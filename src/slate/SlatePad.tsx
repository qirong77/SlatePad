import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Editable, Slate, withReact } from 'slate-react'
import { initialValue } from '../common/const'
import { handleKeyDown } from './helper/handleKeyDown'
import { _renderElement } from './helper/renderElement'
import { _renderLeaf } from './helper/renderLeaf'
import { ToolBar } from './components/ToolBar'
import { Search } from '../assets/svg'
import { HoveringToolBar } from './components/HoveringToolBar'
import { useDecorate } from './helper/decorate'
import { Side } from './components/Side'
import { createSlatepad } from './plugins/editor'
import { Descendant } from 'slate'
const SlatePad: React.FC<{
  onChange: (value: Descendant[]) => void
}> = ({ onChange }) => {
  const [search, setSearch] = useState('')
  const [outline, setOutline] = useState(false)
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const decorate = useCallback(useDecorate(search), [search])
  const editor = useMemo(() => createSlatepad(), [])
  return (
    <div
      className="relative bg-white rounded w-[100vw] h-[100vh]"
      spellCheck={false}>
      <Slate editor={editor} value={initialValue} onChange={onChange}>
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
          {/* 高度 = 目标高度 - 菜单栏高度 */}
          <div className="flex-auto  h-[calc(100vh-45px)] overflow-scroll">
            <Editable
              className="ediable px-[30px]"
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorate}
              onKeyDown={e => handleKeyDown(e, editor)}
            />
          </div>
        </div>
      </Slate>
    </div>
  )
}
export { SlatePad }
