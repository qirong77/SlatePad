import { Editor, Element, NodeEntry, Node } from 'slate'
import { ReactEditor, useSlate } from 'slate-react'
import { CodeBlockElement } from '../../types/slate'
import { normalizeTokens } from '../lib/normalize-tokens'
import Prism from 'prismjs'
// 需要引入相应的语法库!
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-scss'
// 以下是还未支持格式化话的高亮组件
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-python'
const NOT_FORMATTERS = ['Shell', 'Python', 'Sql']
// 默认支持html,css解析,不用导入
export const LANGUAGES = [
  'JavaScript',
  'Jsx',
  'TypeScript',
  'Tsx',
  'Markdown',
  'Java',
  'Scss',
  'Html',
  ...NOT_FORMATTERS
]
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
  const nodeToDecorations = mergeMaps(...blockEntries.map(getChildNodeToDecorations))

  editor.nodeToDecorations = nodeToDecorations
  return <></>
  function getChildNodeToDecorations([block, blockPath]: NodeEntry<CodeBlockElement>) {
    const nodeToDecorations = new Map<string, Range[]>()

    const text = block.children.map(line => Node.string(line)).join('\n')
    let tokens
    try {
      tokens = Prism.tokenize(text, Prism.languages[block.language.toLowerCase() || ''])
    } catch (error) {
      return nodeToDecorations
    }
    const normalizedTokens = normalizeTokens(tokens) // make tokens flat and grouped by line
    const blockChildren = block.children as Element[]
    for (let index = 0; index < normalizedTokens.length; index++) {
      const tokens = normalizedTokens[index]
      const element = blockChildren[index]
      const key = ReactEditor.findKey(editor, element).id
      if (!nodeToDecorations.has(key)) {
        nodeToDecorations.set(key, [])
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

        nodeToDecorations.get(key)!.push(range as any)

        start = end
      }
    }
    return nodeToDecorations
  }
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
