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
  },
  {
    type: 'paragraph',
    children: [
      {
        text: ''
      }
    ]
  },
  {
    type: 'table',
    children: [
      {
        type: 'table-row',
        children: [
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: '1111'
                  }
                ]
              }
            ]
          },
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: '1111'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'table-row',
        children: [
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: '1111'
                  }
                ]
              }
            ]
          },
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: '1111'
                  }
                ]
              }
            ]
          }
        ]
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
