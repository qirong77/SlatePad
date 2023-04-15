import ReactDOM from 'react-dom/client'
import { App } from './App'
// import  App  from '../package/index.js'
import './style/index.css'
const Layout = () => {
  return (
    <div>
      <h1 className="text-center text-4xl my-[20px]">SlatePad</h1>
      <App />
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Layout />
)
