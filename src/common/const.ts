import { Descendant } from 'slate'

export const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'hello:slatepad'
      }
    ]
  },
  {
    type: 'code-block',
    language: 'js',
    children: [
      {
        type: 'code-line',
        children: [
          {
            text: 'const x = 10'
          }
        ]
      }
    ]
  }
]
