import { Transforms } from 'slate'
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic
} from 'slate-react'
import { CodeBlockElement, LinkElement } from '../../types/slate'

export function _renderElement(props: RenderElementProps) {
  const { attributes, children, element } = props
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'list-item':
      return (
        <li className="pl-[4px]" {...attributes}>
          {children}
        </li>
      )
    case 'number-list':
      return <ol {...attributes}>{children}</ol>
    case 'paragraph':
      return <p {...attributes}>{children}</p>
    case 'link':
      return <Link props={props} />
    case 'code-line':
      return (
        <div
          {...attributes}
          className="code-line relative font-mono text-[16px] leading-[20px] mx-[10px] my-[4px]">
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
    <a {...attributes} className="" href={(element as LinkElement).url}>
      <InlineChromiumBugfix />
      {children}
      <InlineChromiumBugfix />
    </a>
  )
}

function CodeBlock({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props
  const editor = useSlateStatic()
  const setLanguage = (language: string) => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { language }, { at: path })
  }
  return (
    <div
      {...attributes}
      style={{ background: 'rgba(0, 20, 60, 0.03)' }}
      className="py-[4px] relative">
      <pre>
        {children}
        {/* <div>{element.language}</div> */}
      </pre>
      <div
        contentEditable={false}
        className="absolute right-[0] bottom-0 p-[6px] w-[90px]">
        <input
          type="text"
          className="px-[4px] w-full"
          value={(element as CodeBlockElement).language}
          onChange={e => setLanguage(e.target.value)}
        />
      </div>
    </div>
  )
}
