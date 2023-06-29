import { useMemo } from 'react'
import { SlatePad } from './slate/SlatePad'
import { createSlatepad } from './slate/plugins/editor'
import { initialValue } from './common/const'
import { GitHubIcon } from './assets/svg/icon'
import 'prism-themes/themes/prism-one-light.css'
export const App = () => {
  // const editor = useMemo(() => createSlatepad(), [])
  const editor = useMemo(() => createSlatepad(), [])
  return (
    <div>
      <GitHubIcon />
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <main className="w-[90vw] h-[80vh]">
        <SlatePad
          editor={editor}
          onChange={value => {
            // console.log(value)
          }}
          initialValue={initialValue}
        />
      </main>
    </div>
  )
}
