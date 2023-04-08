import { useEffect } from 'react'
import { Editor, Transforms, Node, Range } from 'slate'
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic
} from 'slate-react'

export function Heading({
  props,
  type
}: {
  props: RenderElementProps
  type: string
}) {
  const { attributes, children, element } = props
  const selected = useSelected()
  const editor = useSlateStatic()

  useEffect(() => {
    const { selection } = editor
    if (!selection || !Range.isCollapsed) return
    const path = ReactEditor.findPath(editor, element)
    if (selected) {
      const start = Editor.start(editor, path)
      const l = /\d/.exec(element.type)?.[0] || '1'
      Transforms.insertText(editor, '#'.repeat(Number(l)), {
        at: start
      })
    } else {
      const start = Editor.start(editor, path)
      // 使用 `Node.string` 获取标题的纯文本字符串，并计算其中 # 的数量
      const titleString = Node.string(element)
      const hashCount = (titleString.match(/^#+/) || [''])[0].length
      Transforms.setNodes(
        editor,
        {
          type: 'heading' + hashCount || 1
        },
        {
          at: path
        }
      )
      const pre = JSON.parse(JSON.stringify(selection.anchor))
      Transforms.select(editor, {
        path: start.path,
        offset: hashCount
      })
      editor.deleteBackward('line')
      Transforms.select(editor, pre)
    }
  }, [selected])
  switch (type) {
    case 'heading5':
      return (
        <h5 className="font-bold text-lg my-[8px]" {...attributes}>
          {children}
        </h5>
      )
    case 'heading4':
      return (
        <h4 className="font-bold text-xl my-[8px]" {...attributes}>
          {children}
        </h4>
      )
    case 'heading3':
      return (
        <h3 className="font-bold text-2xl my-[8px]" {...attributes}>
          {children}
        </h3>
      )
    case 'heading2':
      return (
        <h2 className="font-bold text-3xl my-[8px]" {...attributes}>
          {children}
        </h2>
      )

    default: {
      return (
        <h1 className="font-bold text-4xl my-[8px] " {...attributes}>
          {children}
        </h1>
      )
    }
  }
}
