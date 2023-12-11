import {
  Editor,
  Element,
  Node,
  Element as SlateElement,
  Transforms,
} from "slate";
import { SlatePadEditor,  SlatePadElementEnum } from "../types";
import { getCurrentBlock } from "./BlockUtils";
import { wrapLink } from "../plugins/withElementLink";
import { insertImage } from "../plugins/withElementImages";

const toggleBlock = (editor: SlatePadEditor, format: SlatePadElementEnum) => {
  const isActive = isBlockActive(editor, format);
  const isLists =
    format === SlatePadElementEnum.BULLED_LIST ||
    format === SlatePadElementEnum.NUMBER_LIST;
  editor.withoutNormalizing(() => {
    // 当前是否在某个ul/ol里面,如果是,就把这个ul或者ol解构,不进行下一步
    const [, ulPath] =
      getCurrentBlock(
        editor,
        SlatePadElementEnum.NUMBER_LIST,
        SlatePadElementEnum.BULLED_LIST
      ) || [];
    if (
      ulPath &&
      (format === SlatePadElementEnum.BULLED_LIST ||
        format === SlatePadElementEnum.NUMBER_LIST)
    ) {
      // 如果在某个ul/ol里面,因为里面的list-item是有嵌套个段落的,所以要把里面的每个list都解构再把外层的ul/ol解构
      for (const [child, childPath] of Node.children(editor, ulPath)) {
        if (
          SlateElement.isElement(child) &&
          child.type === SlatePadElementEnum.LIST_ITEM
        ) {
          Transforms.unwrapNodes(editor, { at: childPath });
        }
      }
      Transforms.unwrapNodes(editor, {
        match: (n) =>
          SlateElement.isElement(n) &&
          (n.type === SlatePadElementEnum.BULLED_LIST ||
            n.type === SlatePadElementEnum.NUMBER_LIST),
        split: true,
        at: ulPath,
      });
      return;
    }
    // 解构代码块
    Transforms.unwrapNodes(editor, {
      match: (node) =>
        Element.isElement(node) && node.type === SlatePadElementEnum.CODE_BLOCK,
      split: true,
    });

    const newType: any = isActive
      ? SlatePadElementEnum.PARAGRAPH
      : isLists
      ? SlatePadElementEnum.LIST_ITEM
      : format === SlatePadElementEnum.CODE_BLOCK
      ? SlatePadElementEnum.CODE_LINE
      : format;
    Transforms.setNodes(editor, {
      type: newType,
      children: [],
    });
    if (!isActive && isLists) {
      Transforms.wrapNodes(
        editor,
        {
          type: format,
          children: [],
        },
        {
          match: (node) =>
            Element.isElement(node) &&
            node.type === SlatePadElementEnum.LIST_ITEM,
        }
      );
    }
    if (!isActive && format === SlatePadElementEnum.CODE_BLOCK) {
      const block: SlateElement = {
        type: SlatePadElementEnum.CODE_BLOCK,
        children: [],
        language: "",
      };
      Transforms.wrapNodes(editor, block);
    }
  });
};

const insertTable = (editor: SlatePadEditor) => {
  const table: any = {
    type: "table",
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  Transforms.insertNodes(editor, table);
};
export const RichUtils = {
  toggleBlock,
  insertImage,
  insertLink: wrapLink,
  insertTable,
};
function isBlockActive(editor: SlatePadEditor, format: SlatePadElementEnum) {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
  );
  return !!match;
}
