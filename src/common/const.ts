import { Descendant } from 'slate'

export const initialValue: Descendant[] = [
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
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'const x = 10'
          }
        ]
      },
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
