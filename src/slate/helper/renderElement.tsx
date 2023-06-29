import { RenderElementProps, useSelected } from 'slate-react'
import { Heading } from '../elements/Heading'
import { CodeBlock } from '../elements/CodeBlock'
import { Image } from '../elements/Image'
import { CheckList } from '../elements/CheckList'
import { Link } from '../elements/Link'
import { FixSelect } from '../elements/FixSelect'
import { Divider } from '../elements/Divider'
import { Table } from '../elements/Table'
// 结构参考:https://marked.js.org/demo/
export function _renderElement(props: RenderElementProps) {
  const { attributes, children, element } = props
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote
          {...attributes}
          className="slatepad-blockquote border-l-[3px] pl-[15px] my-[8px]  border-slate-400 text-slate-400">
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul className="slatepad-bulleted-list pl-[20px] my-[8px]" {...attributes}>
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
          style={{
            fontFamily: 'Menlo, Monaco, "Courier New", monospace'
          }}
          className="code-line relative text-[16px] leading-[20px] mx-[10px] my-[4px]">
          {children}
        </div>
      )
    case 'code-block':
      return <CodeBlock props={props} />
    case 'divider':
      return <Divider props={props} />
    case 'table':
      return <Table props={props} />
    case 'table-row':
      return (
        <tr {...attributes} className="h-[30px]">
          {children}
        </tr>
      )
    case 'table-cell':
      return (
        <td className="border-gray border-[2px] px-[4px]" {...attributes}>
          {children}
        </td>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}
