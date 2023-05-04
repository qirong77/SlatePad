import { useCallback } from 'react'
import { useSlate } from 'slate-react'
import debounce from 'debounce'
import { HeaderTree, getHeaderTree } from '../lib/getHeaders'
import { ArrowIcon } from '../../assets/svg/icon'

export const Side = () => {
  useSlate()
  const debounceRender = useCallback(debounce(Headers, 1000), [])
  return <div>{debounceRender()}</div>
}

function Headers() {
  const allHeaders = Array.from(
    document.querySelector('.ediable')?.querySelectorAll('h1,h2,h3,h4,h5') || []
  ) as HTMLElement[]
  function mapHeaderTree(hs: HeaderTree[]) {
    return hs.map(h => {
      const level = Number(h.header.nodeName[1])
      return (
        <ul key={h.header.textContent} className="overflow-hidden">
          <li
            onClick={() => {
              h.header.scrollIntoView()
            }}
            className="text-sm flex items-center p-[5px] overflow-hidden whitespace-nowrap text-slate-500 hover:text-black hover:cursor-pointer"
            style={{
              paddingLeft: level * 10 + '' + 'px'
            }}>
            <span className="mr-[4px] ">
              {h.children.length ? <ArrowIcon /> : <></>}
            </span>
            <span> {h.header.textContent}</span>
          </li>
          {mapHeaderTree(h.children)}
        </ul>
      )
    })
  }
  return mapHeaderTree(getHeaderTree(allHeaders))
}
