import { NodeEntry, Text } from 'slate'

export const useDecorate = (search: string) => {
  return function decorate(entry: NodeEntry) {
    const [node, path] = entry
    const ranges: any = []
    if (search && Text.isText(node)) {
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
    }
    return ranges
  }
}
