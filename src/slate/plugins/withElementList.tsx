
import { SlatePadEditor, SlatePadElementEnum } from "../types";

export const withElementList = (editor: SlatePadEditor) => {
  const { renderElement } = editor;
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    if (props.element.type === SlatePadElementEnum.LIST_ITEM) {
      console.log(props.element.type === SlatePadElementEnum.LIST_ITEM)
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
  return editor;
};
