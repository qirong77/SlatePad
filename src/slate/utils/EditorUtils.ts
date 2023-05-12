import { CustomEditor } from './../../types/slate'
import { Transforms, Node } from 'slate'
import { slateToMarkdown } from './slateToMarkdown'
import { deserialize } from '../plugins/withPastHtml'
import { marked } from 'marked'
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
function insertMarkdown(editor: CustomEditor, markdownString: string) {
  const body = document.createElement('body')
  body.innerHTML = marked.parse(markdownString)
  marked.options({
    breaks: true
  })
  const fragment = deserialize(body)
  console.log(fragment)
}
export const EditorUtils = {
  clearAll,
  clearHistory,
  replaceAll,
  slateToMarkdown,
  insertMarkdown
}
