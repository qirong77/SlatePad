import React, { useCallback, useState } from 'react'
import { Editable, Slate } from 'slate-react'
import { handleKeyDown } from './helper/handleKeyDown'
import { _renderElement } from './helper/renderElement'
import { _renderLeaf } from './helper/renderLeaf'
import { ToolBar } from './components/ToolBar'
import { HoveringToolBar } from './components/HoveringToolBar'
import { useDecorate } from './helper/decorate'
import { Side } from './components/Side'
import { createSlatepad } from './plugins/editor'
import { Descendant } from 'slate'
import { CustomEditor } from '../types/slate'
import { RichUtils } from './utils/RichUtils'
import { EditorUtils } from './utils/EditorUtils'
import { Search } from './components/Search'
import { SetNodeToDecorations } from './components/SetNodeToDecorations'

const SlatePad: React.FC<{
  onChange?: (value: Descendant[]) => void
  editor: CustomEditor
  initialValue: Descendant[]
}> = ({ onChange, editor, initialValue }) => {
  const [search, setSearch] = useState('')
  const [showHeaders, setShowHeaders] = useState(false)
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const decorate = useCallback(useDecorate(editor, search), [search])
  return (
    <div
      className="slatepad relative bg-white rounded w-full h-full flex flex-col"
      spellCheck={false}>
      <Slate editor={editor} value={initialValue} onChange={onChange}>
        <ToolBar setShowHeaders={setShowHeaders} showHeaders={showHeaders}>
          <Search search={search} setSearch={setSearch} />
        </ToolBar>
        <HoveringToolBar />
        <div className="flex-1 flex overflow-scroll">
          <Side showHeaders={showHeaders} />
          <div className="flex-1 overflow-scroll">
            <SetNodeToDecorations />
            <Editable
              className="ediable px-[30px] h-full"
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
export { SlatePad, RichUtils, createSlatepad, EditorUtils }
