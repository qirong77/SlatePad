import { Descendant } from 'slate'

export const initialValue: Descendant[] = [
  {
    type: 'heading1',
    children: [
      {
        text: '这是一级标题'
      }
    ]
  },
  {
    type: 'check-list-item',
    checked: true,
    children: [{ text: 'Slide to the left.' }]
  },
  {
    type: 'heading1',
    children: [
      {
        text: '这是一级标题'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'hello:slatepad'
      }
    ]
  },
  {
    type: 'bulleted-list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'li'
          }
        ]
      }
    ]
  },
  {
    type: 'number-list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'li'
          }
        ]
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
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'hello:slatepad'
      },
      {
        type: 'link',
        url: 'https://en.wikipedia.org/wiki/Hypertext',
        children: [{ text: 'this is a link' }]
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'hello:slatepad'
      }
    ]
  },
  {
    type: 'image',
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    children: [{ text: '' }]
  }
]
