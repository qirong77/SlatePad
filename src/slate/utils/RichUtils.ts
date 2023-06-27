import { Editor, Element, Node, NodeEntry, Element as SlateElement, Transforms } from 'slate'
import {
  CustomEditor,
  CustomElementType,
  HeadingElement,
  ImageElement,
  TableElement
} from '../../types/slate'
import { wrapLink } from '../plugins/withInlines'
import { getCurrentBlock, isHeadBlock } from './BlockUtils'

const toggleBlock = (editor: CustomEditor, format: CustomElementType) => {
  const isActive = isBlockActive(editor, format)
  const isLists = format === 'bulleted-list' || format === 'number-list'
  editor.withoutNormalizing(() => {
    // 当前是否在某个ul/ol里面,如果是,就把这个ul或者ol解构,不进行下一步
    const [, ulPath] = getCurrentBlock(editor, 'bulleted-list', 'number-list') || []
    if (ulPath && (format === 'bulleted-list' || format === 'number-list')) {
      // 如果在某个ul/ol里面,因为里面的list-item是有嵌套个段落的,所以要把里面的每个list都解构再把外层的ul/ol解构
      for (const [child, childPath] of Node.children(editor, ulPath)) {
        if (SlateElement.isElement(child) && child.type === 'list-item') {
          Transforms.unwrapNodes(editor, { at: childPath })
        }
      }
      Transforms.unwrapNodes(editor, {
        match: n =>
          SlateElement.isElement(n) && (n.type === 'bulleted-list' || n.type === 'number-list'),
        split: true,
        at: ulPath
      })
      return
    }
    // 解构代码块
    Transforms.unwrapNodes(editor, {
      match: node => Element.isElement(node) && node.type === 'code-block',
      split: true
    })

    const newType: CustomElementType = isActive
      ? 'paragraph'
      : isLists
      ? 'list-item'
      : format === 'code-block'
      ? 'code-line'
      : format
    Transforms.setNodes(editor, {
      type: newType,
      children: []
    })
    if (!isActive && isLists) {
      Transforms.wrapNodes(
        editor,
        {
          type: format,
          children: []
        },
        { match: node => Element.isElement(node) && node.type === 'list-item' }
      )
    }
    if (!isActive && format === 'code-block') {
      const block: SlateElement = {
        type: 'code-block',
        children: [],
        language: ''
      }
      Transforms.wrapNodes(editor, block)
    }
  })
}
export const insertImage = (editor: CustomEditor, url: string) => {
  const image: ImageElement = { type: 'image', url, children: [{ text: '' }] }
  Transforms.insertNodes(editor, image)
}
function isBlockActive(editor: CustomEditor, format: CustomElementType) {
  const { selection } = editor
  if (!selection) return false
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    })
  )
  return !!match
}
const insertTable = (editor: CustomEditor) => {
  const table: TableElement = {
    type: 'table',
    children: [
      {
        type: 'table-row',
        children: [
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: ''
                  }
                ]
              }
            ]
          },
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: ''
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'table-row',
        children: [
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: ''
                  }
                ]
              }
            ]
          },
          {
            type: 'table-cell',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: ''
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  Transforms.insertNodes(editor, table)
}
// 折叠所有节点,逻辑比较复杂,功能一般暂时放弃
const collapseHeads = (editor: CustomEditor) => {
  // 找到所有的Heade节点
  const headEntries = Array.from(
    Editor.nodes(editor, {
      at: [],
      mode: 'highest',
      match: node => Element.isElement(node) && isHeadBlock(node.type)
    })
  ) as NodeEntry<HeadingElement>[]
  headEntries.forEach(([, path]) => {
    Transforms.setNodes(
      editor,
      // 更新所有节点的isCollapseAll,每次传过去的都是新的对象,就到导致每次isCollapseAll判断都是true
      // 但是某些情况,比如粘贴的时候,依然还是false
      {
        // isCollapseAll: {}
      },
      {
        at: path
      }
    )
  })
}
export const RichUtils = {
  toggleBlock,
  insertImage,
  insertLink: wrapLink,
  insertTable
  // collapseHeads
}
