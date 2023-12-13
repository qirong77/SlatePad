import React, { useEffect, useRef, useState } from "react";
import {
  Editor,
  Transforms,
  Element as SlateElement,
  Element,
  Path,
  Node,
  NodeEntry,
} from "slate";
import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic,
} from "slate-react";
import { Arrow } from "../../assets/svg/icon";
import { BlockUtils, getCurrentBlock, getNextBlock } from "../utils/BlockUtils";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";

export const withElementHeading = (editor: SlatePadEditor) => {
  const { renderElement, onShortCuts, normalizeNode, deleteBackward, insertBreak } =
    editor;
  editor.renderElement = (props) => {
    if (props.element.type.includes("heading")) {
      return <Heading props={props} />;
    }
    return renderElement(props);
  };
  editor.onShortCuts = (beforeText) => {
    if (/^\#+/.test(beforeText)) {
      const type = SlatePadElementEnum.HEADING_ONE.replace(
        /\d/,
        beforeText.length.toString()
      ) as SlatePadElementEnum;
      // editor.delete({at:range})
      editor.withoutNormalizing(()=>{
        Transforms.setNodes<SlateElement>(
          editor,
          {
            type,
          },
        );
        editor.deleteBackward('line')
      })
      return;
    }
    onShortCuts(beforeText);
  };
  editor.insertBreak = () => {
    const [block, path] = getCurrentBlock(editor) as NodeEntry<SlatePadElement>;
    if (block.type.includes("heading")) {
      Transforms.insertNodes(editor, {
        type: SlatePadElementEnum.PARAGRAPH,
        children: [{ text: "" }],
      });
      Transforms.select(editor, Path.next(path));
      return;
    }
    insertBreak();
  };
  editor.deleteBackward = (unit) => {
    const isHead = BlockUtils.isInElement(
      editor,
      SlatePadElementEnum.HEADING_ONE
    );
    if (isHead) {
      const [block, path] = getCurrentBlock(
        editor,
        SlatePadElementEnum.HEADING_ONE,
        SlatePadElementEnum.HEADING_TWO,
        SlatePadElementEnum.HEADING_THREE,
        SlatePadElementEnum.HEADING_FOUR,
        SlatePadElementEnum.HEADING_FIVE
      );
      if (!Node.string(block)) {
        Transforms.setNodes(editor, { type: SlatePadElementEnum.PARAGRAPH },{at:path});
        return;
      }
    }
    deleteBackward(unit);
  };
  editor.normalizeNode = ([node, path]) => {
    if (
      Element.isElement(node) &&
      node.type.includes('heading')
    ) {
      for (const [child, childPath] of Node.children(editor, path)) {
        // 如果li或者ol里面是有文字
        if (!Element.isElement(child) || editor.isInline(child)) {
          Transforms.wrapNodes(
            editor,
            {
              type: SlatePadElementEnum.PARAGRAPH,
              children: [],
            },
            {
              match: (n) => !Element.isElement(n),
              at: path,
              split: true,
            }
          );
          return;
        }
      }
    }
    normalizeNode([node, path]);
  };
  editor.deleteForward = () => {
    console.log(111);
  };
  return editor;
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
      if (!type.includes("heading")) return true;
      const headLevel = Number(type.at(-1));
      const currentLevel = Number(element.type.at(-1));
      return currentLevel < headLevel;
    }
  }
}
