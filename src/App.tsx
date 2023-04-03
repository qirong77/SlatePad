import { useCallback } from 'react'
import { RenderElementProps } from './types/slate'
import { withHistory } from 'slate-history'
import {
  Editable,
  ReactEditor,
  Slate,
  useSlateStatic,
  withReact
} from 'slate-react'
import { Transforms, createEditor } from 'slate'
import { initialValue } from './common/const'
import { handleKeyDown } from './slate/helper/handleKeyDown'
import { withShortcuts } from './slate/plugins/withShortcuts'
import { BoldIcon } from './assets/svg'

export const App = () => {
  const renderElement = useCallback(_renderElement, [])
  const editor = withShortcuts(withHistory(withReact(createEditor())))
  return (
    <div className="w-[600px] bg-slate-100">
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

function _renderElement(props: RenderElementProps) {
  const { attributes, children, element } = props
  const editor = useSlateStatic()
  const setLanguage = (language: string) => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { language }, { at: path })
  }
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'number-list':
      return <ol {...attributes}>{children}</ol>
    case 'paragraph':
      return <p {...attributes}>{children}</p>
    case 'code-line':
      return (
        <div
          {...attributes}
          className="code-line relative font-mono text-[16px] leading-[20px] mx-[10px] my-[4px]">
          {children}
        </div>
      )
    case 'code-block':
      return (
        <div
          {...attributes}
          style={{ background: 'rgba(0, 20, 60, 0.03)' }}
          className='py-[4px] relative'
          >
          <select
            value={element.language}
            onChange={e => setLanguage(e.target.value)}
            className="absolute top-[0px] right-[0px]">
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="javascript">JavaScript</option>
            <option value="jsx">JSX</option>
            <option value="markdown">Markdown</option>
          </select>
          <pre>{children}</pre>
        </div>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}

function ToolBar() {
  return (
    <div className="flex justify-start items-center px-[10px] h-[50px] border-b-2 border-gray-400">
      <BoldIcon />
    </div>
  )
}
