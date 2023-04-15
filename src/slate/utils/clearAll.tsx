import { Transforms } from 'slate'
import { CustomEditor } from '../../types/slate'

export const clearAll = (editor: CustomEditor) => {
  Transforms.select(editor, [])
  Transforms.delete(editor)
  Transforms.setNodes(editor, { type: 'paragraph' })
}
