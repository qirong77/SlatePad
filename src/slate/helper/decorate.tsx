import { Element, Node, NodeEntry, Path, Range, Text } from 'slate'
import Prism from 'prismjs'
// 需要引入相应的语法库!
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-jsx'

import { CodeBlockElement, CustomEditor } from '../../types/slate'
import { normalizeTokens } from '../utils/normalize-tokens'

export const useDecorate = (editor:CustomEditor,search: string) => {
  return function decorate(entry: NodeEntry) {
    const [node, path] = entry as [Node, Path]
    if (Element.isElement(node) && node.type === 'code-line') {
      const ranges = editor.nodeToDecorations?.get(node) || []
      return ranges
    }
    return [priviewLeaf(node, path), highlightLeaf(node, path, search)].flat(1)
  }

  function priviewLeaf(node: Node, path: Path): Range[] {
    const ranges: Range[] = []
    if (!Text.isText(node)) return ranges
    const getLength = (token: any) => {
      if (typeof token === 'string') {
        return token.length
      } else if (typeof token.content === 'string') {
        return token.content.length
      } else {
        return token.content.reduce((l: any, t: any) => l + getLength(t), 0)
      }
    }

    const tokens = Prism.tokenize(node.text, Prism.languages.markdown)
    let start = 0
    for (const token of tokens) {
      const length = getLength(token)
      const end = start + length

      if (typeof token !== 'string') {
        ranges.push({
          [token.type]: true,
          anchor: { path, offset: start },
          focus: { path, offset: end }
        })
      }
      start = end
    }
    return ranges
  }

  function highlightLeaf(node: Node, path: Path, search: string): Range[] {
    const ranges: Range[] = []
    if (!Text.isText(node) || !search) return ranges
    const { text } = node
    const ignoreCase = new RegExp(search, 'i')
    const parts = text.split(ignoreCase)
    let offset = 0
    parts.forEach((part, i) => {
      if (i !== 0) {
        ranges.push({
          anchor: { path, offset: offset - search.length },
          focus: { path, offset },
          highlight: true
        })
      }
      offset = offset + part.length + search.length
    })
    return ranges
  }
  function highlightCode(block: CodeBlockElement, blockPath: Path) {}
}
