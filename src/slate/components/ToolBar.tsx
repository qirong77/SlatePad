import { Transforms } from 'slate'
import { useSlateStatic } from 'slate-react'
import {
  CodeBlock,
  Link,
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

      <Link
        onMouseDown={e => {
          e.preventDefault()
          wrapLink(editor)
        }}
      />

      {props.children}
    </div>
  )

  function insertImage(url = 'https://source.unsplash.com/kFrdX5IeQzI') {
    const image: ImageElement = { type: 'image', url, children: [{ text: '' }] }
    Transforms.insertNodes(editor, image)
  }
}
