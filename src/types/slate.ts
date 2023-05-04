import { Descendant, BaseEditor, BaseRange, Range, Element } from 'slate'
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

export type HeadingElement = {
  type: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5'
  align?: string
  children: Descendant[]
  isCollapseAll?: any
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
export type CustomEditor = BaseEditor &
  ReactEditor &
  HistoryEditor & {
    nodeToDecorations?: Map<Element, Range[]>
  }

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: SlateElement
    Text: CustomText | EmptyText
    Range: BaseRange & {
      [key: string]: unknown
    }
  }
}
