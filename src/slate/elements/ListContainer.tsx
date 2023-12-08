import { RenderElementProps } from 'slate-react'
import { BulletedListElement, NumberListElement } from '../../types/slate'
import { useEffect } from 'react'

export const ListContainer = ({ props }: { props: RenderElementProps }) => {
  // 连续的list合并为一个
  useEffect(() => {
    console.log('unwrap')
  }, [])
  const { attributes, children, element } = props as RenderElementProps<
    NumberListElement | BulletedListElement
  >
  if (props.element.type === 'number-list') {
    return (
      <ol {...attributes} className="slatepad-number-list pl-[20px] my-[8px]">
        {children}
      </ol>
    )
  }
  return (
    <ul className="slatepad-bulleted-list pl-[20px] my-[8px]" {...attributes}>
      {children}
    </ul>
  )
}
