import { Editor, Element, Path } from 'slate'
import {
  CustomEditor,
  CustomElementType,
  SlateElement
} from '../../types/slate'

// 获取当前光标所在位置的某个块,只会返回最先匹配到的块
export const getCurrentBlock = (
  editor: CustomEditor,
  ...types: CustomElementType[]
) => {
  // above:从当前的最里层节点向外递归
  const block = Editor.above(editor, {
    match: n =>
      Element.isElement(n) &&
      Editor.isBlock(editor, n) &&
      (types.length ? types.includes(n.type) : true)
  })
  if (block) {
    return block as [SlateElement, Path]
  } else return [false, false] as [false, false]
}
