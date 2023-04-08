import { RenderElementProps, useSelected } from 'slate-react'
import { LinkElement } from '../../types/slate'

import { Heading } from '../elements/Heading'
import { CodeBlock } from '../elements/CodeBlock'

export function _renderElement(props: RenderElementProps) {
  const { attributes, children, element } = props
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote
          {...attributes}
          className="border-l-[2px] pl-[4px] my-[8px] leading-[1] border-slate-400 text-slate-400">
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul className="pl-[20px] my-[8px]" {...attributes}>
          {children}
        </ul>
      )
    case 'number-list':
      return (
        <ol className="pl-[20px] my-[8px]" {...attributes}>
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

    case 'list-item':
      return (
        <li className="pl-[4px]" {...attributes}>
          {children}
        </li>
      )
    case 'paragraph':
      return (
        <p {...attributes} className="my-[8px] leading-[1]">
          {children}
        </p>
      )
    case 'link':
      return <Link props={props} />
    case 'code-line':
      return (
        <div
          {...attributes}
          className="font-[monospace] code-line relative text-[16px] leading-[20px] mx-[10px] my-[4px]">
          {children}
        </div>
      )
    case 'code-block':
      return <CodeBlock props={props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}
function Link({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props
  const selected = useSelected()

  // 加上这个是为了解决某个bug
  const InlineChromiumBugfix = () => (
    <span contentEditable={false}>
      {String.fromCodePoint(160) /* Non-breaking space */}
    </span>
  )
  return (
    <a
      {...attributes}
      className={`text-blue-600 cursor-pointer border-blue-600`}
      style={{
        borderWidth: selected ? '2px' : '0px'
      }}
      href={(element as LinkElement).url}>
      <InlineChromiumBugfix />
      {children}
      <InlineChromiumBugfix />
    </a>
  )
}
