# SlatePad

slatepad is a WYSIWYG text editor built with [Slate.js](https://github.com/ianstormtaylor/slate).No need for cumbersome configuration, out of the box. It has built-in common editor functions, providing a powerful editing experience, including nested blocks, nested inline, custom styles and custom components, etc. SlatePad also includes several built-in plugins and tools. This editor will not have rich and powerful functions like word, but it will bring you a simple and elegant input experience. More and more features will be added in the future.

slatepad 是一个所见即所得的文本编辑器，它使用 Slate.js 构建.无需要繁琐的配置,开箱即用.它内置了常见的编辑器功能,提供强大的编辑体验，包括嵌套块、嵌套内联、自定义样式和自定义组件等。 SlatePad 还包括几个内置的插件和工具。这个编辑器不会像 word 一样有丰富强大的功能，但它会给你带来简单优雅的输入体验。 将来会添加越来越多的功能。

# Features

- Rich text editing with advanced formatting options
- integrates common functions of rich text editors
- Built-in plugins and toolsasd

- Highly customizablea

# Getting Started

```
npm install slatepad
```

Then, in your project:

```
import { useMemo } from 'react'
import { SlatePad } from 'slatepad'
// optional:custom code highlight theme. befor import it,remember run :npm i prism-themes
import 'prism-themes/themes/prism-one-light.css'
import { initialValue } from './common/const'
export const App = () => {
  const editor = useMemo(() => createSlatepad(), [])
  return (
    <div>
      <h1>SlatePad</h1>
      <main>
        <SlatePad editor={editor} initialValue={initialValue} />
      </main>
    </div>
  )
}
```

# Document

## Custom ToolBar

By default, Slatepad will come with a toolbar, you can customize the toolbar through `RichUtils`, the following code shows how to operate in your custom toolbar component:

```js
import { RichUtils } from 'SlatePad'
const ToolBar = ({ showHeaders, setShowHeaders, children }: any) => {
  const editor = useSlateStatic()
  return (
    <div>
      <H1 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading1')} />
      <H2 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading2')} />
      <H3 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading3')} />
      <NumberList onMouseDown={() => RichUtils.toggleBlock(editor, 'number-list')} />
      <BulletedList onMouseDown={() => RichUtils.toggleBlock(editor, 'bulleted-list')} />
      <CheckList onMouseDown={() => RichUtils.toggleBlock(editor, 'check-list-item')} />
      <CodeBlock onMouseDown={() => RichUtils.toggleBlock(editor, 'code-block')} />
      <BlockQuote onMouseDown={() => RichUtils.toggleBlock(editor, 'block-quote')} />
      <Image onMouseDown={() => RichUtils.insertImage(editor)} />
      <Link onMouseDown={() => RichUtils.insertLink(editor)} />
    </div>
  )
}
```

## Custom Style

The core components of slatepad have a unique class name, you can change its style through CSS class selector.

## Save Data

Currently, Slatepad will use the JSON structure of slate.js as the data storage object, the following is a feasible way:

```jsx
const handleSave = value => {
  console.log(value)
}
;<SlatePad onChange={handleSave} editor={editor} />
// Data Structor
/*
[
    {
        "type": "fix-select",
        "children": [
            {
                "text": ""
            }
        ]
    },
    {
        "type": "heading2",
        "children": [
            {
                "text": "hello"
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": "content"
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": ""
            }
        ]
    }
]
*/
```

## Normalizing

You use SlatePad's default data structure and convert it into the form you need, such as markdown. Slatepad does not provide this function, you can achieve your needs through custom serialization. Reference: https://docs.slatejs.org/concepts/11-normalizing

# API

## EditorUtils

- clearAll：clear editor content.
- clearHistory：clear slatepad history
- replaceAll：replace content with slate.js fragment

```js
import { SlatePad, EditorUtils, createSlatepad } from 'slatepad'
const editor = createSlatepad()
EditorUtils.clearAll(editor)
```

## RichUtils

## createSlatepad

create editor instance of slate.js

## SlatePad

# RoadMap

SlatePad is currently in development，I will add new feature in the future.

- [ ] Table-Block
- [ ] Dark-Theme
