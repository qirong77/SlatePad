import { Transforms, Node, Editor,  Path } from 'slate'
import { CustomEditor, SlateElement } from '../../types/slate'

export const withHeadings = (editor: CustomEditor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = entry => {
    const [node, path] = entry as [SlateElement, Path]
    if (node.type === 'paragraph') {
      const text = Node.string(node)
      const match = /^(#+).*/.exec(text)
      if (match) {
        const level = match[1].length
        const type = `heading${level}`
        const start = Editor.start(editor, path)
        Transforms.delete(editor, {
          at: {
            path: start.path,
            offset: level - 1
          }
        })
        Transforms.setNodes(editor, { type })
      }
    }
    if (['heading1'].includes(node.type)) {
      const text = Node.string(node)
      const match = /^(#+).*/.exec(text)
      if (match) {
        const level = match[1].length
        Transforms.setNodes(editor, { type: `heading${level}` })
      }
    }
    return normalizeNode([node, path])
  }

  return editor
}
