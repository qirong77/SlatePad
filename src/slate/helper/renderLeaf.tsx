// 这个类型后面需要完善
import { RenderLeafProps } from 'slate-react'

export const _renderLeaf = ({ attributes, children, leaf }: any) => {
  // rest:代码高亮的其他属性
  const { text, ...rest } = leaf
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf['code-snippet']) {
    children = <code className="code-snippet bg-slate-300 rounded">{children}</code>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  if (leaf.highlight) {
    children = <mark>{children}</mark>
  }
  return (
    <span {...attributes} className={Object.keys(rest).join(' ')}>
      {children}
    </span>
  )
}
