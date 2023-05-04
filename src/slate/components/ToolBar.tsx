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
  MarkDown,
  Collapse
} from '../../assets/svg'
import { RichUtils } from '../SlatePad'

export const ToolBar = ({ showHeaders, setShowHeaders, children }: any) => {
  const editor = useSlateStatic()
  return (
    <div className="slatepad-toolbar flex justify-start items-center px-[10px] h-[44px] border-b-[2px] border-gray-200">
      {showHeaders ? (
        <MenuBack onClick={() => setShowHeaders(false)} />
      ) : (
        <Menu onClick={() => setShowHeaders(true)} />
      )}
      <H1 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading1')} />
      <H2 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading2')} />
      <H3 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading3')} />
      <NumberList
        onMouseDown={() => RichUtils.toggleBlock(editor, 'number-list')}
      />
      <BulletedList
        onMouseDown={() => RichUtils.toggleBlock(editor, 'bulleted-list')}
      />
      <CheckList
        onMouseDown={() => RichUtils.toggleBlock(editor, 'check-list-item')}
      />
      <CodeBlock
        onMouseDown={() => RichUtils.toggleBlock(editor, 'code-block')}
      />
      <BlockQuote
        onMouseDown={() => RichUtils.toggleBlock(editor, 'block-quote')}
      />
      <Image onMouseDown={() => RichUtils.insertImage(editor)} />
      <Link onMouseDown={() => RichUtils.insertLink(editor)} />
      <MarkDown onClick={() => {}} />
      {/* <Collapse onMouseDown={() => RichUtils.collapseHeads(editor)} /> */}
      {children}
    </div>
  )
}
