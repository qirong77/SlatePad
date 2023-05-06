import { CustomEditor } from './../../types/slate'
import { Transforms, Node } from 'slate'
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
export const EditorUtils = {
  clearAll,
  clearHistory,
  replaceAll,
  slateToMarkdown
}
