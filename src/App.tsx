import debounce from 'debounce'
import { SlatePad } from './slate/SlatePad'

export const App = () => {
  const saveData = debounce(newValue => {
    window.localStorage.setItem('lunwen', JSON.stringify(newValue))
  }, 500)
  return (
    <div>
      {/* <h1 className="text-center text-4xl my-[20px]">SlatePad</h1> */}
      <SlatePad onChange={saveData} />
    </div>
  )
}
