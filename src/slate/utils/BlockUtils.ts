import { Editor, Element, Path, Node, NodeEntry, Transforms } from 'slate'
import { SlatePadEditor, CustomElementType, SlateElement } from '../../types/slate'
import { getNextPath } from './PathUtils'

// 获取当前光标所在位置的某个块,只会返回最先匹配到的块
export const getCurrentBlock = (editor: SlatePadEditor, ...types: CustomElementType[]) => {
  // above:从当前的最里层节点向外递归
  const block = Editor.above(editor, {
    match: n =>
      Element.isElement(n) &&
      Editor.isBlock(editor, n) &&
      (types.length ? types.includes(n.type) : true)
  })
  // 如果没有指定要获取具体的块,肯定会返回某个块
  if (block || !types.length) {
    return block as [SlateElement, Path]
  }
  return false
}

// 获取和path平级的block
export const getNextBlock = (editor: SlatePadEditor, path: Path) => {
  const hasNext = Editor.hasPath(editor, Path.next(path))
  if (hasNext) {
    const nextBlock = Node.get(editor, Path.next(path)) as SlateElement
    return nextBlock
  }
  return false
}

export const isCodeBlock = (type: CustomElementType) => {
  return type === 'code-block' || type === 'code-line'
}

// 选择下一个平级块
export const selectNextSibling = (editor: SlatePadEditor) => {
  const [block, path] = getCurrentBlock(editor) || []
  if (block && path) {
    const nextPath = getNextPath(editor, path)
    nextPath && Transforms.select(editor, Editor.start(editor, nextPath))
  }
}
export const isHeadBlock = (type: CustomElementType) => {
  return type.includes('heading')
}
// 判断当前的段落是否是在list中
export const isListParagraph = (editor: SlatePadEditor, paragraphPath: Path) => {
  const [list, listPath] = Editor.parent(editor, paragraphPath) as NodeEntry<SlateElement>
  const isListParagraph = list.type === 'list-item' && list.children.length === 1
  return isListParagraph
}
