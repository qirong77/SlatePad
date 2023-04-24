import { CustomEditor } from './../../types/slate'
import { Transforms, Node } from 'slate'
import { marked, Renderer } from 'marked'
import { deserialize } from '../plugins/withPastHtml'
import { slateToMarkdown } from './slateToMarkdown'

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
  const renderer: Renderer = new marked.Renderer()
  renderer.options.breaks = true
  const htmlString = marked(markdownString, { renderer })
  const html = document.createElement('body')
  html.innerHTML = htmlString
  const fragment = deserialize(html).filter((node:any) => node.type)
  Transforms.insertFragment(editor, fragment)
}

export const RichUtils = {
  clearAll,
  clearHistory,
  replaceAll,
  insertMarkdown,
  slateToMarkdown
}
