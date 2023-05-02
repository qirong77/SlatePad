import { CustomEditor, CustomElementType } from '../../types/slate'
import {
  Editor,
  NodeEntry,
  Path,
  Point,
  Range,
  Element as SlateElement,
  Transforms
} from 'slate'
import { getCurrentBlock, isCodeBlock } from '../utils/BlockUtils'
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

    if (selection && Range.isCollapsed(selection)) {
      const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>
      const start = Editor.start(editor, path)
      if (
        block.type !== 'paragraph' &&
        !isCodeBlock(block.type) &&
        // 当前光标是否在当前的块的起点
        Point.equals(selection.anchor, start)
      ) {
        const newProperties: Partial<SlateElement> = {
          type: 'paragraph'
        }
        Transforms.setNodes(editor, newProperties)
        if (block.type === 'list-item') {
          Transforms.unwrapNodes(editor, {
            match: n =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              (n.type === 'bulleted-list' || n.type === 'number-list'),
            split: true
          })
        }
        // 如果是code-line需要判断是否是最后一行,如果不是,就不需要转换成段落
        if (block.type === 'code-line') {
          // 是否只有一个codeline
          const isOne = !getPrePath(editor, path) && !getNextPath(editor, path)
          if (isOne) {
            Transforms.unwrapNodes(editor, {
              match: n =>
                SlateElement.isElement(n) &&
                n.type === 'code-block',
              split: true
            })
            Transforms.setNodes(editor, newProperties)
          }
        }
        return
      }

      deleteBackward(...args)
    }
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
