import { ReactEditor, RenderElementProps, useSlateStatic } from 'slate-react'
import { CheckListItemElement, SlateElement } from '../../types/slate'
import { Transforms } from 'slate'
import { useState } from 'react'

export const CheckList = ({ props }: { props: RenderElementProps }) => {
  const { attributes, children, element } = props
  const editor = useSlateStatic()
  const [checked, setChecked] = useState((element as CheckListItemElement).checked || false)
  return (
    <div {...attributes} className="slatepad-checklist list-none relative pl-[20px]">
      <span contentEditable={false} className="absolute left-[0px] top-[0px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={event => {
            const path = ReactEditor.findPath(editor, element)
            const newProperties: Partial<SlateElement> = {
              checked: event.target.checked
            }
            Transforms.setNodes(editor, newProperties, { at: path })
            setChecked(event.target.checked)
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
    </div>
  )
}
