import { useMemo } from 'react'
import { RichUtils, SlatePad } from './slate/SlatePad'
import { createSlatepad } from './slate/plugins/editor'
export const App = () => {
  const editor = useMemo(() => createSlatepad(), [])
  const obj = [
    {
      type: 'paragraph',
      children: [
        {
          text: '123123'
        }
      ]
    },
    {
      type: 'bulleted-list',
      children: [
        {
          type: 'check-list-item',
          checked: true,
          children: [
            {
              text: 'Slide to the left.'
            }
          ]
        }
      ]
    },
    {
      type: 'paragraph',
      children: [
        {
          text: 'check\\nasd'
        }
      ]
    },
    {
      type: 'paragraph',
      children: [
        {
          text: ''
        }
      ]
    }
  ]
  console.log(RichUtils.slateToMarkdown(obj))
  // RichUtils.insertMarkdown(editor)
  return (
    <div>
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <main className="w-[80vw] h-[80vh]">
        <SlatePad editor={editor} />
      </main>
    </div>
  )
}
