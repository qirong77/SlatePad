import {
  Transforms,
  Node,
  Editor,
  Element as SlateElement,
  Path,
  Range
} from 'slate'
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic
} from 'slate-react'
import { CodeBlockElement, LinkElement } from '../../types/slate'
import React, { useEffect, useId, useRef, useState } from 'react'
import { getNextBlock, getNextPath } from '../utils/getNextBlock'

export function _renderElement(props: RenderElementProps) {
  const { attributes, children, element } = props
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote
          {...attributes}
          className="border-l-[2px] pl-[4px] border-slate-400 text-slate-400">
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul className="pl-[20px]" {...attributes}>
          {children}
        </ul>
      )
    case 'number-list':
      return (
        <ol className="pl-[20px]" {...attributes}>
          {children}
        </ol>
      )
    case 'heading1' || 'heading2' || 'heading3':
      return <H props={props} type={element.type} />
    case 'list-item':
      return (
        <li className="pl-[4px]" {...attributes}>
          {children}
        </li>
      )
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

function CodeBlock({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props
  const id = useId()
  const editor = useSlateStatic()
  const iptRef = useRef<HTMLInputElement>(null)
  const setLanguage = (language: string) => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { language }, { at: path })
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setLanguage(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'ArrowUp') {
      ReactEditor.focus(editor)
      const path = ReactEditor.findPath(editor, element)
      const [, lastPath] = Node.last(editor, path)
      // bug 需要选择两次
      Transforms.select(editor, lastPath)
      setTimeout(() => {
        Transforms.select(editor, Editor.end(editor, lastPath))
      })
    }
    if (e.code === 'ArrowDown') {
      ReactEditor.focus(editor)
      const path = ReactEditor.findPath(editor, element)
      const nextPath = getNextPath(editor, path)
      const nextBlock = getNextBlock(editor, path)
      if (nextPath && nextBlock) {
        Transforms.select(editor, Editor.end(editor, nextPath))
      }
    }
  }

  useEffect(() => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { input: id }, { at: path })
  }, [])
  return (
    <div
      {...attributes}
      style={{ background: 'rgba(0, 20, 60, 0.03)' }}
      className="py-[4px] relative">
      <pre>
        <code>{children}</code>
        {/* <div>{element.language}</div> */}
      </pre>
      <div
        contentEditable={false}
        className="absolute right-[0] bottom-0 p-[6px] w-[90px]">
        <input
          id={id}
          type="text"
          ref={iptRef}
          className="px-[4px] w-full"
          value={(element as CodeBlockElement).language}
          onKeyDown={handleKeyDown}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

function H({ props, type }: { props: RenderElementProps; type: string }) {
  const { attributes, children, element } = props
  const selected = useSelected()
  const editor = useSlateStatic()
  const [path, setPath] = useState<Path>([])

  useEffect(() => {
    const { selection } = editor
    if (selected && selection && Range.isCollapsed(selection)) {
      const block = Editor.above(editor, {
        match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n)
      })
      const path = block ? block[1] : []
      const start = Editor.start(editor, path)
      Transforms.insertText(editor, '#', {
        at: start
      })
      setPath(path)
    } else {
      if (!path.length) return
      const start = Editor.start(editor, path)
      // 使用 `Node.string` 获取标题的纯文本字符串，并计算其中 # 的数量
      const titleString = Node.string(element)
      const hashCount = (titleString.match(/^#+/) || [''])[0].length
      Transforms.delete(editor, {
        at: {
          path: start.path,
          offset: hashCount - 1
        }
      })
    }
  }, [selected])
  switch (type) {
    case 'heading2':
      return (
        <h2 className="font-bold text-lg" {...attributes}>
          {children}
        </h2>
      )
    case 'heading3':
      return (
        <h3 className="font-bold text-lg" {...attributes}>
          {children}
        </h3>
      )
    default: {
      return (
        <h1 className="font-bold text-lg" {...attributes}>
          {children}
        </h1>
      )
    }
  }
}
