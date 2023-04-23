import { ReactEditor, RenderElementProps, useSlateStatic } from 'slate-react'
import { SlateElement } from '../../types/slate'
import { Transforms } from 'slate'

export const CheckList = ({ props }: { props: RenderElementProps }) => {
  const { attributes, children, element } = props

  const editor = useSlateStatic()
  const { checked } = element
  return (
    <li {...attributes}>
      <span contentEditable={false}>
        <input
          className="mr-1"
          type="checkbox"
          checked={checked}
          onChange={event => {
            const path = ReactEditor.findPath(editor, element)
            const newProperties: Partial<SlateElement> = {
              checked: event.target.checked
            }
            Transforms.setNodes(editor, newProperties, { at: path })
          }}
        />
      </span>
      <span
        style={{
          opacity: checked ? '0.6' : '1',
          textDecoration: checked ? 'line-through' : 'none'
        }}>
        {children}
      </span>
    </li>
  )
}
