import { useCallback, useEffect, useState } from 'react'
import { useSlate } from 'slate-react'
import debounce from 'debounce'
export const Side = ({ outline }) => {
  const editor = useSlate()
  const [hs, setHs] = useState<HTMLHeadElement[]>([])
  const getH = useCallback(
    debounce(() => {
      const hs = document.querySelector('.ediable')?.querySelectorAll('h1')
      hs && setHs([...hs])
    }, 1500),
    []
  )
  useEffect(() => {
    getH()
  })
  return (
    <div
      className="h-[70vh] overflow-scroll border-gray-200 border-r-[2px] transition-all"
      style={{
        width: outline ? '160px' : '0px'
      }}>
      <ul>
        {hs.map((h, index) => {
          const level = Number(h.nodeName[1])
          return (
            <li
              onClick={e => h.scrollIntoView()}
              key={h.innerText + index}
              className="text-sm p-[5px] text-slate-500 hover:text-black hover:cursor-pointer"
              style={{
                paddingLeft: level * 5 + 10 + '' + 'px'
              }}>
              <span>{'#'.repeat(level) + h.innerText}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
