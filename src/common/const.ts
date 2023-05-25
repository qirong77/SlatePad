import { Descendant } from 'slate'

export const initialValue: Descendant[] = [
  {
    type: 'fix-select',
    children: [
      {
        text: ''
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
export const blankInitial: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }]
  }
]
