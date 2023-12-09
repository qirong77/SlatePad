import {
  getCurrentBlock,
  getNextBlock,
  isCodeBlock,
  isHeadBlock,
  isListParagraph
} from '../utils/BlockUtils'
import { Editor, Range, Transforms, Path, Node, NodeEntry, Point, Element } from 'slate'
import { SlatePadEditor, SlateElement } from '../types'
import { ReactEditor } from 'slate-react'
import { getNextPath, getPrePath } from '../utils/PathUtils'

// 后面需要引入第三库进行隔离,只进行一次判定
export const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, editor: SlatePadEditor) => {
  // enter
  if (e.key === 'Enter' && !e.metaKey && !e.shiftKey) {
    const { selection } = editor
    if (!selection) return
    if (e.nativeEvent.isComposing || !Range.isCollapsed(selection)) return
    const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>
    // 如果当前是一个代码块,就跳过
    if (isCodeBlock(block.type)) {
      return
    }
    // 当光标处于某个list
    if (block.type === 'paragraph' && isListParagraph(editor, path)) {
      const [list, listPath] = Editor.parent(editor, path) as NodeEntry<SlateElement>
      const end = Editor.end(editor, path)
      // 如果当前的list-paragraph没有内容, 就转化为普通的段落
      if (!Node.string(block).length) {
        e.preventDefault()
        // 如果当前块是个列表
        editor.deleteBackward('block')
        return
      }
      // 在列表的末尾,,按下enter.生成新的平级list.生成新的平级list
      if (Point.equals(selection.anchor, end) && Node.string(list)) {
        e.preventDefault()
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
        //如果在这个列表的中间或者开头按下enter,会把这个列表一分为2
      } else {
        Editor.withoutNormalizing(editor, () => {
          const [, ulPath] = Editor.parent(editor, listPath)
          Transforms.unwrapNodes(editor, {
            match(node) {
              return Element.isElement(node) && node.type === 'list-item'
            },
            at: listPath
          })
          // slatejs会合并多个Trasnformer,在上一个Transform结束后,为了获取最新的状态,使用宏任务
          setTimeout(() => {
            for (const [child, childPath] of Node.children(editor, ulPath)) {
              if (Element.isElement(child) && child.type !== 'list-item')
                Transforms.wrapNodes(
                  editor,
                  {
                    type: 'list-item',
                    children: []
                  },
                  {
                    at: childPath
                  }
                )
            }
          })
        })
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

  }
}

// 在表格中,进行上下切换
function handleTable(editor: SlatePadEditor, direction: 'ArrowUp' | 'ArrowDown') {
  const isArrowDown = direction === 'ArrowDown'
  const [, cellPath] = getCurrentBlock(editor, 'table-cell') || []
  const [block, blockPath] = getCurrentBlock(editor) || []
  if (!cellPath || !editor.selection || !blockPath || !block) return
  const hasNext = isArrowDown ? getNextPath(editor, blockPath) : getPrePath(editor, blockPath)
  // 如果当前的块有换行,按下上下键后,可能还需要保留在当前块,所以需要进行判断
  const str = Node.string(block)
  const text = isArrowDown
    ? str.slice(editor.selection.focus.offset)
    : str.slice(0, editor.selection.focus.offset)
  if (!hasNext && !text.includes('\n')) {
    const realNextPath = [...cellPath]
    const nextLevel = isArrowDown ? 1 : -1
    realNextPath[realNextPath.length - 2] = realNextPath[realNextPath.length - 2] + nextLevel
    if (Path.isPath(realNextPath) && Editor.hasPath(editor, realNextPath)) {
      Transforms.select(editor, Editor.end(editor, realNextPath))
      return true
    }
  }
}
