import { Editor, Transforms } from 'slate'
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
  MenuBack,
  MarkDown
} from '../../assets/svg'

import { wrapLink } from '../plugins/withInlines'
import { ImageElement } from '../../types/slate'

export const ToolBar = ({ showHeaders, setShowHeaders, children }) => {
  const editor = useSlateStatic()
  return (
    <div className="flex justify-start items-center px-[10px] h-[44px] border-b-[2px] border-gray-200">
      {showHeaders ? (
        <MenuBack onClick={() => setShowHeaders(false)} />
      ) : (
        <Menu onClick={() => setShowHeaders(true)} />
      )}
      <H1 />
      <H2 />
      <H3 />
      <NumberList
        onMouseDown={e => {
          e.preventDefault()
        }}
      />
      <BulletedList />
      <CheckList />
      <CodeBlock />
      <BlockQuote />
      <Image />
      <Link />
      <MarkDown onClick={() => {}} />
      {children}
    </div>
  )
}
