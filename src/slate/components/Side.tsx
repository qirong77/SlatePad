import { useCallback, useEffect, useState } from 'react'
import { useSlate, useSlateStatic } from 'slate-react'
import debounce from 'debounce'

export const Side = () => {
  useSlate()
  function Headers() {
    const allHeaders = Array.from(
      document.querySelector('.ediable')?.querySelectorAll('h1,h2,h3,h4,h5') ||
        []
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
  const debounceRender = useCallback(debounce(Headers, 1000), [])
  return <div>{debounceRender()}</div>
}

export interface HeaderTree {
  tagName: string
  children: HeaderTree[]
  header: HTMLElement
}
interface ChildrenMap {
  [key: string]: HeaderTree
}

export const getHeaderTree = (headers: HTMLElement[]) => {
  let tree: HeaderTree | null
  let p: HeaderTree
  let childrenMap: ChildrenMap
  const trees: HeaderTree[] = []
  const initialize = (header: HTMLElement) => {
    const tagName = header.tagName
    tree = {
      tagName,
      children: [],
      header
    }
    childrenMap = {
      [tagName]: tree
    }
    p = tree
  }
  headers.forEach((header, index) => {
    // 如果没有树，初始化
    if (!tree) {
      initialize(header)
      return
    }
    // 遇到的标签大于当前这个树的最大标签就先把当前的这个树推进数组
    if (header.tagName <= tree.tagName) {
      trees.push(tree)
      initialize(header)
      if (index === headers.length - 1) {
        trees.push(tree)
      }
      return
    }
    const node = {
      tagName: header.tagName,
      children: [],
      header
    }
    if (header.tagName > p.tagName) {
      p.children.push(node)
      p = p.children.at(-1) as HeaderTree
    } else {
      const headerNumber = Number(header.tagName[1])
      for (let i = 1; i < headerNumber; i++) {
        const key = 'H' + (headerNumber - i)
        if (childrenMap[key]) {
          childrenMap[key].children.push(node)
          // 每次都是和这个标题最接近的建立联系
          p = childrenMap[key].children.at(-1) as HeaderTree
          break
        }
      }
    }
    // 每次遍历在这个树的map中存储一个映射
    childrenMap[header.tagName] = p
    if (index === headers.length - 1) trees.push(tree)
  })
  return trees
}

function ArrowIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      {...props}
      width={12}
      height={12}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
    </svg>
  )
}
