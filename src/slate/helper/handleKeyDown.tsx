import { getCurrentBlock, getNextBlock, isHeadBlock } from '../utils/BlockUtils'
import {
  Editor,
  Range,
  Transforms,
  Path,
  Node,
  Element,
  NodeEntry
} from 'slate'
import { CustomEditor, SlateElement } from '../../types/slate'
import { ReactEditor } from 'slate-react'
// 后面需要引入第三库进行隔离,只进行一次判定
export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  editor: CustomEditor
) => {
  // enter codeblock-languageSelector
  // if (e.code === 'ArrowUp') {
  //   const [block, path] = getCurrentBlock(editor) || []
  //   if (block && path) {
  //     const prePath = Path.previous(path)
  //     const preBlock = Node.get(editor, prePath) as SlateElement
  //     if (preBlock?.type === 'code-block') {
  //       e.preventDefault()
  //       ReactEditor.toDOMNode(editor, preBlock).querySelector('input')?.focus()
  //     }
  //   }
  // }

  // if (e.code === 'ArrowDown') {
  //   const codeLine = getCurrentBlock(editor, 'code-line')
  //   if (codeLine) {
  //     const [, path] = codeLine
  //     const nextCodeLine = getNextBlock(editor, path)
  //     if (!nextCodeLine) {
  //       e.preventDefault()
  //       const [codeBlock] = getCurrentBlock(editor, 'code-block') || []
  //       codeBlock &&
  //         ReactEditor.toDOMNode(editor, codeBlock)
  //           .querySelector('input')
  //           ?.focus()
  //     }
  //   }
  // }
  // 处理enter
  if (e.key === 'Enter' && !e.metaKey) {
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
      // 如果当前块是个空内容的时候按下enter
      if (!Node.string(block).length) {
        // 如果当前块是个列表
        if (block.type === 'list-item') {
          e.preventDefault()
          editor.deleteBackward('block')
          return
        }
        /* 
        如果当前在某个list-item的容器中,但是你当前可能是在一个codeblock或者段落里面输入
        由于当前的内容是空的,且你按了换行,所以光标需要跳到外层li的相邻li
        */
        // const [list, listPath] = getCurrentBlock(editor, 'list-item') || []
        // editor.deleteBackward('character')
        // if (list && listPath) {
        //   e.preventDefault()
        //   Transforms.unwrapNodes(editor, {
        //     match: n => Element.isElement(n) && n.type === 'list-item',
        //     split: true
        //   })
          // Transforms.setNodes(editor, {
          //   type: 'list-item'
          // })
          // editor.deleteBackward('character')
        // }
        
        return
      }

      // 嵌套列表,如果当前的块在某个list item里面
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
      const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>
      if ((block && block.type === 'list-item') || block.type === 'code-line') {
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
