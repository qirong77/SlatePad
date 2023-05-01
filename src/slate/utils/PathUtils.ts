import { Editor, Path } from 'slate'
import { CustomEditor } from '../../types/slate'

export const getNextPath = (editor: CustomEditor, path: Path) => {
  const hasNext = Editor.hasPath(editor, Path.next(path))
  return hasNext && Path.next(path)
}

export const getPrePath = (editor: CustomEditor, path: Path) => {
  try {
    const hasPre = Editor.hasPath(editor, Path.previous(path))
    return hasPre && Path.previous(path)
  } catch (e) {
    return false
  }
}
