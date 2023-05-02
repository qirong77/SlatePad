import { Editor, NodeEntry, Element as SlateElement, Transforms } from 'slate'
import {
  CustomEditor,
  CustomElementType,
  ImageElement
} from '../../types/slate'
import { wrapLink } from '../plugins/withInlines'
import { getCurrentBlock } from './BlockUtils'

const toggleBlock = (editor: CustomEditor, format: CustomElementType) => {
  const isActive = isBlockActive(editor, format)
  const isLists = format === 'bulleted-list' || format === 'number-list'
  const [, ulPath] = getCurrentBlock(
    editor,
    'bulleted-list',
    'number-list'
  ) as NodeEntry<SlateElement>
  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      (n.type === 'bulleted-list' || n.type === 'number-list'),
    split: true,
    at: ulPath
  })
  const newType: CustomElementType = isActive
    ? 'paragraph'
    : isLists
    ? 'list-item'
    : format === 'code-block'
    ? 'code-line'
    : format
  Transforms.setNodes(editor, {
    type: newType
  })
  if (!isActive && isLists) {
    const block: SlateElement = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
  if (!isActive && format === 'code-block') {
    const block: SlateElement = {
      type: 'code-block',
      children: [],
      language: ''
    }
    Transforms.wrapNodes(editor, block, {
      split: true
    })
  }
}
const insertImage = (
  editor: CustomEditor,
  url = 'https://source.unsplash.com/kFrdX5IeQzI'
) => {
  const image: ImageElement = { type: 'image', url, children: [{ text: '' }] }
  Transforms.insertNodes(editor, image)
}
function isBlockActive(editor: CustomEditor, format: CustomElementType) {
  const { selection } = editor
  if (!selection) return false
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    })
  )
  return !!match
}
export const RichUtils = {
  toggleBlock,
  insertImage,
  insertLink: wrapLink
}
