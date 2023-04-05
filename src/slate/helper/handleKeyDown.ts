import { getCurrentBlock } from './../utils/getCurrentBlock'
import { Editor, Range, Element, Text, Transforms, Path, Node } from 'slate'
import { CustomEditor } from '../../types/slate'
import { getNextBlock } from '../utils/getNextBlock'

export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  editor: CustomEditor
) => {
  if (e.code === 'ArrowUp') {
  }
  if (e.code === 'ArrowDown') {
    const codeLine = getCurrentBlock(editor, 'code-line')
    if (codeLine) {
      const [block, path] = codeLine
      const nextCodeLine = getNextBlock(editor, path)
      if (!nextCodeLine) {
        const [codeBlock, path] = getCurrentBlock(editor, 'code-block')
        Transforms.setNodes(
          editor,
          { focus: true },
          {
            at: path
          }
        )
      }
    }
  }
  if (e.key === 'Enter') {
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection)
      const [parentNode] = Editor.parent(editor, start.path)
      if (
        Element.isElement(parentNode) &&
        Text.isText(parentNode.children[0]) &&
        parentNode.children[0].text === '' &&
        parentNode.type !== 'paragraph' &&
        parentNode.type !== 'code-line'
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
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const block = getCurrentBlock(editor, 'list-item', 'code-line')
      if (block) {
        const [_li, liPath] = block
        const [ul, ulPath] = Editor.parent(editor, liPath)
        const isLast = liPath[liPath.length - 1] === ul.children.length - 1
        if (!isLast) return
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
        Transforms.select(editor, Path.next(ulPath))
      }
    }
  }

  if (e.code === 'KeyA' && e.metaKey) {
    const match = getCurrentBlock(
      editor,
      'bulleted-list',
      'code-block',
      'number-list'
    )
    if (match) {
      const [, path] = match
      Transforms.select(editor, path)
      e.preventDefault()
    }
  }
}
