import { SlateElement } from './../../types/slate'

import { Node } from 'slate'

export function slateToMarkdown(elements: SlateElement[]): string {
  return elements.map(parseBlock).join('\n')
  function parseLeafs(leafs: any[]): string {
    return leafs
      .map(leaf => {
        // 处理slate元素,有type属性
        if (leaf.type) {
          // 处理行内元素
          if (leaf.type === 'link') {
            return `[${Node.string(leaf)}](${leaf.url})`
          }
          // 处理块级元素
          else return parseBlock(leaf)
        }
        // 处理文本节点,没有type属性
        const wrapper = leaf.bold ? '**' : ''
        return wrapper + leaf.text + wrapper
      })
      .join('')
  }
  function parseBlock(element: SlateElement): string {
    if (element.type === 'code-block') {
      const codeLines = element.children
        .map(line => Node.string(line))
        .join('\n')
      return '```' + element.language + '\n' + codeLines + '\n```'
    }
    if (element.type.includes('heading')) {
      const level = Number(element.type.at(-1))
      return '#'.repeat(level) + ' ' + parseLeafs(element.children)
    }
    if (element.type === 'bulleted-list' || element.type === 'number-list') {
      return element.children
        .map((li, index) => {
          const mark = element.type === 'bulleted-list' ? '*' : index + 1 + '.'
          return mark + ' ' + parseLeafs([li])
        })
        .join('\n')
    }
    switch (element.type) {
      case 'paragraph':
        return parseLeafs(element.children)
      case 'block-quote':
        return '> ' + parseLeafs(element.children)
      case 'check-list-item':
        return (
          `- [${element.checked ? 'x' : ''}] ` + parseLeafs(element.children)
        )
      case 'image':
        return `![替代文本](${element.url})`
      default:
        return ''
    }
  }
}
