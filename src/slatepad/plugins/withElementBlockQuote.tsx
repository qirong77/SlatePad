import { Transforms } from "slate";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";

export const withElementBlockQuote = (editor: SlatePadEditor) => {
  const { deleteBackward, onShortCuts, renderElement } = editor;
  editor.onShortCuts = (beforeText) => {
    if (/^\>/.test(beforeText)) {
      Transforms.setNodes<SlatePadElement>(editor, {
        type: SlatePadElementEnum.BLOCK_QUOTE,
      });
      editor.deleteBackward('line')
      return;
    }
    onShortCuts(beforeText);
  };
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    if (props.element.type === SlatePadElementEnum.CHECK_LIST) {
      return <blockquote {...attributes}>{children}</blockquote>;
    }
    return renderElement(props);
  };
};
