import { useCallback } from 'react'
import { RenderElementProps } from './types/slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { initialValue } from './common/const'

export const App = () => {
  const x = 
  const renderElement = useCallback(_renderElement, [])
  const editor = withHistory(withReact(createEditor()))
  return (
    <div>
      <Slate editor={editor} value={initialValue}>
        <Editable renderElement={renderElement}></Editable>
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
    default:
      return <p {...attributes}>{children}</p>
  }
}
