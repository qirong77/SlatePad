import { Transforms, Node, Element } from 'slate'
import {
  CodeBlockElement,
  CodeLineElement,
  CustomEditor,
  CustomElementType
} from '../../types/slate'
import { jsx } from 'slate-hyperscript'
import { getCurrentBlock, isCodeBlock } from '../utils/BlockUtils'
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
  UL: () => ({ type: 'bulleted-list' }),
  HR: () => ({ type: 'divider' })
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
    if (block && isCodeBlock(block[0].type)) {
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

export const deserialize = el => {
  if (el.nodeType === 3) {
    return el.textContent
  } else if (el.nodeType !== 1) {
    return null
  } else if (el.nodeName === 'BR') {
    return '\n'
  }
  const { nodeName } = el
  let parent = el
  // 有些编辑的代码块的形状是这样,有些的不是
  if (nodeName === 'PRE' && el.childNodes[0] && el.childNodes[0].nodeName === 'CODE') {
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
    const attrs = ELEMENT_TAGS[nodeName](el)
    const fragment = jsx('element', attrs, children)
    if (fragment.type === 'code-block' && fragment.children?.[0].text) {
      fragment.children = fragment.children[0]?.text.split('\n').map(line => {
        return {
          type: 'code-line',
          children: [{ text: line }]
        } as CodeLineElement
      })
      fragment.language = 'typescript'
    }
    console.log(fragment)
    return fragment
  }

  if (TEXT_TAGS[nodeName]) {
    const attrs = TEXT_TAGS[nodeName](el)
    return children.map(child => jsx('text', attrs, child))
  }
  return children
}
