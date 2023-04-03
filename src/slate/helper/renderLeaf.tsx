import { RenderLeafProps } from 'slate-react'
// 这个类型后面需要完善
interface CustomRenderLeafProps {
  children: any
  leaf: Text & {
    bold?: Boolean
    code?: Boolean
    italic?: Boolean
    underline?: Boolean
  }
  text: Text
  attributes: {
    'data-slate-leaf': true
  }
}
export const _renderLeaf = ({
  attributes,
  children,
  leaf
}: CustomRenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}
