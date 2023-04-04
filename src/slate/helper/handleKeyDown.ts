import { Editor, Range, Element, Text, Transforms, Path, Node } from 'slate'
import { CustomEditor } from '../../types/slate'

export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  editor: CustomEditor
) => {
  // 在代码块中增加语言选择器测试
  if (e.metaKey) {
    Editor.insertNode(editor, {
      type: 'heading-one',
      children: [
        {
          text: ''
        }
      ]
    })
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
        parentNode.type !== 'paragraph'
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
      const [match] = Editor.nodes(editor, {
        match: n =>
          !Editor.isEditor(n) &&
          Element.isElement(n) &&
          (n.type === 'list-item' || n.type === 'code-line')
      })
      if (match) {
        const [_li, liPath] = match
        const [ul, ulPath] = Editor.parent(editor, liPath)
        // li的索引
        const isLast = liPath[liPath.length - 1] === ul.children.length - 1
        if (!isLast) return
        const hasNext = Editor.hasPath(editor, Path.next(ulPath))

        if (!hasNext) {
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
        } else {
          const nextBlock = Node.get(editor, Path.next(ulPath)) as Element
          // 如果下一个块不是段落
          nextBlock?.type === 'paragraph' &&
            Transforms.select(editor, Path.next(ulPath))
        }
      }
    }
  }

  if (e.code === 'KeyA' && e.metaKey) {
    const [match] = Editor.nodes(editor, {
      match: n =>
        !Editor.isEditor(n) &&
        Element.isElement(n) &&
        (n.type === 'bulleted-list' ||
          n.type === 'code-block' ||
          n.type === 'number-list')
    })
    if (match) {
      const [, path] = match
      Transforms.select(editor, path)
      e.preventDefault()
    }
  }
}
