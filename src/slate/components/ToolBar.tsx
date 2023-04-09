import { Transforms, Text, Editor } from 'slate'
import { useSlateStatic } from 'slate-react'
import {
  Bold,
  CodeBlock,
  Italic,
  Link,
  UnderLine,
  Image,
  H1,
  H2,
  H3,
  BulletedList,
  NumberList,
  CheckList,
  BlockQuote
} from '../../assets/svg'
import { wrapLink } from '../plugins/withInlines'
import { ImageElement } from '../../types/slate'

export const ToolBar = (props: JSX.IntrinsicElements['input']) => {
  const editor = useSlateStatic()

  return (
    <div className="flex justify-start items-center px-[10px] h-[44px] border-b-[2px] border-gray-200">
      <H1 />
      <H2 />
      <H3 />
      <NumberList />
      <BulletedList />
      <CheckList />
      <CodeBlock />
      <BlockQuote />
      <Image
        onMouseDown={e => {
          console.log('image')
          e.preventDefault()
          insertImage()
        }}
      />
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

      <Link
        onMouseDown={e => {
          e.preventDefault()
          wrapLink(editor)
        }}
      />

      {props.children}
    </div>
  )
  function toggle(format: 'bold' | 'italic' | 'underline') {
    const isActive = isLeafActive(format)
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
  function insertImage(url = 'https://source.unsplash.com/kFrdX5IeQzI') {
    const image: ImageElement = { type: 'image', url, children: [{ text: '' }] }
    Transforms.insertNodes(editor, image)
  }
}
