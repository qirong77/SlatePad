import { Transforms, Node, Editor, Path,Range} from 'slate'
import { CustomEditor, SlateElement } from '../../types/slate'
/* 
在 Slate.js 中，normalizeNode 方法用于规范化节点，它的执行时机有以下几种情况：

当节点首次被添加到 Slate.js 的文档树中时；
当节点内容发生变化时；
当节点的祖先节点发生变化时；
当用户执行了一些操作（如拖放）之后。
*/
export const withHeadings = (editor: CustomEditor) => {
  // normalize只有在节点变化的时候会执行
  const { normalizeNode,selection } = editor
  editor.normalizeNode = entry => {
    const [node, path] = entry as [SlateElement, Path]
    if (!selection || !Range.isCollapsed) return
    if (node.type === 'paragraph') {
      const text = Node.string(node)
      const match = /^(#+).*/.exec(text)
      if (match) {
        const level = match[1].length
        const type = `heading${level}`
        const start = Editor.start(editor, path)
        Transforms.delete(editor, {
          at: {
            path: start.path,
            offset: level - 1
          }
        })
        Transforms.setNodes(editor, { type })
      }
    }
    if (node.type?.includes('heading')) {
      const text = Node.string(node)
      const match = /^(#+).*/.exec(text)
      if (match) {
        const level = match[1].length
        const type = 'heading' + level
        Transforms.setNodes(editor, { type })
        return
      }
    }
    return normalizeNode([node, path])
  }

  return editor
}
