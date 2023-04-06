// 这个类型后面需要完善
import { Editor, Transforms, Text } from 'slate'
import { RenderLeafProps } from 'slate-react'
import { CustomEditor } from '../../types/slate'

export const _renderLeaf = ({
  attributes,
  children,
  leaf
}: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}

export function toggleBold(editor: CustomEditor) {
  const isBold = isLeafActive(editor, 'bold')
  if (isBold) {
    Transforms.setNodes(
      editor,
      { bold: true },
      {
        match: n => {
          return Text.isText(n)
        },
        split: true
      }
    )
  }
  else {
    
  }
}
function isLeafActive(editor: CustomEditor, type = 'bold') {
  const [match] = Editor.nodes(editor, {
    match: n => n[type] === true,
    universal: true
  })
  return !!match
}
