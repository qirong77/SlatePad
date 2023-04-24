import { Editor, Element } from 'slate'
import {
  CustomEditor,
  SlateElement
} from './../../types/slate'

import { Node } from 'slate'
export function slateToMarkdown(
  editor: CustomEditor,
  elements: SlateElement[]
): string {
  return elements.map(el => parseBlock(el)).join('\n')
  function parseLeafs(element: any): string {
    const leafs = element.children || [element]
    return leafs
      .map((leaf: any) => {
        // 处理行内元素
        if (leaf.type === 'link') {
          return `[${Node.string(leaf)}](${leaf.url})`
        }
        // 处理文本节点,没有type属性
        const wrapper = leaf.bold ? '**' : ''
        return wrapper + leaf.text + wrapper
      })
      .join('')
  }
  function parseBlock(element: SlateElement, listLevel = 0): string {
    if (element.type === 'code-block') {
      const codeLines = element.children
        .map(line => Node.string(line))
        .join('\n')
      return '```' + (element.language || '') + '\n' + codeLines + '\n```'
    }
    if (element.type.includes('heading')) {
      const level = Number(element.type.at(-1))
      return '#'.repeat(level) + ' ' + parseLeafs(element)
    }
    if (element.type === 'bulleted-list' || element.type === 'number-list') {
      return element.children
        .map((li: any, index) => {
          const listMark =
            element.type === 'bulleted-list' ? '*' : index + 1 + '.'
          const mark = '  '.repeat(listLevel) + listMark + ' '
          const listItemContent = li.children.map((child: SlateElement) => {
            if (Element.isElement(child) && Editor.isBlock(editor, child)) {
              return (
                parseBlock(child, listLevel + 1) + '\n' + '  '.repeat(listLevel)
              )
            }
            return parseLeafs(child)
          })
          return mark + listItemContent.join('')
        })
        .join('\n')
    }
    switch (element.type) {
      case 'paragraph':
        return parseLeafs(element)
      case 'block-quote':
        return '> ' + parseLeafs(element)
      case 'check-list-item':
        return `- [${element.checked ? 'x' : ''}] ` + parseLeafs(element)
      case 'image':
        return `![替代文本](${element.url})`
      default:
        return ''
    }
  }
}
