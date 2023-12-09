import { SlatePadEditor, SlatePadElementEnum } from "../types";
import { Editor, Transforms, Element as SlateElement, Path } from "slate";

export const withElementList = (editor: SlatePadEditor) => {
  const { renderElement, onShortCuts } = editor;
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    if (props.element.type === SlatePadElementEnum.LIST_ITEM) {
      console.log(props.element.type === SlatePadElementEnum.LIST_ITEM);
      return (
        <li className="pl-[4px]" {...attributes}>
          {children}
        </li>
      );
    }
    if (props.element.type === SlatePadElementEnum.NUMBER_LIST) {
      return (
        <ol {...attributes} className="slatepad-number-list pl-[20px] my-[8px]">
          {children}
        </ol>
      );
    }
    if (props.element.type === SlatePadElementEnum.BULLED_LIST) {
      return (
        <ul
          className="slatepad-bulleted-list pl-[20px] my-[8px]"
          {...attributes}
        >
          {children}
        </ul>
      );
    }
    return renderElement(props);
  };
  editor.shoutCutsMap.set('-',SlatePadElementEnum.LIST_ITEM)
  editor.onShortCuts = (type, beforeText) => {
    if (type === SlatePadElementEnum.LIST_ITEM) {
      editor.withoutNormalizing(() => {
        Transforms.setNodes<SlateElement>(
          editor,
          { type },
          {
            match: (n) =>
              SlateElement.isElement(n) && Editor.isBlock(editor, n),
          }
        );
        Transforms.wrapNodes(
          editor,
          {
            type: /\d\./.test(beforeText)
              ? SlatePadElementEnum.NUMBER_LIST
              : SlatePadElementEnum.BULLED_LIST,
            children: [],
          },
          {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === SlatePadElementEnum.LIST_ITEM,
          }
        );
      });
      return;
    }
    onShortCuts(type, beforeText);
  };
  return editor;
};
