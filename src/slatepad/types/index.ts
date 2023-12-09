
import {
  Descendant,
  BaseEditor,
  BaseRange,
  Range,
} from "slate";
import { ReactEditor, RenderElementProps } from "slate-react";
import { HistoryEditor } from "slate-history";

export enum SlatePadElementEnum {
  PARAGRAPH = "paragraph",
  CHECK_LIST = "check-list",
  IMAGE = 'image',
  CODE_BLOCK ='code-block',
  CODE_LINE = 'code-line',
  LINK = 'link',
  TABLE = 'table',
  TABLE_ROW = 'table-row',
  TABLE_CELL = 'table-cell',
  BLOCK_QUOTA = 'block-quota',
  BULLED_LIST = 'bulleted-list',
  LIST_ITEM = 'list-item',
  NUMBER_LIST = 'number-list',
  FIX_SELECT ='fix-select',
  HEADING_ONE = 'heading1',
  HEADING_TWO = 'heading2',
  HEADING_THREE = 'heading3',
  HEADING_FOUR = 'heading4',
  HEADING_FIVE = 'heading5',
}

export interface SlatePadElement {
  type: SlatePadElementEnum;
  children: Descendant[];
}
export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  text: string;
};
export type EmptyText = {
  text: string;
};

interface CustomEditor {
  nodeToDecorations?: Map<string, Range[]>;
  onInsertImage?: (url: string) => string | Promise<string>;
  use: (Plugin: (editor: SlatePadEditor) => SlatePadEditor) => SlatePadEditor;
  renderElement: (props: RenderElementProps) => JSX.Element;
  onShortCuts:(type:SlatePadElementEnum,beforeText:string) => void
  shoutCutsMap:Map<string,SlatePadElementEnum>
}

export type SlatePadEditor = BaseEditor &
  ReactEditor &
  HistoryEditor &
  CustomEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: SlatePadEditor;
    Element: SlatePadElement;
    Text: CustomText | EmptyText;
    Range: BaseRange & {
      [key: string]: unknown;
    };
  }
}

