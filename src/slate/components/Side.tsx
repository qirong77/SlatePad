import React, { useCallback, useState } from 'react'
import { useSlate } from 'slate-react'
import debounce from 'debounce'
import { HeaderTree, getHeaderTree } from '../lib/getHeaders'
import { ArrowIcon } from '../../assets/svg/icon'
export const Side = ({ showHeaders }: any) => {
  const [width, setSideWidth] = useState(250)
  const [lazyUpdate, setLazyUpdate] = useState({})
  function handleMouseDown(e1: React.MouseEvent) {
    const startPosition = e1.clientX
    document.onmousemove = e => {
      const moveDistance = e.clientX - startPosition
      setSideWidth(width + moveDistance)
      return false
    }
    // 释放鼠标的时候解除事件绑定
    document.onmouseup = _e => {
      document.onmousemove = null
      document.onmouseup = null
      return false
    }
  }
  return (
    <>
      <div
        className="slatepad-side relative overflow-scroll transition-all border-gray-200 "
        style={{
          width: showHeaders ? `${width}px` : '0px',
          borderRightWidth: showHeaders ? '2px' : '0px'
        }}>
        <SideHeaders setLazyUpdate={() => setLazyUpdate({})} />
        {Headers()}
      </div>
      {/* drag-line */}
      <div
        className="drag absolute left-0 w-[4px] h-[-webkit-fill-available] cursor-col-resize "
        onMouseDown={handleMouseDown}
        style={{
          left: (showHeaders ? width - 4 : 0) + 'px'
        }}></div>
    </>
  )
}
let timer: any
// 监听变化,延迟更新
const SideHeaders = ({ setLazyUpdate }: { setLazyUpdate: Function }) => {
  useSlate()
  if (timer) {
    clearTimeout(timer)
    timer = null
  } else {
    timer = setTimeout(() => {
      setLazyUpdate()
    }, 300)
  }
  return <></>
}
function Headers() {
  const allHeaders = Array.from(
    document.querySelector('.ediable')?.querySelectorAll('h1,h2,h3,h4,h5') || []
  ) as HTMLElement[]
  function mapHeaderTree(hs: HeaderTree[]) {
    return hs.map((h, index) => {
      const level = Number(h.header.nodeName[1])
      return (
        <ul
          key={h.header.textContent + index.toString()}
          className="overflow-hidden"
          onClick={e => {
            e.stopPropagation()
            if (!h.children.length) h.header.scrollIntoView()
            else {
              const isSvg = /svg|path/.test((e.target as HTMLElement).nodeName)
              if (isSvg) {
                e.currentTarget.classList.toggle('side-hidden')
              } else h.header.scrollIntoView()
            }
          }}>
          <li
            className="text-sm flex items-center p-[5px] overflow-hidden whitespace-nowrap text-slate-500 hover:text-black hover:cursor-pointer"
            style={{
              paddingLeft: level * 10 + '' + 'px'
            }}>
            <span className="mr-[4px] hover:bg-slate-100 rounded">
              {h.children.length ? <ArrowIcon className="" /> : <></>}
            </span>
            <span> {h.header.textContent}</span>
          </li>
          {mapHeaderTree(h.children)}
        </ul>
      )
    })
  }
  const reactNodes = mapHeaderTree(getHeaderTree(allHeaders))
  return reactNodes
}
