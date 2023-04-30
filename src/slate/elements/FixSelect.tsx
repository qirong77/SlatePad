import { useEffect } from 'react'
import { Editor, Range, Transforms, Path } from 'slate'
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic
} from 'slate-react'
// 作用:当第一个元素不是普通段落(代码块)无法通过commend + a方式删除,或者delete删除的问题
export const FixSelect = ({ props }: { props: RenderElementProps }) => {
  const { attributes, children, element } = props
  const editor = useSlateStatic()
  const selected = useSelected()
  useEffect(() => {
    const selection = editor.selection
    if (selection && Range.isCollapsed(selection)) {
      if (selected) {
        const path = ReactEditor.findPath(editor, element)
        Transforms.select(editor, Editor.start(editor, Path.next(path)))
      }
    }
  }, [selected])
  return (
    <p className="overflow-hidden h-0" {...attributes}>
      {children}
    </p>
  )
}
