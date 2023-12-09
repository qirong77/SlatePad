import { Editor, Transforms, Node, NodeEntry } from "slate";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import { getCurrentBlock, isCodeBlock } from "../utils/BlockUtils";

export const withKeyDown = (editor: SlatePadEditor) => {
  editor.onKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      const [block] = getCurrentBlock(editor) || [];
      if (block && !isCodeBlock(block.type)) {
        e.preventDefault();
        Editor.insertText(editor, "\n");
      }
      return
    }
    if (e.code === "KeyA" && e.metaKey) {
      e.preventDefault();
      const match = getCurrentBlock(
        editor,
        "bulleted-list",
        "code-block",
        "number-list",
        "table-cell"
      );
      if (match) {
        const [, path] = match;
        Transforms.select(editor, path);
      } else {
        Transforms.select(editor, []);
      }
    }
    if (e.metaKey && e.code === "KeyF") {
      e.preventDefault();
      const ipt = document.querySelector(
        ".slatepad-search"
      ) as HTMLInputElement;
      ipt?.focus();
    }
  };
  return editor;
};
