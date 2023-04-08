import { Transforms, Text, Editor } from 'slate'
import { useSlateStatic } from 'slate-react'
import { Bold, CodeBlock, Italic, Link, UnderLine } from '../../assets/svg'
import { wrapLink } from '../plugins/withInlines'

export const ToolBar = () => {
  const editor = useSlateStatic()
  function toggle(format: 'bold' | 'italic' | 'underline') {
    const isActive = isLeafActive('bold')
    Transforms.setNodes(
      editor,
      { [format]: isActive ? null : true },
      { match: Text.isText, split: true }
    )
    function isLeafActive(format: string) {
      const [match] = Editor.nodes(editor, {
        match: n => n[format],
        universal: true
      })
      return !!match
    }
  }
  return (
    <div className="flex justify-start items-center px-[10px] h-[44px] border-b-2 border-gray-400">
      <Bold
        onMouseDown={e => {
          e.preventDefault()
          toggle('bold')
        }}
      />
      <UnderLine
        onMouseDown={e => {
          e.preventDefault()
          toggle('underline')
        }}
      />
      <Italic
        onMouseDown={e => {
          e.preventDefault()
          toggle('italic')
        }}
      />
      <CodeBlock />
      <Link
        onMouseDown={e => {
          e.preventDefault()
          wrapLink(editor)
        }}
      />
    </div>
  )
}
