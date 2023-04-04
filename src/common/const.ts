import { Descendant } from 'slate'

export const initialValue: Descendant[] = [
  {
    type:'heading1',
    children:[{
      text:'这是一级标题'
    }]
  },
  {
    type:'heading1',
    children:[{
      text:'这是一级标题'
    }]
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
        children: [{
          text:'li'
        }]
      }
    ]
  },
  {
    type: 'number-list',
    children: [
      {
        type: 'list-item',
        children: [{
          text:'li'
        }]
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
  },
  {
    type: 'link',
    url: 'https://en.wikipedia.org/wiki/Hypertext',
    children: [{ text: 'hyperlink' }]
  }
]
