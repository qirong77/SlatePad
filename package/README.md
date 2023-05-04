# SlatePad

slatepad is a WYSIWYG text editor built with [Slate.js](https://github.com/ianstormtaylor/slate).No need for cumbersome configuration, out of the box. It has built-in common editor functions, providing a powerful editing experience, including nested blocks, nested inline, custom styles and custom components, etc. SlatePad also includes several built-in plugins and tools. This editor will not have rich and powerful functions like word, but it will bring you a simple and elegant input experience. More and more features will be added in the future.

slatepad 是一个所见即所得的文本编辑器，它使用 Slate.js 构建.无需要繁琐的配置,开箱即用.它内置了常见的编辑器功能,提供强大的编辑体验，包括嵌套块、嵌套内联、自定义样式和自定义组件等。 SlatePad 还包括几个内置的插件和工具。这个编辑器不会像word一样有丰富强大的功能，但它会给你带来简单优雅的输入体验。 将来会添加越来越多的功能。

## PlayGround

[Click here to experience it now](https://qirong77.github.io/SlatePad/)

## Features

- Rich text editing with advanced formatting options
- integrates common functions of rich text editors
- Built-in plugins and toolsasd

- Highly customizablea



## Getting Started

```
npm install slatepad
```

Then, in your project:

```
import { useMemo } from 'react'
import { SlatePad } from 'slatepad'
// optional:custom code highlight theme. befor import it,remember run :npm i prism-themes
import 'prism-themes/themes/prism-one-light.css'


export const App = () => {
  const editor = useMemo(() => createSlatepad(), [])
  return (
    <div>
      <h1>SlatePad</h1>
      <main>
        <SlatePad editor={editor}/>
      </main>
    </div>
  )
}
```



## RoadMap

Table-Block

markdown Serializing
