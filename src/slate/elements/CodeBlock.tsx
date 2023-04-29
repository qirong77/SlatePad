import { useRef, useState } from 'react'
import { Transforms, Node, Editor, Path } from 'slate'
import { ReactEditor, RenderElementProps, useSlateStatic } from 'slate-react'
import { getNextBlock, getNextPath } from '../utils/getNextBlock'
import { CodeBlockElement } from '../../types/slate'
import { Arrow, Copy } from '../../assets/svg'

export function CodeBlock({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props
  const editor = useSlateStatic()
  const [collapse, setCollapse] = useState(false)
  const iptRef = useRef<HTMLInputElement>(null)
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setCollapse(!collapse)
  }
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

  return (
    <div
      {...attributes}
      className="slatepad-code-block rounded group  py-[4px] my-[8px] relative"
      suppressContentEditableWarning
      contentEditable={collapse ? false : true}>
      <pre
        className={`language-${''} overflow-hidden  whitespace-pre-wrap`}
        style={{
          height: collapse ? '30px' : 'auto'
        }}>
        <code>{children}</code>
      </pre>
      {collapse && (
        <div
          contentEditable={false}
          className="rest pl-[10px] bg-[#fafafa] h-[30px] relative">
          <span className="absolute top-0">......</span>
        </div>
      )}
      <div className="code-helpers [&>button]:active:opacity-0 absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-[4px]">
        <Copy />
      </div>
      <Arrow
        contentEditable={false}
        onClick={handleClick}
        className={`absolute hover:bg-white left-[-30px]  top-[0px] opacity-${
          collapse ? 100 : 0
        } group-hover:opacity-100 transition-all ${
          collapse ? '-rotate-90' : ''
        }`}
      />
      <div
        contentEditable={false}
        className="absolute right-[0]  bottom-0 p-[6px] w-[90px] opacity-0 group-hover:opacity-100">
        <input
          type="text"
          ref={iptRef}
          className="px-[4px] w-full rounded "
          value={(element as CodeBlockElement).language}
          onKeyDown={handleKeyDown}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}
