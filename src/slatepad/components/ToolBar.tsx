import {  useSlateStatic } from 'slate-react'
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
  Collapse,
  TableIcon
} from '../../assets/svg/icon'
import { RichUtils } from '../SlatePad'
import { SlatePadElementEnum } from '../types'

export const ToolBar = ({ showHeaders, setShowHeaders, children }: any) => {
  const editor = useSlateStatic()
  return (
    <div className="slatepad-toolbar flex justify-start items-center px-[10px] h-[44px] border-b-[2px] border-gray-200">
      {showHeaders ? (
        <MenuBack onClick={() => setShowHeaders(false)} />
      ) : (
        <Menu onClick={() => setShowHeaders(true)} />
      )}
      <H1 onMouseDown={() => RichUtils.toggleBlock(editor, SlatePadElementEnum.HEADING_ONE)} />
      <H2 onMouseDown={() => RichUtils.toggleBlock(editor, SlatePadElementEnum.HEADING_TWO)} />
      <H3 onMouseDown={() => RichUtils.toggleBlock(editor, SlatePadElementEnum.HEADING_THREE)} />
      <NumberList onMouseDown={() => RichUtils.toggleBlock(editor, SlatePadElementEnum.NUMBER_LIST)} />
      <BulletedList onMouseDown={() => RichUtils.toggleBlock(editor, SlatePadElementEnum.BULLED_LIST)} />
      <CheckList onMouseDown={() => RichUtils.toggleBlock(editor,SlatePadElementEnum.CHECK_LIST)} />
      <CodeBlock onMouseDown={() => RichUtils.toggleBlock(editor,SlatePadElementEnum.CODE_BLOCK)} />
      <BlockQuote onMouseDown={() => RichUtils.toggleBlock(editor, SlatePadElementEnum.BLOCK_QUOTE)} />
      <Image onMouseDown={() => RichUtils.insertImage(editor, '')} />
      <Link onMouseDown={() => RichUtils.insertLink(editor)} />
      <TableIcon onMouseDown={() => RichUtils.insertTable(editor)} />
      {/* <MarkDown onClick={() => {}} /> */}
      {/* <Collapse/> */}
      {children}
    </div>
  )
}
