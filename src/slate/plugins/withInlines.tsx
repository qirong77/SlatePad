import { Editor, Transforms, Element as SlateElement, Range } from 'slate'
import { CustomEditor, LinkElement } from '../../types/slate'
import isUrl from 'is-url'

export const withInlines = (editor: CustomEditor) => {
  const { insertData, isInline, insertText } = editor
  //   重写isInline方法，默认情况下这个方法都是返回false
  // 前面那部分表示如果匹配到了行内快，后面表示使用原来的方法，也就一直是返回false
  editor.isInline = element => {
    return element.type === 'link' || isInline(element)
  }
  editor.insertText = text => {
    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertText(text)
    }
  }

  editor.insertData = data => {
    const text = data.getData('text/plain')

    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertData(data)
    }
  }
  return editor
}

export function wrapLink(editor: CustomEditor, url = 'www.baidu.com') {
  const [link] = Editor.nodes(editor, {
    match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link'
  })
  // 当前的选区含有link,解除link样式
  if (link) {
    Transforms.unwrapNodes(editor, {
      match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link'
    })
    return
  }
  const { selection } = editor
  const isCollapsed = selection && Range.isCollapsed(selection)
  const linkElement: LinkElement = {
    type: 'link',
    url,
    children: isCollapsed ? [{ text: url }] : []
  }
  if (isCollapsed) {
    Transforms.insertNodes(editor, linkElement)
  } else {
    Transforms.wrapNodes(editor, linkElement, { split: true })
    Transforms.collapse(editor, { edge: 'end' })
  }
}
