import {
  Editor,
  Element as SlateElement,
  Range,
  Point,
  Transforms,
} from "slate";
import {
  SlatePadEditor,
  SlatePadElement,
  SlatePadElementEnum,
} from "../types";
import { ReactEditor, RenderElementProps, useSlateStatic } from "slate-react";
import { useState } from "react";
interface CheckListElement extends SlatePadElement {
  checked: boolean;
}
export const withElementChecklist = (editor: SlatePadEditor) => {
  const { deleteBackward } = editor;
  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === SlatePadElementEnum.CHECK_LIST,
      });

      if (match) {
        const [, path] = match;
        const start = Editor.start(editor, path);

        if (Point.equals(selection.anchor, start)) {
          const newProperties: Partial<SlateElement> = {
            type: SlatePadElementEnum.PARAGRAPH,
          };
          Transforms.setNodes(editor, newProperties, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === SlatePadElementEnum.CHECK_LIST,
          });
          return;
        }
      }
    }

    deleteBackward(...args);
  };
  const { renderElement } = editor;
  editor.renderElement = (props) => {
    if (props.element.type === SlatePadElementEnum.CHECK_LIST) {
      return <CheckList props={props} />;
    }
    return renderElement(props);
  };
  
  return editor;
};

function CheckList({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const [checked, setChecked] = useState(element.checked || false);
  return (
    <div
      {...attributes}
      className="slatepad-checklist list-none relative pl-[20px]"
    >
      <span contentEditable={false} className="absolute left-[0px] top-[0px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            const path = ReactEditor.findPath(editor, element);
            const newProperties: Partial<CheckListElement> = {
              checked: event.target.checked,
            };
            Transforms.setNodes(editor, newProperties, { at: path });
            setChecked(event.target.checked);
          }}
        />
      </span>
      <span
        style={{
          opacity: checked ? "0.6" : "1",
          textDecoration: checked ? "line-through" : "none",
        }}
      >
        {children}
      </span>
    </div>
  );
}
