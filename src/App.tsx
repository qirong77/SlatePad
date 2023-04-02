import { useCallback } from 'react'
import { RenderElementProps } from './types/slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { initialValue } from './common/const'
import { handleKeyDown } from './slate/helper/handleKeyDown'
import { withShortcuts } from './slate/plugins/withShortcuts'

export const App = () => {
  const renderElement = useCallback(_renderElement, [])
  const editor = withShortcuts(withHistory(withReact(createEditor())))
  return (
    <div>
      <Slate editor={editor} value={initialValue}>
        <Editable
          renderElement={renderElement}
          onKeyDown={e => handleKeyDown(e, editor)}></Editable>
      </Slate>
    </div>
  )
}

function _renderElement(props: RenderElementProps) {
  const { attributes, children, element } = props
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
      return <div {...attributes}>{children}</div>
    case 'code-block':
      return (
        <div {...attributes}>
          <select value="js">
            <option value="html">html</option>
          </select>
          <pre>{children}</pre>
        </div>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}
