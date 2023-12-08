import { Descendant, BaseEditor, BaseRange, Range, Element, NodeEntry } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type BlockQuoteElement = {
  type: 'block-quote'
  align?: string
  children: Descendant[]
}
export type CodeLineElement = {
  type: 'code-line'
  align?: string
  children: Descendant[]
}
export type BulletedListElement = {
  type: 'bulleted-list'
  align?: string
  children: Descendant[]
}
export type NumberListElement = {
  type: 'number-list'
  align?: string
  children: Descendant[]
}
export type CheckListItemElement = {
  type: 'check-list-item'
  checked: boolean
  children: Descendant[]
}

export type EditableVoidElement = {
  type: 'editable-void'
  children: EmptyText[]
}
export type DividerElement = {
  type: 'divider'
  children: EmptyText[]
}
export type HeadingElement = {
  type: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5'
  align?: string
  children: Descendant[]
}

export type HeadingTwoElement = {
  type: 'heading-two'
  align?: string
  children: Descendant[]
}

export type ImageElement = {
  type: 'image'
  url: string
  children: EmptyText[]
}

export type LinkElement = { type: 'link'; url: string; children: Descendant[] }

export type ButtonElement = { type: 'button'; children: Descendant[] }

export type ListItemElement = { type: 'list-item'; children: Descendant[] }

export type MentionElement = {
  type: 'mention'
  character: string
  children: CustomText[]
}

export type ParagraphElement = {
  type: 'paragraph'
  align?: string
  children: Descendant[]
}
export type FixSelectElement = {
  type: 'fix-select'
  align?: string
  children: Descendant[]
}
export type CodeBlockElement = {
  type: 'code-block'
  language: string
  children: Descendant[]
}
export type TableElement = {
  type: 'table'
  children: Descendant[]
}
export type TableRowElement = {
  type: 'table-row'
  children: Descendant[]
}
export type TableCellElement = {
  type: 'table-cell'
  children: Descendant[]
}
export type TableHeadElement = {
  type: 'table-head'
  children: Descendant[]
}
export type SlateElement =
  | BlockQuoteElement
  | BulletedListElement
  | CheckListItemElement
  | EditableVoidElement
  | HeadingElement
  | ImageElement
  | LinkElement
  | ButtonElement
  | ListItemElement
  | MentionElement
  | ParagraphElement
  | CodeBlockElement
  | CodeLineElement
  | NumberListElement
  | FixSelectElement
  | DividerElement
  | TableCellElement
  | TableElement
  | TableHeadElement
  | TableRowElement
export type CustomElementType = Pick<SlateElement, 'type'>['type']

export type CustomText = {
  bold?: boolean
  italic?: boolean
  code?: boolean
  text: string
}
export type EmptyText = {
  text: string
}
export interface RenderElementProps {
  children: any
  element: SlateElement
  attributes: {
    'data-slate-node': 'element'
    'data-slate-inline'?: true
    'data-slate-void'?: true
    dir?: 'rtl'
    ref: any
  }
}
export type SlatePadEditor = BaseEditor & ReactEditor & HistoryEditor & CustomEditor
interface CustomEditor {
  nodeToDecorations?: Map<string, Range[]>
  onInsertImage?: (url: string) => string | Promise<string>
  use:(Plugin:(editor:SlatePadEditor)=>SlatePadEditor)=> SlatePadEditor
}

declare module 'slate' {
  interface CustomTypes {
    Editor: SlatePadEditor
    Element: SlateElement
    Text: CustomText | EmptyText
    Range: BaseRange & {
      [key: string]: unknown
    }
  }
}
