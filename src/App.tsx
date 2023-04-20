import debounce from 'debounce'
// import { SlatePad } from './slate/SlatePad'
import { SlatePad } from '../package/index.js'
export const App = () => {
  return (
    <div>
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <SlatePad />
    </div>
  )
}
