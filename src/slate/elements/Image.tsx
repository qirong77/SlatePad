import { RenderElementProps, useSelected } from 'slate-react'
import { ImageElement } from '../../types/slate'

export const Image = ({ props }: { props: RenderElementProps }) => {
  const { attributes, children, element } = props
  const selected = useSelected()
  return (
    <div
      {...attributes}
      className={`border-[3px] rounded ${
        selected ? 'border-blue-500' : 'border-transparent'
      }`}>
      {children}
      <img src={(element as ImageElement).url} className="w-full h-full" />
    </div>
  )
}
