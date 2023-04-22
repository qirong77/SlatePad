import React, { useCallback,  useState } from 'react'
import { Editable, Slate,  } from 'slate-react'
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
import { initialValue } from '../common/const'
import { RichUtils } from './utils'
import { CustomEditor } from '../types/slate'
const SlatePad: React.FC<{
  onChange?: (value: Descendant[]) => void
  editor: CustomEditor
}> = ({ onChange, editor }) => {
  const [search, setSearch] = useState('')
  const [showHeaders, setShowHeaders] = useState(false)
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const decorate = useCallback(useDecorate(search), [search])
  return (
    <div
      className="relative bg-white rounded w-full h-full flex flex-col"
      spellCheck={false}>
      <Slate editor={editor} value={initialValue} onChange={onChange}>
        <ToolBar setShowHeaders={setShowHeaders} showHeaders={showHeaders}>
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
        <div className="flex-1 flex overflow-scroll">
          <div
            className="overflow-scroll transition-all border-gray-200 "
            style={{
              width: showHeaders ? '200px' : '0px',
              borderRightWidth: showHeaders ? '2px' : '0px'
            }}>
            <Side />
          </div>
          <div className="flex-1 overflow-scroll">
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
export { SlatePad, RichUtils, createSlatepad }
