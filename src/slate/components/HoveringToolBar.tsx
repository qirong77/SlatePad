import { useEffect, useRef } from 'react'
import { useSlateStatic, useSlateSelection, useFocused } from 'slate-react'
import { Range, Editor, Transforms, Text } from 'slate'
import { Bold, Italic, StrickThrough, UnderLine } from '../../assets/svg'
export const HoveringToolBar = () => {
  const selection = useSlateSelection()
  const editor = useSlateStatic()
  const inFocus = useFocused()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }
    if (!selection || !inFocus || Range.isCollapsed(selection)) {
      el.removeAttribute('style')
      return
    }
    const domSelection = window.getSelection()
    const domRange = domSelection!.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    el.style.opacity = '1'
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`
    el.style.left = `${
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    }px`
  })
  return (
    <div
      className="slatepad-hovering-toolbar  fixed py-[2px]   z-10 top-[-9999px] left-[-9999px] opacity-0 transition-opacity duration-900"
      ref={ref}>
      <div
        style={{
          boxShadow: '2px 0px 12px 0px rgb(4 4 4 / 8%)'
        }}
        className="flex .c-shadow   [&>button]:w-[20px] border-[2px] border-gray-400 bg-white rounded">
        <Bold
          onMouseDown={e => {
            e.preventDefault()
            toggle('bold')
          }}
        />
        <UnderLine
          onMouseDown={e => {
            e.preventDefault()
            toggle('underline')
          }}
        />
        <Italic
          onMouseDown={e => {
            e.preventDefault()
            toggle('italic')
          }}
        />
        <StrickThrough/>
      </div>
    </div>
  )
  function toggle(format: 'bold' | 'italic' | 'underline') {
    const isActive = isLeafActive(format)
    Transforms.setNodes(
      editor,
      { [format]: isActive ? null : true },
      { match: Text.isText, split: true }
    )
    function isLeafActive(format: string) {
      const [match] = Editor.nodes(editor, {
        match: n => n[format],
        universal: true
      })
      return !!match
    }
  }
}
