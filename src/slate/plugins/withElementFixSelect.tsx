import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic,
} from "slate-react";
import { SlatePadEditor, SlatePadElementEnum } from "../types";
import { useEffect } from "react";
import { Transforms, Range, Editor, Path } from "slate";

export const withElementFixSelect = (editor: SlatePadEditor) => {
  const { renderElement } = editor;
  editor.renderElement = (props) => {
    if (props.element.type === SlatePadElementEnum.FIX_SELECT) {
      return <FixSelect props={props} />;
    }
    return renderElement(props);
  };
  return editor
};

function FixSelect({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const selected = useSelected();
  useEffect(() => {
    const selection = editor.selection;
    if (selection && Range.isCollapsed(selection)) {
      if (selected) {
        const path = ReactEditor.findPath(editor, element);
        Transforms.select(editor, Editor.start(editor, Path.next(path)));
      }
    }
  }, [selected]);
  return (
    <p className="fix-select overflow-hidden h-0" {...attributes}>
      {children}
    </p>
  );
}
