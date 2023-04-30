import { Editor, Element, NodeEntry, Node } from 'slate'
import { useSlate } from 'slate-react'
import { CodeBlockElement } from '../../types/slate'
import { normalizeTokens } from '../utils/normalize-tokens'
import Prism from 'prismjs'
// 需要引入相应的语法库!
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-bash'

// 用于更新decoration
export const SetNodeToDecorations = () => {
  const editor = useSlate()
  const blockEntries = Array.from(
    Editor.nodes(editor, {
      at: [],
      mode: 'highest',
      match: n => Element.isElement(n) && n.type === 'code-block'
    })
  ) as NodeEntry<CodeBlockElement>[]
  const nodeToDecorations = mergeMaps(
    ...blockEntries.map(getChildNodeToDecorations)
  )

  editor.nodeToDecorations = nodeToDecorations
  return <></>
}

function getChildNodeToDecorations([
  block,
  blockPath
]: NodeEntry<CodeBlockElement>) {
  const nodeToDecorations = new Map<Element, Range[]>()
  const text = block.children.map(line => Node.string(line)).join('\n')
  let tokens
  try {
    tokens = Prism.tokenize(text, Prism.languages[block.language || ''])
  } catch (error) {
    console.log('语法失败!')
    return nodeToDecorations
  }
  console.log(123)
  const normalizedTokens = normalizeTokens(tokens) // make tokens flat and grouped by line
  const blockChildren = block.children as Element[]
  for (let index = 0; index < normalizedTokens.length; index++) {
    const tokens = normalizedTokens[index]
    const element = blockChildren[index]
    if (!nodeToDecorations.has(element)) {
      nodeToDecorations.set(element, [])
    }

    let start = 0
    for (const token of tokens) {
      const length = token.content.length
      if (!length) {
        continue
      }

      const end = start + length

      const path = [...blockPath, index, 0]
      const range = {
        anchor: { path, offset: start },
        focus: { path, offset: end },
        token: true,
        ...Object.fromEntries(token.types.map(type => [type, true]))
      }

      nodeToDecorations.get(element)!.push(range as any)

      start = end
    }
  }
  return nodeToDecorations
}

// 将多个map合并成一个
function mergeMaps(...maps: Map<any, any>[]) {
  const map = new Map()
  for (const m of maps) {
    for (const item of m) {
      map.set(...item)
    }
  }
  return map
}
