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
