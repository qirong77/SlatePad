import React, { useEffect, useRef, useState } from "react";
import { Editor, Transforms, Element as SlateElement, Path } from "slate";
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic,
} from "slate-react";
import { Arrow } from "../../assets/svg/icon";
import { getNextBlock, isHeadBlock } from "../utils/BlockUtils";
import { SlatePadEditor, SlatePadElementEnum } from "../types";

export const withElementHeading = (editor: SlatePadEditor) => {
  const { renderElement,onShortCuts } = editor;
  editor.renderElement = (props) => {
    if (props.element.type.includes("heading")) {
      return <Heading props={props} />;
    }
    return renderElement(props);
  };
  editor.shoutCutsMap.set('#',SlatePadElementEnum.HEADING_ONE)
  editor.shoutCutsMap.set('##',SlatePadElementEnum.HEADING_TWO)
  editor.shoutCutsMap.set('###',SlatePadElementEnum.HEADING_THREE)
  editor.shoutCutsMap.set('####',SlatePadElementEnum.HEADING_FOUR)
  editor.shoutCutsMap.set('#####',SlatePadElementEnum.HEADING_FIVE)
  editor.onShortCuts = (type,beforeText) => {
    if(type.includes("heading")) {
      editor.withoutNormalizing(()=>{
        Transforms.setNodes<SlateElement>(editor, {type}, {
          match: (n) =>
            SlateElement.isElement(n) && Editor.isBlock(editor, n),
        });
      })
      return
    }
    onShortCuts(type,beforeText)
  }
  return editor
};

function Heading({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props;
  const selected = useSelected();
  const editor = useSlateStatic();
  const [collapse, setCollapse] = useState(false);
  // 当前的段落是否已经处于selected的状态
  const isEdit = useRef(false);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    collapseHead();
  };
  useEffect(() => {
    isEdit.current = selected;
  }, [selected]);

  return (
    <div
      {...attributes}
      className={"slatepad-heading font-bold relative my-[20px]"}
      suppressContentEditableWarning
      contentEditable={collapse ? false : true}
    >
      <Arrow
        contentEditable={false}
        onClick={handleClick}
        className={`absolute hover:bg-white left-[-30px] translate-y-[-50%] top-[50%] opacity-${
          collapse ? 100 : 0
        } hover:opacity-100 transition-all ${collapse ? "-rotate-90" : ""}`}
      />
      <Head type={element.type} />
      {collapse && (
        <div
          style={{
            boxShadow: "2px 0px 12px 0px rgb(4 4 4 / 3%)",
          }}
          className="wrapper cursor-pointer translate-x-[-5px] scale-y-125 absolute top-0 w-full h-full border-[1px] rounded"
        ></div>
      )}
    </div>
  );
  function Head({ type }: any) {
    switch (type) {
      case "heading5":
        return <h5 className="text-lg ">{children}</h5>;
      case "heading4":
        return <h4 className="text-xl">{children}</h4>;
      case "heading3":
        return <h3 className="text-2xl">{children}</h3>;
      case "heading2":
        return <h2 className="text-3xl">{children}</h2>;
      default: {
        return <h1 className="font-bold text-4xl my-[8px] ">{children}</h1>;
      }
    }
  }
  /* 
  折叠段落的逻辑:把和当前段落平级的块都加一个隐藏的类(隐藏小标题和非标题)
  打开段落的逻辑:把和当前段落平级的块都移除这个类(只打开前面非标题,)
  */
  function collapseHead() {
    const path = ReactEditor.findPath(editor, element);
    const doms: HTMLElement[] = [];
    let currentPath = path;
    while (true) {
      const nextBlock = getNextBlock(editor, currentPath);
      if (nextBlock && canCollapse(nextBlock.type)) {
        doms.push(ReactEditor.toDOMNode(editor, nextBlock));
        currentPath = Path.next(currentPath);
      } else break;
    }
    for (const dom of doms) {
      collapse
        ? dom.classList.remove("hidden-block")
        : dom.classList.add("hidden-block");
    }
    setCollapse(!collapse);
    function canCollapse(type: SlatePadElementEnum) {
      if (!isHeadBlock(type)) return true;
      const headLevel = Number(type.at(-1));
      const currentLevel = Number(element.type.at(-1));
      return currentLevel < headLevel;
    }
  }
}
