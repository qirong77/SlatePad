import { getCurrentBlock } from './../utils/getCurrentBlock'
import { Editor, Range, Transforms, Path, Node } from 'slate'
import { CodeBlockElement, CustomEditor } from '../../types/slate'
import { getNextBlock } from '../utils/getNextBlock'
// 后面需要引入第三库进行隔离,只进行一次判定
export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  editor: CustomEditor
) => {
  if (e.code === 'ArrowDown') {
    const codeLine = getCurrentBlock(editor, 'code-line')
    if (codeLine) {
      const [, path] = codeLine
      const nextCodeLine = getNextBlock(editor, path)
      if (!nextCodeLine) {
        const [codeBlock] = getCurrentBlock(editor, 'code-block')
        document.getElementById((codeBlock as CodeBlockElement).input)?.focus()
      }
    }
  }
  if (e.key === 'Enter' && !e.metaKey) {
    const { selection } = editor
    const [block, path] = getCurrentBlock(editor)
    if (selection && Range.isCollapsed(selection)) {
      if (block.type.includes('heading')) {
        e.preventDefault()
        Transforms.insertNodes(editor, {
          type: 'paragraph',
          children: [{ text: '' }]
        })
        Transforms.select(editor, Path.next(path))
        return
      }
      if (
        !['code-line', 'paragraph'].includes(block.type) &&
        !Node.string(block).length
      ) {
        e.preventDefault()
        editor.deleteBackward('block')
      }
    }
  }
  if (e.key === 'Enter' && e.shiftKey) {
    e.preventDefault()
    Editor.insertText(editor, '\n')
  }
  // commend+enter跳出当前的块
  if (e.key === 'Enter' && e.metaKey) {
    e.preventDefault()
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [block, path] = getCurrentBlock(editor)
      if (block.type === 'list-item' || block.type === 'code-line') {
        const [ul, ulPath] = Editor.parent(editor, path)
        const isLast = path[path.length - 1] === ul.children.length - 1
        if (isLast) {
          Transforms.insertNodes(
            editor,
            {
              type: 'paragraph',
              children: []
            },
            {
              at: Path.next(ulPath)
            }
          )
          Transforms.select(editor, Editor.end(editor, Path.next(ulPath)))
          return
        }
      }
      Transforms.select(editor, Editor.end(editor, Path.next(path)))
    }
  }

  if (e.code === 'KeyA' && e.metaKey) {
    e.preventDefault()
    const match = getCurrentBlock(
      editor,
      'bulleted-list',
      'code-block',
      'number-list'
    )
    if (match) {
      const [, path] = match
      Transforms.select(editor, path)
    } else {
      Transforms.select(editor, [])
    }
  }
}
