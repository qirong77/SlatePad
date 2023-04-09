import { useEffect, useId, useRef } from 'react'
import { Transforms, Node, Editor } from 'slate'
import {
  ReactEditor,
  RenderElementProps,
  useSlate,
  useSlateStatic
} from 'slate-react'
import { getNextBlock, getNextPath } from '../utils/getNextBlock'
import { CodeBlockElement } from '../../types/slate'
import { Copy } from '../../assets/svg'

export function CodeBlock({ props }: { props: RenderElementProps }) {
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
      e.preventDefault()
      ReactEditor.focus(editor)
      const path = ReactEditor.findPath(editor, element)
      const [, lastPath] = Node.last(editor, path)
      // bug 需要选择两次
      Transforms.select(editor, lastPath)
      Transforms.select(editor, Editor.end(editor, lastPath))
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault()
      ReactEditor.focus(editor)
      const path = ReactEditor.findPath(editor, element)
      const nextPath = getNextPath(editor, path)
      const nextBlock = getNextBlock(editor, path)
      if (nextPath && nextBlock) {
        Transforms.select(editor, nextPath)
        Transforms.select(editor, Editor.end(editor, nextPath))
      }
    }
  }

  useEffect(() => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { input: id }, { at: path })
  }, [editor, element])
  return (
    <div
      {...attributes}
      style={{ background: '#f6f7f9' }}
      className="group  py-[4px] my-[8px] relative">
      <pre>
        <code>{children}</code>
      </pre>
      <div className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-[4px]">
        <Copy />
      </div>
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
