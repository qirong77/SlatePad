import { useCallback, } from 'react'
import { withHistory } from 'slate-history'
import {
  Editable,
  Slate,
  useSlateStatic,
  withReact,
} from 'slate-react'
import { Transforms, createEditor,Text } from 'slate'
import { initialValue } from './common/const'
import { handleKeyDown } from './slate/helper/handleKeyDown'
import { withShortcuts } from './slate/plugins/withShortcuts'
import { Bold, CodeBlock, Link, UnderLine } from './assets/svg'
import { _renderElement } from './slate/helper/renderElement'
import { _renderLeaf } from './slate/helper/renderLeaf'
import { withInlines, wrapLink } from './slate/plugins/withInlines'
import { withHeadings } from './slate/plugins/withHeadings'

export const App = () => {
  const renderElement = useCallback(_renderElement, [])
  const renderLeaf = useCallback(_renderLeaf, [])
  const editor = withInlines(
    withHeadings(withShortcuts(withHistory(withReact(createEditor()))))
  )

  let tree: any = []
  // useEffect(() => {
  //   setInterval(() => {
  //     tree = editor.children
  //     document.querySelector('.state')!.innerHTML = JSON.stringify(
  //       editor.children,
  //       null,
  //       2
  //     )
  //   }, 500)
  // }, [])
  return (
    <div className="flex">
      <div className="w-[600px] bg-slate-100" spellCheck={false}>
        <Slate editor={editor} value={initialValue}>
          <ToolBar />
          <div className="p-[20px]">
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={e => handleKeyDown(e, editor)}></Editable>
          </div>
        </Slate>
      </div>
      <pre className="h-[400px] w-[400px] overflow-scroll bg-blue-200">
        <code className="state"></code>
      </pre>
    </div>
  )
}

function ToolBar() {
  const editor = useSlateStatic()
  return (
    <div className="flex justify-start items-center px-[10px] h-[50px] border-b-2 border-gray-400">
      <Bold
        onMouseDown={e => {
          e.preventDefault()
          Transforms.setNodes(
            editor,
            { bold: true },
            { match: n => Text.isText(n), split: true }
          )
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
