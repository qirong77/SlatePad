# SlatePad

slatepad is a WYSIWYG text editor built with react and [Slate.js](https://github.com/ianstormtaylor/slate). It integrates common editor functions and provides a simple and elegant text input experience.

slatepad是一个所见即所得的React文本编辑器。它集成了常见的编辑器功能，提供了简单优雅的文本输入体验。

## Try It Now

[click here to Playground](https://qirong77.github.io/SlatePad/)

# Getting Started

```shell
npm install slatepad
```

Then, in your project:

```jsx
import { useMemo } from 'react'
import { SlatePad } from 'slatepad'
// optional:custom code highlight theme. befor import it,remember run :npm i prism-themes
// import 'prism-themes/themes/prism-one-light.css'
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

By default, Slatepad will come with a toolbar, you can customize the toolbar through RichUtils, the following code shows how to operate in your custom toolbar component:

```jsx
import { RichUtils } from 'SlatePad'
const ToolBar = ({ showHeaders, setShowHeaders, children }: any) => {
  const editor = useSlateStatic()
  return (
    <div>
      <H1 onMouseDown={() => RichUtils.toggleBlock(editor, 'heading1')} />
      <NumberList onMouseDown={() => RichUtils.toggleBlock(editor, 'number-list')} />
      <Image onMouseDown={() => RichUtils.insertImage(editor)} />
      <Link onMouseDown={() => RichUtils.insertLink(editor)} />
    </div>
  )
}
```

## Custom Style

The core components of slatepad have a unique class name, you can change its style through CSS class selector.For example:

- .slatepad-checklist
- .slatepad-code-block

## Save Data

Slatepad will use the JSON structure of slate.js as the data storage object, the following is a feasible way:

```jsx
const handleSave = value => {
  console.log(value)
// Data Structor
/*
[
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
}
<SlatePad onChange={handleSave} editor={editor} />
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
const fragment = [
    {
        "type": "paragraph",
        "children": [
            {
                "text": ""
            }
        ]
    }
]
// clearAll Content and insert new editor state
EditorUtils.replaceAll(editor,fragment)
```

## RichUtils

reference: CustomToolBar

## createSlatepad

create editor instance of slate.js

## SlatePad

Text input area as well as React component for the editor

# RoadMap

SlatePad is currently in development，I will add new feature in the future.

-  Table-Block

-  Dark-Theme

  