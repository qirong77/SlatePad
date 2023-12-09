import { Element, Node, NodeEntry, Path, Range, Text } from 'slate'

import { SlatePadEditor } from '../types'
import { ReactEditor } from 'slate-react'
export const useDecorate = (editor: SlatePadEditor, search: string) => {
  return function decorate(entry: NodeEntry) {
    const [node, path] = entry as [Node, Path]
    if (Element.isElement(node) && node.type === 'code-line') {
      const key = ReactEditor.findKey(editor, node).id
      const ranges = editor.nodeToDecorations?.get(key) || []
      return ranges
    }
    // 过滤掉code元素还是会对里面的文本节点进行操作,可能是广度遍历?
    return [highlightLeaf(node, path, search)].flat(1)
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
}
