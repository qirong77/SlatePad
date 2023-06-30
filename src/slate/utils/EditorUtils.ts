import { SlatePadEditor } from './../../types/slate'
import { Transforms, Node } from 'slate'
import { slateToMarkdown } from './slateToMarkdown'
import { deserialize } from '../plugins/withPastHtml'
import { marked } from 'marked'
function clearAll(editor: SlatePadEditor) {
  Transforms.select(editor, [])
  Transforms.delete(editor)
  Transforms.setNodes(editor, { type: 'paragraph' })
}
function clearHistory(editor: SlatePadEditor) {
  editor.history = {
    redos: [],
    undos: []
  }
}
function replaceAll(editor: SlatePadEditor, fragment: Node[]) {
  clearAll(editor)
  editor.insertFragment(fragment)
}
function insertMarkdown(editor: SlatePadEditor, markdownString: string) {
  const body = document.createElement('body')
  body.innerHTML = marked.parse(markdownString)
  marked.options({
    breaks: true
  })
  const fragment = deserialize(body)
  return fragment
}
export const EditorUtils = {
  clearAll,
  clearHistory,
  replaceAll,
  slateToMarkdown,
  insertMarkdown
}
