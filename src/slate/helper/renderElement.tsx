import { RenderElementProps, useSelected } from 'slate-react'
import { Heading } from '../elements/Heading'
import { CodeBlock } from '../elements/CodeBlock'
import { Image } from '../elements/Image'
import { CheckList } from '../elements/CheckList'
import { Link } from '../elements/Link'
import { FixSelect } from '../elements/FixSelect'
// 结构参考:https://marked.js.org/demo/
export function _renderElement(props: RenderElementProps) {
  const { attributes, children, element } = props
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote
          {...attributes}
          className="slatepad-blockquote border-l-[2px] pl-[4px] my-[8px]  border-slate-400 text-slate-400">
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul
          className="slatepad-bulleted-list pl-[20px] my-[8px]"
          {...attributes}>
          {children}
        </ul>
      )
    case 'number-list':
      return (
        <ol className="slatepad-number-list pl-[20px] my-[8px]" {...attributes}>
          {children}
        </ol>
      )
    case 'heading1':
      return <Heading props={props} type={element.type} />
    case 'heading2':
      return <Heading props={props} type={element.type} />
    case 'heading3':
      return <Heading props={props} type={element.type} />
    case 'heading4':
      return <Heading props={props} type={element.type} />
    case 'heading5':
      return <Heading props={props} type={element.type} />
    case 'image':
      return <Image props={props} />
    case 'list-item':
      return (
        <li className="pl-[4px]" {...attributes}>
          {children}
        </li>
      )
    case 'fix-select':
      return <FixSelect props={props} />
    case 'paragraph':
      return (
        <p {...attributes} className="my-[8px]">
          {children}
        </p>
      )
    case 'link':
      return <Link props={props} />
    case 'check-list-item':
      return <CheckList props={props} />
    case 'code-line':
      return (
        <div
          {...attributes}
          className="code-line  font-[monospace] relative text-[16px] leading-[20px] mx-[10px] my-[4px]">
          {children}
        </div>
      )
    case 'code-block':
      return <CodeBlock props={props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}
