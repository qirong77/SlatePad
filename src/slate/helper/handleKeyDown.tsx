import {
  getCurrentBlock,
  getNextBlock,
  isCodeBlock,
  isHeadBlock,
  isListParagraph
} from '../utils/BlockUtils'
import { Editor, Range, Transforms, Path, Node, NodeEntry, Point } from 'slate'
import { CustomEditor, SlateElement } from '../../types/slate'
import { ReactEditor } from 'slate-react'
// 后面需要引入第三库进行隔离,只进行一次判定
export const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) => {
  // enter codeblock-languageSelector
  if (e.code === 'ArrowUp') {
    const [block, path] = getCurrentBlock(editor) || []
    if (block && path) {
      try {
        const prePath = Path.previous(path)
        const preBlock = Node.get(editor, prePath) as SlateElement
        if (preBlock?.type === 'code-block') {
          e.preventDefault()
          ReactEditor.toDOMNode(editor, preBlock).querySelector('input')?.focus()
        }
      } catch (e) {}
    }
  }
  if (e.code === 'ArrowDown') {
    const codeLine = getCurrentBlock(editor, 'code-line')
    if (codeLine) {
      const [, path] = codeLine
      const nextCodeLine = getNextBlock(editor, path)
      if (!nextCodeLine) {
        e.preventDefault()
        const [codeBlock] = getCurrentBlock(editor, 'code-block') || []
        codeBlock && ReactEditor.toDOMNode(editor, codeBlock).querySelector('input')?.focus()
      }
    }
  }
  // enter
  if (e.key === 'Enter' && !e.metaKey && !e.shiftKey) {
    if (e.nativeEvent.isComposing) return
    const { selection } = editor
    const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>

    if (selection && Range.isCollapsed(selection)) {
      // 当前是标题,换行之后不保留保留标题样式
      if (isHeadBlock(block.type)) {
        e.preventDefault()
        Transforms.insertNodes(editor, {
          type: 'paragraph',
          children: [{ text: '' }]
        })
        Transforms.select(editor, Path.next(path))
        return
      }
      // 如果当前是一个代码块,就跳过
      if (isCodeBlock(block.type)) {
        return
      }
      // 当光标处于某个list,按下enter.生成新的平级list
      if (block.type === 'paragraph' && isListParagraph(editor, path)) {
        e.preventDefault()
        const [list, listPath] = Editor.parent(editor, path) as NodeEntry<SlateElement>
        const end = Editor.end(editor, path)
        if (Point.equals(selection.anchor, end) && Node.string(list)) {
          Transforms.insertNodes(
            editor,
            {
              type: 'list-item',
              children: []
            },
            { at: Path.next(listPath) }
          )
          Transforms.select(editor, Editor.end(editor, Path.next(listPath)))
          return
        }
        // 如果当前的list-paragraph没有内容, 就转化为普通的段落
        if (!Node.string(block).length) {
          // 如果当前块是个列表
          editor.deleteBackward('block')
          return
        }
      }
      // 当光标在某个空段落,这个块在list中,如果当前的块是list的最后一个元素,跳出当前的list
      const [parent, parentPath] = Editor.parent(editor, path) as NodeEntry<SlateElement>
      if (
        block.type === 'paragraph' &&
        parent.type === 'list-item' &&
        !isListParagraph(editor, path) &&
        !Node.string(block)
      ) {
        e.preventDefault()
        editor.deleteBackward('character')
        Transforms.insertNodes(
          editor,
          {
            type: 'list-item',
            children: []
          },
          { at: Path.next(parentPath) }
        )
        Transforms.select(editor, Path.next(parentPath))
      }
      // 如果当前的块是个空内容,就编程普通段落
      if (block.type !== 'paragraph' && !Node.string(block)) {
        e.preventDefault()
        editor.deleteBackward('character')
        return
      }
    }
  }
  // shift+enter
  if (e.key === 'Enter' && e.shiftKey) {
    const [block, path] = getCurrentBlock(editor) || []
    if (!isCodeBlock(block!.type)) {
      e.preventDefault()
      Editor.insertText(editor, '\n')
    }
  }
  // commend+enter跳出当前的块
  if (e.key === 'Enter' && e.metaKey) {
    e.preventDefault()
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [block, path] = getCurrentBlock(editor, 'list-item', 'code-line') || []
      if (block && path) {
        const [ul, ulPath] = Editor.parent(editor, path)
        const isLast = path[path.length - 1] === ul.children.length - 1
        if (isLast) {
          Transforms.insertNodes(
            editor,
            {
              type: 'paragraph',
              children: [{ text: '' }]
            },
            {
              at: Path.next(ulPath)
            }
          )
          Transforms.select(editor, Editor.end(editor, Path.next(ulPath)))
          return
        }
      }
      Transforms.select(editor, Editor.end(editor, Path.next(path as Path)))
    }
  }
  if (e.code === 'KeyA' && e.metaKey) {
    e.preventDefault()
    const match = getCurrentBlock(editor, 'bulleted-list', 'code-block', 'number-list')
    if (match) {
      const [, path] = match
      Transforms.select(editor, path)
    } else {
      Transforms.select(editor, [])
    }
  }
}
