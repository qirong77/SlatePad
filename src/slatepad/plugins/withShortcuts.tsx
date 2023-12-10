import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import { Editor, NodeEntry, Range, Transforms } from "slate";
import { getCurrentBlock } from "../utils/BlockUtils";
export const withShortCuts = (editor: SlatePadEditor) => {
  editor.onShortCuts = () => {}
  editor.shoutCutsMap = new Map()
  const { insertText } = editor;
  editor.insertText = (text) => {
    const { selection } = editor;
    if (text.endsWith(" ") && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const [block, path] = getCurrentBlock(
        editor
      ) as NodeEntry<SlatePadElement>;
      // 快捷转换不对非段落元素生效
      if (block.type !== SlatePadElementEnum.PARAGRAPH) {
        insertText(text);
        return;
      }
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range) + text.slice(0, -1);
      Transforms.select(editor, range);
      if (!Range.isCollapsed(range)) {
        Transforms.delete(editor);
      }
      beforeText.endsWith(' ') && editor.onShortCuts(beforeText)
    }
    insertText(text)
  };
  return editor
};
