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
    type: 'heading1',
    children: [
      {
        text: 'SlatePad'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'slatepad is a WYSIWYG text editor built with '
      },
      {
        type: 'link',
        url: 'https://github.com/ianstormtaylor/slate',
        children: [
          {
            text: 'Slate.js'
          }
        ]
      },
      {
        text: '.No need for cumbersome configuration, out of the box. It has built-in common editor functions, providing a powerful editing experience, including nested blocks, nested inline, custom styles and custom components, etc. SlatePad also includes several built-in plugins and tools. This editor will not have rich and powerful functions like word, but it will bring you a simple and elegant input experience. More and more features will be added in the future.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'slatepad 是一个所见即所得的文本编辑器，它使用 Slate.js 构建.无需要繁琐的配置,开箱即用.它内置了常见的编辑器功能,提供强大的编辑体验，包括嵌套块、嵌套内联、自定义样式和自定义组件等。 SlatePad 还包括几个内置的插件和工具。这个编辑器不会像word一样有丰富强大的功能，但它会给你带来简单优雅的输入体验。 将来会添加越来越多的功能。'
      }
    ]
  },
  {
    type: 'heading2',
    children: [
      {
        text: ''
      },
      {
        type: 'link',
        url: 'https://github.com/qirong77/SlatePad#features',
        children: [
          {
            text: ''
          }
        ]
      },
      {
        text: 'Features'
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
            type: 'paragraph',
            children: [
              {
                text: 'Rich text editing with advanced formatting options'
              }
            ]
          }
        ]
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'integrates common functions of rich text editors'
              }
            ]
          }
        ]
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Built-in plugins and toolsasd'
              }
            ]
          }
        ]
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
            type: 'paragraph',
            children: [
              {
                text: 'Highly customizablea'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'Getting Started'
      }
    ]
  },
  {
    type: 'code-block',
    children: [
      {
        type: 'code-line',
        children: [
          {
            text: 'npm install slatepad'
          }
        ]
      }
    ],
    language: 'shell'
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Then, in your project:'
      }
    ]
  },
  {
    type: 'code-block',
    language: 'jsx',
    children: [
      {
        type: 'code-line',
        children: [
          {
            text: "import { useMemo } from 'react'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "import { SlatePad } from 'slatepad'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '// optional:custom code highlight theme. befor import it,remember run :npm i prism-themes'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "import 'prism-themes/themes/prism-one-light.css'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "import { initialValue } from './common/const'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: ''
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'export const App = () => {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '  const editor = useMemo(() => createSlatepad(), [])'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '  return ('
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    <div>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <h1>SlatePad</h1>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <main>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        <SlatePad editor={editor} initialValue={initialValue} />'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      </main>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    </div>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '  )'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '}'
          }
        ]
      }
    ]
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'RoadMap'
      }
    ]
  },
  {
    type: 'check-list-item',
    children: [
      {
        text: 'Table-Block'
      }
    ],
    checked: false
  },
  {
    type: 'check-list-item',
    children: [
      {
        text: 'Dark-Theme'
      }
    ],
    checked: false
  },
  {
    type: 'check-list-item',
    children: [
      {
        text: 'Markdown Serializing'
      }
    ],
    checked: false
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
