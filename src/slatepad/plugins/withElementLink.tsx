import isUrl from "is-url";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import React from "react";
import { Editor, Transforms, Element as SlateElement, Range } from "slate";
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic,
} from "slate-react";

export const withElementLink = (editor: SlatePadEditor) => {
  const { insertData, isInline, insertText, renderElement } = editor;
  //   重写isInline方法，默认情况下这个方法都是返回false
  // 前面那部分表示如果匹配到了行内快，后面表示使用原来的方法，也就一直是返回false
  editor.isInline = (element) => {
    return element.type === SlatePadElementEnum.LINK || isInline(element);
  };
  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };
  editor.insertData = (data) => {
    const text = data.getData("text/plain");

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };
  editor.renderElement = (props) => {
    if (props.element.type === SlatePadElementEnum.LINK) {
      return <Link props={props} />;
    }
    return renderElement(props);
  };
  return editor;
};

export function Link({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const selected = useSelected();
  const resetUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const path = ReactEditor.findPath(editor, element);
    Transforms.setNodes(editor, { url: e.target.value }, { at: path });
  };
  return (
    <a
      onDoubleClick={(e) => {
        e.preventDefault();
        window.open(element.url, "_blank");
      }}
      target="_blank"
      {...attributes}
      className={`slatepad-link rounded text-blue-500  px-[2px] relative border-blue-500 cursor-pointer`}
      style={{
        borderWidth: selected ? "1.6px" : "0px",
      }}
      href={element.url}
    >
      {children}
      <span
        contentEditable={false}
        className={`flex absolute text-xs  p-[2px] top-[25px] transition-opacity opacity-0 left-0 ${
          selected ? "opacity-100" : ""
        }`}
        style={{
          boxShadow: "rgb(4 4 4 / 10%) 0px 0px 5px 1px",
          zIndex: selected ? 1 : -1,
        }}
      >
        <input
          onChange={resetUrl}
          className="rounded  outline-none "
          value={element.url}
        />
      </span>
    </a>
  );
}

export function wrapLink(editor: SlatePadEditor, url = "www.baidu.com") {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      n.type === SlatePadElementEnum.LINK,
  });
  // 当前的选区含有link,解除link样式
  if (link) {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === SlatePadElementEnum.LINK,
    });
    return;
  }
  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const linkElement: SlatePadElement = {
    type: SlatePadElementEnum.LINK,
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };
  if (isCollapsed) {
    Transforms.insertNodes(editor, linkElement);
  } else {
    Transforms.wrapNodes(editor, linkElement, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
}
