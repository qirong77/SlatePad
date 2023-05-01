# SlatePad

slatepad is a WYSIWYG editor which built with [Slate.js](https://github.com/ianstormtaylor/slate).It provides a robust editing experience with advanced formatting options, including nested blocks, nested inlines, custom styles, and custom components. SlatePad also includes several built-in plugins and tools.

## PlayGround

[SlatePad](https://qirong77.github.io/SlatePad/)

## Features

- Rich text editing with advanced formatting options
- integrates common functions of rich text editors
- Built-in plugins and tools
- Highly customizable

## Getting Started

```sh
npm install slatepad
```

Then, in your project:

```js
import { useMemo } from 'react'
import {  SlatePad } from './slate/SlatePad'
import { createSlatepad } from './slate/plugins/editor'
import 'prism-themes/themes/prism-one-light.css'

export const App = () => {
  const editor = useMemo(() => createSlatepad(), [])
  return (
    <div>
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <main className="w-[80vw] h-[80vh]">
        <SlatePad editor={editor} />
      </main>
    </div>
  )
}
```
