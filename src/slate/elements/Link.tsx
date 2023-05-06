import React, { useState } from 'react'
import { Transforms } from 'slate'
import { ReactEditor, RenderElementProps, useSelected, useSlateStatic } from 'slate-react'

export function Link({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props
  const editor = useSlateStatic()
  const selected = useSelected()
  const resetUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { url: e.target.value }, { at: path })
  }
  return (
    <a
      onDoubleClick={e => {
        e.preventDefault()
        window.open(element.url, '_blank')
      }}
      target="_blank"
      {...attributes}
      className={`slatepad-link rounded text-blue-500  px-[2px] relative border-blue-500 cursor-pointer`}
      style={{
        borderWidth: selected ? '1.6px' : '0px'
      }}
      href={element.url}>
      {children}
      <span
        contentEditable={false}
        className={`flex absolute text-xs  p-[2px] top-[25px] transition-opacity opacity-0 left-0 ${
          selected ? 'opacity-100' : ''
        }`}
        style={{
          boxShadow: 'rgb(4 4 4 / 10%) 0px 0px 5px 1px',
          zIndex: selected ? 1 : -1
        }}>
        <input onChange={resetUrl} className="rounded  outline-none " value={element.url} />
      </span>
    </a>
  )
}
