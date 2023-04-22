import { unified } from 'unified'
import { CustomEditor } from './../../types/slate'
import { Transforms, Node } from 'slate'
import markdown from 'remark-parse'
import { serialize } from 'remark-slate'
import slate from 'remark-slate'
import { marked } from 'marked'
import { deserialize } from '../plugins/withPastHtml'

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
function slateToMarkdown(value: Node[]) {
  return value.map(n => serialize(n)).join('')
}
export const RichUtils = {
  clearAll,
  clearHistory,
  replaceAll,
  insertMarkdown,
  slateToMarkdown
}
