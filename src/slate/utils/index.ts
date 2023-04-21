import { unified } from 'unified'
import { CustomEditor } from './../../types/slate'
import { Transforms, Node } from 'slate'
import markdown from 'remark-parse'
import slate from 'remark-slate'
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
function parseMarkdown(content = '') {
  return new Promise((resolve, reject) => {
    unified()
      .use(markdown)
      .use(slate)
      .process(content, (err, file) => {
        if (err) reject(err)
        resolve(file)
      })
  })
}
export const RichUtils = {
  clearAll,
  clearHistory,
  replaceAll,
  parseMarkdown
}
