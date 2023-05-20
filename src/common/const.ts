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
        text: 'slatepad 是一个所见即所得的文本编辑器，它使用 Slate.js 构建.无需要繁琐的配置,开箱即用.它内置了常见的编辑器功能,提供强大的编辑体验，包括嵌套块、嵌套内联、自定义样式和自定义组件等。 SlatePad 还包括几个内置的插件和工具。这个编辑器不会像 word 一样有丰富强大的功能，但它会给你带来简单优雅的输入体验。 将来会添加越来越多的功能。'
      }
    ]
  },
  {
    type: 'heading1',
    children: [
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
      },
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
    language: 'typescript'
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
            text: '    <div>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <h1>SlatePad</h1>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <main>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        <SlatePad editor={editor} initialValue={initialValue} />'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      </main>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    </div>'
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
        text: 'By default, Slatepad will come with a toolbar, you can customize the toolbar through '
      },
      {
        text: 'RichUtils',
        code: true
      },
      {
        text: ', the following code shows how to operate in your custom toolbar component:'
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
            text: '  const editor = useSlateStatic()'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '  return ('
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    <div>'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <H1 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading1')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <H2 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading2')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <H3 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading3')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <NumberList onMouseDown={() => RichUtils.toggleBlock(editor, 'number-list')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <BulletedList onMouseDown={() => RichUtils.toggleBlock(editor, 'bulleted-list')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <CheckList onMouseDown={() => RichUtils.toggleBlock(editor, 'check-list-item')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <CodeBlock onMouseDown={() => RichUtils.toggleBlock(editor, 'code-block')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: "      <BlockQuote onMouseDown={() => RichUtils.toggleBlock(editor, 'block-quote')} />"
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <Image onMouseDown={() => RichUtils.insertImage(editor)} />'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '      <Link onMouseDown={() => RichUtils.insertLink(editor)} />'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    </div>'
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
        text: 'The core components of slatepad have a unique class name, you can change its style through CSS class selector.'
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
        text: 'Currently, Slatepad will use the JSON structure of slate.js as the data storage object, the following is a feasible way:'
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
            text: '  console.log(value)'
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
            text: '    {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "type": "fix-select",'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "children": ['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '                "text": ""'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        ]'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    },'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "type": "heading2",'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "children": ['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '                "text": "hello"'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        ]'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    },'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "type": "paragraph",'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "children": ['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '                "text": "content"'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        ]'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    },'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "type": "paragraph",'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        "children": ['
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            {'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '                "text": ""'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '            }'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '        ]'
          }
        ]
      },
      {
        type: 'code-line',
        children: [
          {
            text: '    }'
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
    type: 'bulleted-list',
    children: [
      {
        type: 'list-item',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: ' Table-Block'
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
                text: ' Dark-Theme'
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
        text: '\n'
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
