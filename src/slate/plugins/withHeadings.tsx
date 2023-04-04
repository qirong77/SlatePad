import { Transforms, Node } from 'slate'
import { CustomEditor } from '../../types/slate'

export const withHeadings = (editor: CustomEditor) => {
  const { normalizeNode } = editor
  editor.normalizeNode = ([node, path]) => {
    if (node.type === 'paragraph' || node.type ==='heading1') {
      const text = Node.string(node)
      const match = /^#+\s/.exec(text)
      if (match) {
        const level = match[0].length - 1
        const type = `heading${level}`
        Transforms.setNodes(editor, { type }, { at: path })
      }
    }
    return normalizeNode([node, path])
  }

  return editor
}
