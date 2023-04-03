import {
  CustomEditor,
  CustomElementType
} from '../../types/slate'
import {
  Editor,
  Point,
  Range,
  Element as SlateElement,
  Transforms
} from 'slate'
export const withShortcuts = (editor: CustomEditor) => {
  const { deleteBackward, insertText } = editor
  editor.insertText = text => {
    const { selection } = editor

    if (text.endsWith(' ') && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection
      const block = Editor.above(editor, {
        match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n)
      })
      const path = block ? block[1] : []
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
              language: 'js',
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
  // 删除的逻辑,使用above获取最近一层的块,然后根据当前的块的类型进行判断
  editor.deleteBackward = (...args) => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n)
      })

      if (match) {
        const [block, path] = match
        const start = Editor.start(editor, path)

        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          block.type !== 'paragraph' &&
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

          return
        }
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
    '#': 'heading-one',
    '##': 'heading-two',
    '```': 'code-line'
  }
  if (/\d\./.test(str)) return 'list-item'
  if (SHORTCUTS[str]) return SHORTCUTS[str]
  return false
}
