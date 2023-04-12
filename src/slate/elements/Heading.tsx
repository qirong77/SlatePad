import React, { useEffect, useState } from 'react'
import { Editor, Transforms, Node, Range, Path } from 'slate'
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic
} from 'slate-react'
import { Arrow } from '../../assets/svg'
import { getNextBlock } from '../utils/getNextBlock'

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
  const [collapse, setCollapse] = useState(false)
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault()
    const path = ReactEditor.findPath(editor, element)
    const doms: HTMLElement[] = []
    let currentPath = path
    while (true) {
      const nextBlock = getNextBlock(editor, currentPath)
      if (nextBlock && !nextBlock.type.includes('heading')) {
        doms.push(ReactEditor.toDOMNode(editor, nextBlock))
        currentPath = Path.next(currentPath)
      } else break
    }
    doms.forEach(dom => {
      if (collapse) {
        dom.classList.remove('hidden-block')
      } else {
        dom.classList.add('hidden-block')
      }
    })
    setCollapse(!collapse)
  }
  useEffect(() => {
    const { selection } = editor
    if (!selection || !Range.isCollapsed(selection)) return
    const path = ReactEditor.findPath(editor, element)
    if (selected) {
      if (/^#/.test(Node.string(element))) return
      const start = Editor.start(editor, path)
      const l = /\d/.exec(element.type)?.[0] || '1'
      Transforms.insertText(editor, '#'.repeat(Number(l)) + ' ', {
        at: start
      })
    } else {
      const start = Editor.start(editor, path)
      // 使用 `Node.string` 获取标题的纯文本字符串，并计算其中 # 的数量
      const titleString = Node.string(element)
      const markHeader = titleString.match(/^#+\s/)
      if (!markHeader) return
      const hashCount = (markHeader || [''])[0].length

      Transforms.setNodes(
        editor,
        {
          type: `heading${hashCount - 1 || 1}`
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
  return (
    <div
      {...attributes}
      className={'font-bold  relative'}
      suppressContentEditableWarning
      contentEditable={collapse ? false : true}>
      <Arrow
        contentEditable={false}
        onClick={handleClick}
        className={`absolute hover:bg-white left-[-30px] translate-y-[-50%] top-[50%] opacity-0 hover:opacity-100 transition-all ${
          collapse ? '-rotate-90' : ''
        }`}
      />
      <Head />
    </div>
  )
  function Head() {
    switch (type) {
      case 'heading5':
        return <h5 className="text-lg ">{children}</h5>
      case 'heading4':
        return <h4 className="text-xl">{children}</h4>
      case 'heading3':
        return <h3 className="text-2xl">{children}</h3>
      case 'heading2':
        return <h2 className="text-3xl">{children}</h2>
      default: {
        return (
          <h1 className="font-bold text-4xl my-[8px] ">
            {children}
            {collapse && <span contentEditable={false}>...</span>}
          </h1>
        )
      }
    }
  }
}
