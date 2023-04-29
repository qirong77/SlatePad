// 这个类型后面需要完善
import { RenderLeafProps } from 'slate-react'


export const _renderLeaf = ({
  attributes,
  children,
  leaf
}: RenderLeafProps) => {
  console.log(attributes,children,leaf)
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }
  if (leaf.highlight) {
    children = <mark>{children}</mark>
  }
  return <span {...attributes}>{children}</span>
}
