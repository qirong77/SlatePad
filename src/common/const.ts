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
        text: 'slatepad is a WYSIWYG text editor built with react and '
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
        text: '. It integrates common editor functions and provides a simple and elegant text input experience.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'slatepad是一个所见即所得的React文本编辑器。它集成了常见的编辑器功能，提供了简单优雅的文本输入体验。'
      }
    ]
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'Try It Now'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: ''
      },
      {
        type: 'link',
        url: 'https://qirong77.github.io/SlatePad/',
        children: [
          {
            text: 'click here to Playground'
          }
        ]
      },
      {
        text: ''
      }
    ]
  },
  {
    type: 'heading1',
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
            text: '/* optional:custom code highlight theme. befor import it,remember run :'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'npm i prism-themes'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "1. lightTheme:import 'prism-themes/themes/prism-one-light.css'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "2. darkTheme:import 'prism-themes/themes/prism-one-dark.css'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '*/'
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
    ],
    language: 'typescript'
  },
  {
    type: 'heading1',
    children: [
      {
        text: 'Document'
      }
    ]
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'Custom ToolBar'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'By default, Slatepad will come with a toolbar, you can customize the toolbar through RichUtils, the following code shows how to operate in your custom toolbar component:\n'
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
            text: "import { RichUtils } from 'SlatePad'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'const ToolBar = ({ showHeaders, setShowHeaders, children }: any) => {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '  const editor = useSlateStatic()'
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
            text: "      <H1-Button onMouseDown={() => RichUtils.toggleBlock(editor, 'heading1')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <NumberList-Button onMouseDown={() => RichUtils.toggleBlock(editor, 'number-list')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <Image-Button onMouseDown={() => RichUtils.insertImage(editor)} />'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <Link-Button onMouseDown={() => RichUtils.insertLink(editor)} />'
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
    ],
    language: 'typescript'
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'Custom Style'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'The core components of slatepad have a unique class name, you can change its style through CSS class selector.For example:'
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
                text: '.slatepad-checklist'
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
                text: '.slatepad-code-block'
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
        text: 'Save Data'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Slatepad will use the JSON structure of slate.js as the data storage object, the following is a feasible way:'
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
            text: 'const handleSave = value => {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '  console.log(value)'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '// Data Structor'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '/*'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "type": "paragraph",'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "children": ['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '                "text": ""'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        ]'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: ']'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '*/'
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
      },
      {
        type: 'code-line',
        children: [
          {
            text: '<SlatePad onChange={handleSave} editor={editor} />'
          }
        ]
      }
    ],
    language: 'typescript'
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'Normalizing'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "You use SlatePad's default data structure and convert it into the form you need, such as markdown. Slatepad does not provide this function, you can achieve your needs through custom serialization. Reference: "
      },
      {
        type: 'link',
        url: 'https://docs.slatejs.org/concepts/11-normalizing',
        children: [
          {
            text: 'https://docs.slatejs.org/concepts/11-normalizing'
          }
        ]
      },
      {
        text: ''
      }
    ]
  },
  {
    type: 'heading1',
    children: [
      {
        text: 'API'
      }
    ]
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'EditorUtils'
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
                text: 'clearAll：clear editor content.'
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
                text: 'clearHistory：clear slatepad history'
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
                text: 'replaceAll：replace content with slate.js fragment'
              }
            ]
          }
        ]
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
            text: "import { SlatePad, EditorUtils, createSlatepad } from 'slatepad'"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'const editor = createSlatepad()'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'EditorUtils.clearAll(editor)'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'const fragment = ['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "type": "paragraph",'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "children": ['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '                "text": ""'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        ]'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: ']'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '// clearAll Content and insert new editor state'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: 'EditorUtils.replaceAll(editor,fragment)'
          }
        ]
      }
    ],
    language: 'typescript'
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'RichUtils'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'reference: CustomToolBar'
      }
    ]
  },
  {
    type: 'heading2',
    children: [
      {
        text: 'createSlatepad'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'create editor instance of slate.js'
      }
    ]
  },
  {
    type: 'heading2',
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
        text: 'Text input area as well as React component for the editor'
      }
    ]
  },
  {
    type: 'heading1',
    children: [
      {
        text: 'RoadMap'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'SlatePad is currently in development，I will add new feature in the future.'
      }
    ]
  },
  {
    type: 'check-list-item',
    children: [
      {
        text: 'Table'
      }
    ],
    checked: true
  },
  {
    type: 'check-list-item',
    children: [
      {
        text: 'NestList'
      }
    ],
    checked: true
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
        text: 'Intelligenter support for bold/code and other text node'
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
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '  '
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
