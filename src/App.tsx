import { useCallback } from 'react'
import { withHistory } from 'slate-history'
import { Editable, Slate, useSlateStatic, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { initialValue } from './common/const'
import { handleKeyDown } from './slate/helper/handleKeyDown'
import { withShortcuts } from './slate/plugins/withShortcuts'
import { Bold, CodeBlock, Link, UnderLine } from './assets/svg'
import { _renderElement } from './slate/helper/renderElement'
import { _renderLeaf } from './slate/helper/renderLeaf'
import { withInlines, wrapLink } from './slate/plugins/withInlines'
import { withHeadings } from './slate/plugins/withHeadings'

export const App = () => {
  console.log('app-update')
  const renderElement = useCallback(_renderElement, [])
  // const renderLeaf = useCallback(_renderLeaf, [])
  const editor = withInlines(
    withHeadings(withShortcuts(withHistory(withReact(createEditor()))))
  )
  return (
    <div className="w-[600px] bg-slate-100" spellCheck={false}>
      <Slate editor={editor} value={initialValue}>
        <ToolBar />
        <div className="p-[20px]">
          <Editable
            renderElement={renderElement}
            onKeyDown={e => handleKeyDown(e, editor)}></Editable>
        </div>
      </Slate>
    </div>
  )
}

function ToolBar() {
  const editor = useSlateStatic()
  return (
    <div className="flex justify-start items-center px-[10px] h-[50px] border-b-2 border-gray-400">
      <Bold
        onClick={e => {
          e.preventDefault()
        }}
      />
      <UnderLine />
      <CodeBlock />
      <Link
        onMouseDown={e => {
          e.preventDefault()
          wrapLink(editor)
        }}
      />
    </div>
  )
}
