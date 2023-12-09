import { Editor, Element, Path, Node, NodeEntry, Transforms ,Text} from 'slate'
import { SlatePadEditor, CustomElementType, SlateElement, SlatePadElementEnum } from '../types'
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

// 不希望某些元素的直接子元素是text,比如不希望list或者td里面的直接子元素是文本,需要把这些文本用段落包裹起来
export function wrapTextNode(editor: SlatePadEditor, path: Path) {
  for (const [child] of Node.children(editor, path)) {
    // 如果list里面有子节点是text,就把这些节点都放在一个段落里面(保证list里面直接子元素都是块)
    if (!(Element.isElement(child) && Editor.isBlock(editor, child))) {
      Transforms.wrapNodes(
        editor,
        { type: SlatePadElementEnum.PARAGRAPH, children: [] },
        {
          at: path,
          match: node =>
            Text.isText(node) || (Element.isElement(node) && Editor.isInline(editor, node)),
          split: true
        }
      )
      return true
    }
  }
}
