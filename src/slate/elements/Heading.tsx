import React, { useEffect, useRef, useState } from 'react'
import { Editor, Transforms, Node, Range, Path } from 'slate'
import { ReactEditor, RenderElementProps, useSelected, useSlateStatic } from 'slate-react'
import { Arrow } from '../../assets/svg/icon'
import { getNextBlock, isHeadBlock } from '../utils/BlockUtils'
import { CustomElementType, HeadingElement } from '../../types/slate'
import { HistoryEditor } from 'slate-history'

export function Heading({ props, type }: { props: RenderElementProps; type: string }) {
  const { attributes, children, element } = props as RenderElementProps<HeadingElement>
  const selected = useSelected()
  const editor = useSlateStatic()
  const [collapse, setCollapse] = useState(false)
  // 当前的段落是否已经处于selected的状态
  const isEdit = useRef(false)
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    collapseHead()
  }
  useEffect(() => {
    const { selection } = editor
    if (!selection || !Range.isCollapsed(selection)) return
    const path = ReactEditor.findPath(editor, element)
    // 文本开始的path
    const start = Editor.start(editor, path)
    const currentHead = Number(/\d/.exec(element.type)?.[0] || '1')
    const [, tags] = /^(#+)\s/.exec(Node.string(element)) || []
    if (selected) {
      if (!tags) {
        // 某些更改不存入记录,否则会导致重做循环
        if (isEdit.current) {
          HistoryEditor.withoutSaving(editor, () => {
            Transforms.setNodes(editor, { type: 'paragraph' }, { at: path })
          })
        } else
          HistoryEditor.withoutSaving(editor, () => {
            Transforms.insertText(editor, '#'.repeat(currentHead) + ' ', {
              at: start
            })
          })
      } else {
        if (tags.length === currentHead) return
        Transforms.setNodes(
          editor,
          {
            type: `heading${tags.length}` as any
          },
          {
            at: path
          }
        )
      }
    } else {
      if (!tags) return
      const prePath = JSON.parse(JSON.stringify(selection.anchor))
      Transforms.select(editor, {
        path: start.path,
        offset: currentHead + 1
      })
      editor.deleteBackward('line')
      Transforms.select(editor, prePath)
    }
  })
  useEffect(() => {
    isEdit.current = selected
  }, [selected])

  return (
    <div
      {...attributes}
      className={'slatepad-heading font-bold relative my-[20px]'}
      suppressContentEditableWarning
      contentEditable={collapse ? false : true}>
      <Arrow
        contentEditable={false}
        onClick={handleClick}
        className={`absolute hover:bg-white left-[-30px] translate-y-[-50%] top-[50%] opacity-${
          collapse ? 100 : 0
        } hover:opacity-100 transition-all ${collapse ? '-rotate-90' : ''}`}
      />
      <Head />
      {collapse && (
        <div
          style={{
            boxShadow: '2px 0px 12px 0px rgb(4 4 4 / 3%)'
          }}
          className="wrapper cursor-pointer translate-x-[-5px] scale-y-125 absolute top-0 w-full h-full border-[1px] rounded"></div>
      )}
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
        return <h1 className="font-bold text-4xl my-[8px] ">{children}</h1>
      }
    }
  }
  /* 
  折叠段落的逻辑:把和当前段落平级的块都加一个隐藏的类(隐藏小标题和非标题)
  打开段落的逻辑:把和当前段落平级的块都移除这个类(只打开前面非标题,)
  */
  function collapseHead() {
    const path = ReactEditor.findPath(editor, element)
    const doms: HTMLElement[] = []
    let currentPath = path
    while (true) {
      const nextBlock = getNextBlock(editor, currentPath)
      if (nextBlock && canCollapse(nextBlock.type)) {
        doms.push(ReactEditor.toDOMNode(editor, nextBlock))
        currentPath = Path.next(currentPath)
      } else break
    }
    for (const dom of doms) {
      collapse ? dom.classList.remove('hidden-block') : dom.classList.add('hidden-block')
    }
    setCollapse(!collapse)
    function canCollapse(type: CustomElementType) {
      if (!isHeadBlock(type)) return true
      const headLevel = Number(type.at(-1))
      const currentLevel = Number(element.type.at(-1))
      return currentLevel < headLevel
    }
  }
}
