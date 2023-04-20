import { Transforms } from 'slate'
import { useSlate, useSlateStatic } from 'slate-react'
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
  BlockQuote,
  Menu,
  MenuBack
} from '../../assets/svg'
import { wrapLink } from '../plugins/withInlines'
import { ImageElement } from '../../types/slate'

export const ToolBar = prop => {
  const editor = useSlateStatic()
  return (
    <div className="flex justify-start items-center px-[10px] h-[44px] border-b-[2px] border-gray-200">
      {prop.showHeaders ? (
        <MenuBack onClick={() => prop.setShowHeaders(false)} />
      ) : (
        <Menu onClick={() => prop.setShowHeaders(true)} />
      )}
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

      {prop.children}
    </div>
  )

  function insertImage(url = 'https://source.unsplash.com/kFrdX5IeQzI') {
    const image: ImageElement = { type: 'image', url, children: [{ text: '' }] }
    Transforms.insertNodes(editor, image)
  }
}
