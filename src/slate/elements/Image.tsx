import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic
} from 'slate-react'
import { ImageElement } from '../../types/slate'
import { Transforms } from 'slate'

export const Image = ({ props }: { props: RenderElementProps }) => {
  const { attributes, children, element } = props
  const selected = useSelected()
  const editor = useSlateStatic()
  return (
    <div
      {...attributes}
      className="border-blue-500 rounded"
      style={{
        borderWidth: selected ? '2px' : '0px'
      }}>
      {children}
      <img src={(element as ImageElement).url} />
    </div>
  )
}
