import { Transforms, Node } from 'slate'
import {
  CodeBlockElement,
  CodeLineElement,
  CustomEditor,
  CustomElementType
} from '../../types/slate'
import { jsx } from 'slate-hyperscript'
import { getCurrentBlock } from '../utils/getCurrentBlock'
import { languages } from 'prismjs'
const ELEMENT_TAGS: {
  [key: string]: (el?: HTMLElement) => { type: CustomElementType; url?: string }
} = {
  A: el => ({ type: 'link', url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: 'block-quote' }),
  H1: () => ({ type: 'heading1' }),
  H2: () => ({ type: 'heading2' }),
  H3: () => ({ type: 'heading3' }),
  H4: () => ({ type: 'heading4' }),
  H5: () => ({ type: 'heading5' }),
  IMG: el => ({ type: 'image', url: el.getAttribute('src') }),
  LI: () => ({ type: 'list-item' }),
  OL: () => ({ type: 'number-list' }),
  P: () => ({ type: 'paragraph' }),
  PRE: () => ({ type: 'code-block' }),
  UL: () => ({ type: 'bulleted-list' })
}

// COMPAT: `B` is omitted here because Google Docs uses `<b>` in weird ways.
const TEXT_TAGS = {
  CODE: () => ({ code: true }),
  DEL: () => ({ strikethrough: true }),
  EM: () => ({ italic: true }),
  I: () => ({ italic: true }),
  S: () => ({ strikethrough: true }),
  STRONG: () => ({ bold: true }),
  U: () => ({ underline: true })
}
export const withPastHtml = (editor: CustomEditor) => {
  const { insertData } = editor

  editor.insertData = data => {
    const html = data.getData('text/html')

    const block = getCurrentBlock(editor)
    if (block && block[0].type.includes('code')) {
      const text = data.getData('text/plain')
      const codelines = text.split('\n').map(
        line =>
          ({
            type: 'code-line',
            children: [{ text: line }]
          } as CodeLineElement)
      )
      Transforms.insertFragment(editor, codelines)
      return
    }
    if (html) {
      const parsed = new DOMParser().parseFromString(html, 'text/html')
      const fragment = deserialize(parsed.body)
      Transforms.insertFragment(editor, fragment)
      return
    }
    insertData(data)
  }

  return editor
}

export function deserialize(el: any) {
  if (el.nodeType === 3) {
    return el.textContent
  } else if (el.nodeType !== 1) {
    return null
  } else if (el.nodeName === 'BR') {
    return '\n'
  }
  const { nodeName } = el
  let parent = el
  // 由于marked的checkbox会包裹在li中,所以这里做额外的处理
  if (el.tagName.toLowerCase() === 'li') {
    if (
      el.childNodes.length === 2 &&
      el.childNodes[0] instanceof HTMLInputElement
    ) {
      return {
        type: 'check-list-item',
        checked: true,
        children: [{ text: 'Slide to the left.' }]
      }
    }
  }
  if (
    nodeName === 'PRE' &&
    el.childNodes[0] &&
    el.childNodes[0].nodeName === 'CODE'
  ) {
    parent = el.childNodes[0]
  }
  let children = Array.from(parent.childNodes).map(deserialize).flat()
  if (children.length === 0) {
    children = [{ text: '' }]
  }

  if (el.nodeName === 'BODY') {
    return jsx('fragment', {}, children)
  }

  if (ELEMENT_TAGS[nodeName]) {
    console.log(nodeName)
    if (
      nodeName === 'PRE' &&
      el.childNodes[0] &&
      el.childNodes[0].nodeName === 'CODE'
    ) {
      // // 处理复制的时候,序列化代码块的每一行代码
      const childs = Array.from(el.childNodes[0].childNodes) as HTMLElement[]
      const codelines: any = childs.map(child => {
        return {
          type: 'code-line',
          children: [{ text: child.textContent }]
        } as CodeLineElement
      })
      return {
        type: 'code-block',
        children: codelines,
        language: ''
      } as CodeBlockElement
    }
  }

  if (TEXT_TAGS[nodeName]) {
    const attrs = TEXT_TAGS[nodeName](el)
    const data = children.map(child => jsx('text', attrs, child))
    return data
  }
  return children
}
