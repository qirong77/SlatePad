import { ReactEditor, RenderElementProps, useSelected, useSlateStatic } from 'slate-react'
import { ImageElement } from '../../types/slate'
import { Transforms } from 'slate'
import { useEffect, useState } from 'react'

export const Image = ({ props }: { props: RenderElementProps<ImageElement> }) => {
  const { attributes, children, element } = props
  const [url, setUrl] = useState(element.url)
  const selected = useSelected()
  const editor = useSlateStatic()
  useEffect(() => {
    const newUrl = editor.onInsertImage?.(element.url) || ''
    Transforms.setNodes(
      editor,
      { url: newUrl },
      {
        at: ReactEditor.findPath(editor, element)
      }
    )
  }, [])
  return (
    <div
      {...attributes}
      className={`slatepad-image min-h-[50px] relative border-[3px] rounded ${
        selected ? 'border-blue-500' : 'border-transparent'
      }`}>
      {children}
      <div
        contentEditable={false}
        className="absolute  top-0 left-0 border-[2px] border-blue-400 rounded z-20"
        style={{
          opacity: selected ? '100%' : '0%'
        }}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          onBlur={e => {
            Transforms.setNodes(editor, {
              url: e.target.value
            })
          }}
          className="rounded pl-[2px]"
        />
      </div>
      <img src={element.url} className="w-full h-full" />
    </div>
  )
}
