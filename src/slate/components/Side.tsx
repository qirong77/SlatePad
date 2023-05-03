import { useCallback, useEffect, useState } from 'react'
import { useSlate } from 'slate-react'
import debounce from 'debounce'
export const Side = () => {
  const editor = useSlate()
  const [hs, setHs] = useState<HTMLHeadElement[]>([])
  const getH = useCallback(
    debounce(() => {
      const hs = document
        .querySelector('.ediable')
        ?.querySelectorAll('h1,h2,h3,h4,h5')
      hs && setHs([...hs] as HTMLElement[])
    }, 1000),
    []
  )
  useEffect(() => {
    getH()
  })
  // 高度必须明确,才能正常滚动
  return (
    <ul>
      {hs.map((h, index) => {
        const level = Number(h.nodeName[1])
        return (
          <li
            onClick={e => h.scrollIntoView()}
            key={h.innerText + index}
            className="text-sm p-[5px] overflow-hidden whitespace-nowrap text-slate-500 hover:text-black hover:cursor-pointer"
            style={{
              paddingLeft: level * 5 + 10 + '' + 'px'
            }}>
            <span>{'#'.repeat(level) + h.innerText}</span>
          </li>
        )
      })}
    </ul>
  )
}
