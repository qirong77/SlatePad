import { Transforms  } from 'slate'
import {
  SlatePadEditor, SlatePadElementEnum,
} from '../types'
import { jsx } from 'slate-hyperscript'
import { getCurrentBlock, isCodeBlock } from '../utils/BlockUtils'
const ELEMENT_TAGS: {
  [key: string]: (el?: HTMLElement) => { type: SlatePadElementEnum; url?: string }
} = {
  A: el => ({ type: SlatePadElementEnum.LINK, url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: SlatePadElementEnum.BLOCK_QUOTE }),
  H1: () => ({ type: SlatePadElementEnum.HEADING_ONE }),
  H2: () => ({ type: SlatePadElementEnum.HEADING_TWO }),
  H3: () => ({ type: SlatePadElementEnum.HEADING_THREE }),
  H4: () => ({ type: SlatePadElementEnum.HEADING_FOUR }),
  H5: () => ({ type: SlatePadElementEnum.HEADING_FIVE }),
  IMG: el => ({ type: SlatePadElementEnum.IMAGE, url: el.getAttribute('src') }),
  LI: () => ({ type: SlatePadElementEnum.LIST_ITEM }),
  OL: () => ({ type: SlatePadElementEnum.NUMBER_LIST }),
  P: () => ({ type: SlatePadElementEnum.PARAGRAPH }),
  PRE: () => ({ type: SlatePadElementEnum.CODE_BLOCK }),
  UL: () => ({ type: SlatePadElementEnum.BULLED_LIST }),
  HR: () => ({ type: SlatePadElementEnum.PARAGRAPH }),
  TABLE: () => ({ type: SlatePadElementEnum.TABLE }),
  TR: () => ({ type: SlatePadElementEnum.TABLE_ROW }),
  TD: () => ({ type: SlatePadElementEnum.TABLE_CELL })
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
export const withPastHtml = (editor: SlatePadEditor) => {
  const { insertData } = editor

  editor.insertData = data => {
    const html = data.getData('text/html')

    const block = getCurrentBlock(editor)
    if (block && isCodeBlock(block[0].type)) {
      const text = data.getData('text/plain')
      const codelines = text.split('\n').map(
        line =>
          ({
            type: SlatePadElementEnum.CODE_LINE,
            children: [{ text: line }]
          })
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
const x: HTMLElement = document.createElement('div')

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
  if (nodeName === 'DIV' && el.classList.contains('slatepad-code-block')) {
    const code = el.querySelector('code') as HTMLElement
    const codeLines = [...code.children]
      .filter(el => {
        return el instanceof HTMLElement
      })
      .map(codeLine => {
        return {
          type: SlatePadElementEnum.CODE_LINE,
          children: [
            {
              text: codeLine.textContent
            }
          ]
        } 
      })
    return {
      type:SlatePadElementEnum.CODE_BLOCK,
      children: codeLines,
      language: 'typescript'
    } 
  }
  if (nodeName === 'DIV' && el.classList.contains('slatepad-checklist')) {
    return {
      type: 'check-list-item',
      children: [{ text: el.textContent }],
      checked: el.querySelector('input')?.value
    } as CheckListItemElement
  }
  let children: any = Array.from(parent.childNodes).map(deserialize).flat()

  if (children.length === 0) {
    children = [{ text: '' }]
  }

  if (el.nodeName === 'BODY') {
    return jsx('fragment', {}, children)
  }

  if (ELEMENT_TAGS[nodeName]) {
    const attrs = ELEMENT_TAGS[nodeName](el)
    const fragment = jsx('element', attrs, children)
    if (fragment.type ===SlatePadElementEnum.CODE_BLOCK && fragment.children?.[0].text) {
      fragment.children = fragment.children[0]?.text.split('\n').map(line => {
        return {
          type: SlatePadElementEnum.CODE_LINE,
          children: [{ text: line }]
        }
      })
      fragment.language = 'typescript'
    }
    if (fragment.type === SlatePadElementEnum.TABLE) {
      fragment.children = fragment.children.filter(child => child?.type === SlatePadElementEnum.TABLE_ROW)
    }
    return fragment
  }

  if (TEXT_TAGS[nodeName]) {
    const attrs = TEXT_TAGS[nodeName](el)
    return children.map(child => jsx('text', attrs, child))
  }
  return children
}
