import { RenderElementProps, useSelected } from 'slate-react'

export const Divider = ({ props }: { props: RenderElementProps }) => {
  const { attributes, children, element } = props
  const selected = useSelected()
  return (
    <div
      {...attributes}
      className={`flex items-center h-[16px] px-2 rounded border-2 ${
        selected ? 'border-blue-500' : 'border-none'
      }`}>
      {children}
      <hr contentEditable={false} className="w-full" />
    </div>
  )
}
