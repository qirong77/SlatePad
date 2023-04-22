
import { CustomEditor } from './../../types/slate'
import { Transforms, Node, Text, Descendant } from 'slate'
import { marked } from 'marked'
import { deserialize } from '../plugins/withPastHtml'
import { SlateElement } from './../../types/slate'

function clearAll(editor: CustomEditor) {
  Transforms.select(editor, [])
  Transforms.delete(editor)
  Transforms.setNodes(editor, { type: 'paragraph' })
}
function clearHistory(editor: CustomEditor) {
  editor.history = {
    redos: [],
    undos: []
  }
}
function replaceAll(editor: CustomEditor, fragment: Node[]) {
  clearAll(editor)
  editor.insertFragment(fragment)
}
function insertMarkdown(editor: CustomEditor, markdownString = '') {
  const htmlString = marked(markdownString)
  const html = document.createElement('body')
  html.innerHTML = htmlString
  Transforms.insertFragment(editor, deserialize(html))
}
function slateToMarkdown(elements: SlateElement[]) {
  return elements
    .map(element => {
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
            const mark =
              element.type === 'bulleted-list' ? '*' : index + 1 + '.'
            return mark + ' ' + parseLeafs(li.children)
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
      }
    })
    .join('\n')
  function parseLeafs(leafs: Descendant[]) {
    return leafs
      .map(leaf => {
        if (leaf.type === 'link') {
          return `[${Node.string(leaf)}](${leaf.url})`
        }
        const wrapper = leaf.bold ? '**' : ''
        return wrapper + leaf.text + wrapper
      })
      .join('')
  }
}
export const RichUtils = {
  clearAll,
  clearHistory,
  replaceAll,
  insertMarkdown,
  slateToMarkdown
}
