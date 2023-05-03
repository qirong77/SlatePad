import { CustomEditor, CustomElementType } from '../../types/slate'
import {
  Editor,
  NodeEntry,
  Point,
  Range,
  Element as SlateElement,
  Transforms
} from 'slate'
import {
  getCurrentBlock,
  isCodeBlock,
  isListParagraph
} from '../utils/BlockUtils'
import { getNextPath, getPrePath } from '../utils/PathUtils'
export const withShortcuts = (editor: CustomEditor) => {
  const { deleteBackward, insertText } = editor
  editor.insertText = text => {
    const { selection } = editor
    if (text.endsWith(' ') && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection
      const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>
      // 快捷转换不对代码块生效
      if (block.type === 'code-line' || block.type === 'code-block') {
        insertText(text)
        return
      }
      const start = Editor.start(editor, path)
      const range = { anchor, focus: start }
      const beforeText = Editor.string(editor, range) + text.slice(0, -1)
      const type = getType(beforeText)
      if (type) {
        Transforms.select(editor, range)
        if (!Range.isCollapsed(range)) {
          Transforms.delete(editor)
        }
        const newProperties: Partial<SlateElement> = {
          type
        }
        Transforms.setNodes<SlateElement>(editor, newProperties, {
          match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n)
        })
        if (type === 'list-item') {
          Transforms.wrapNodes(
            editor,
            {
              type: /\d\./.test(beforeText) ? 'number-list' : 'bulleted-list',
              children: []
            },
            {
              match: n =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n.type === 'list-item'
            }
          )
        }
        if (type === 'code-line') {
          Transforms.wrapNodes(
            editor,
            {
              type: 'code-block',
              language: beforeText?.replace('```', '') || '',
              children: []
            },
            {
              match: n =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n.type === 'code-line'
            }
          )
        }
        return
      }
    }

    insertText(text)
  }
  editor.deleteBackward = (...args) => {
    const { selection } = editor
    const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>
    const start = Editor.start(editor, path)
    if (selection && Range.isCollapsed(selection)) {
      const [list, listPath] = getCurrentBlock(editor, 'list-item') || []
      // debugger
      // 如果当前的光标不在当前块的起点,执行默认的方法
      if (!Point.equals(selection.anchor, start)) {
        deleteBackward(...args)
        return
      }
      const newProperties: Partial<SlateElement> = {
        type: 'paragraph'
      }
      // 当前的光标在某个list-item里面,因为withNormaliz插件,list里面的元素会默认是个段落,
      if (block.type === 'paragraph' && isListParagraph(editor, path)) {
        const [list, listPath] = Editor.parent(
          editor,
          path
        ) as NodeEntry<SlateElement>
        Transforms.setNodes(editor, newProperties, { at: listPath })
        Transforms.unwrapNodes(editor, {
          match: n =>
            SlateElement.isElement(n) &&
            (n.type === 'bulleted-list' || n.type === 'number-list'),
          split: true,
          // 由于嵌套list的结构,所有的unwrap都必须指明路径,否则会将整个路径上的嵌套结构都结构铺平
          at: listPath
        })
        return
      }
      // 如果是code-line,当按下delete时,需要判断是否是最后一行,如果不是,就不需要转换成普通段落
      if (block.type === 'code-line') {
        const [, blockPath] = Editor.parent(editor, path)
        // 是否只有一个codeline,就把当前的代码块转换为行
        const isOne = !getPrePath(editor, path) && !getNextPath(editor, path)
        if (isOne) {
          Transforms.unwrapNodes(editor, {
            match: n => SlateElement.isElement(n) && n.type === 'code-block',
            at: blockPath
          })
          Transforms.setNodes(editor, {
            type: 'paragraph',
            children: [{ text: '' }]
          })
          return
        }
      }
      // 其他情况按下delete,把他转换为普通的段落即可
      if (block.type !== 'paragraph' && !isCodeBlock(block.type)) {
        Transforms.setNodes(editor, newProperties)
        return
      }
    }
    deleteBackward(...args)
  }
  return editor
}

function getType(str: string): CustomElementType | false {
  const SHORTCUTS: { [key: string]: CustomElementType } = {
    '*': 'list-item',
    '-': 'list-item',
    '+': 'list-item',
    '>': 'block-quote',
    '```': 'code-line',
    '#': 'heading1',
    '##': 'heading2',
    '###': 'heading3',
    '####': 'heading4'
  }
  if (/\d\./.test(str)) return 'list-item'
  if (/^```/.test(str)) return 'code-line'
  if (SHORTCUTS[str]) return SHORTCUTS[str]
  return false
}
