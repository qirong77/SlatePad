import { Editor, Path, Node } from 'slate'
import { CustomEditor, SlateElement } from '../../types/slate'
// 获取和path平级的block
export const getNextBlock = (editor: CustomEditor, path: Path) => {
  const hasNext = Editor.hasPath(editor, Path.next(path))
  if (hasNext) {
    const nextBlock = Node.get(editor, Path.next(path)) as SlateElement
    return nextBlock
  }
  return false
}
export const getNextPath = (editor:CustomEditor,path:Path) => {
  const hasNext = Editor.hasPath(editor, Path.next(path))
  if(hasNext) {
    return Path.next(path)
  }
  return false
}