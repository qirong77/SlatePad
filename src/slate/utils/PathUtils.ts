import { Editor, Path } from 'slate'
import { SlatePadEditor } from '../types'

export const getNextPath = (editor: SlatePadEditor, path: Path) => {
  const hasNext = Editor.hasPath(editor, Path.next(path))
  return hasNext && Path.next(path)
}

export const getPrePath = (editor: SlatePadEditor, path: Path) => {
  try {
    const hasPre = Editor.hasPath(editor, Path.previous(path))
    return hasPre && Path.previous(path)
  } catch (e) {
    return false
  }
}
