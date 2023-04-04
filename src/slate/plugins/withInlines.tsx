import { Editor, Transforms, Element as SlateElement, Range } from 'slate'
import { CustomEditor, LinkElement } from '../../types/slate'

export const withInlines = (editor: CustomEditor) => {
  const { insertData, isInline } = editor
  //   重写isInline方法，默认情况下这个方法都是返回false
  // 前面那部分表示如果匹配到了行内快，后面表示使用原来的方法，也就一直是返回false
  editor.isInline = element => {
    return ['link', 'button'].includes(element?.type) || isInline(element)
  }
  // 复制粘贴和拖拽的时候转换为对应的元素，待完成
  editor.insertData = data => {
    insertData(data)
  }
  return editor
}

export function wrapLink(editor: CustomEditor) {
  const [link] = Editor.nodes(editor, {
    match: n =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link'
  })
  // 当前的选区含有link
  if (link) {
    Transforms.unwrapNodes(editor, {
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link'
    })
    return
  }
  const { selection } = editor
  const isCollapsed = selection && Range.isCollapsed(selection)
  const linkElement: LinkElement = {
    type: 'link',
    url: 'www.baidu.com',
    children: isCollapsed ? [{ text: 'www.baidu.com' }] : []
  }
  if (isCollapsed) {
    Transforms.insertNodes(editor, linkElement)
  } else {
    Transforms.wrapNodes(editor, linkElement, { split: true })
    Transforms.collapse(editor, { edge: 'end' })
  }
}
