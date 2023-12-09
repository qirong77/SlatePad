import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import {
  Editor,
  Transforms,
  Element as SlateElement,
  Path,
  Range,
  NodeEntry,
  Node,
  Point,
} from "slate";
import { getCurrentBlock, wrapTextNode } from "../utils/BlockUtils";

export const withElementList = (editor: SlatePadEditor) => {
  const { renderElement, onShortCuts, onKeyDown, normalizeNode } = editor;
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    if (props.element.type === SlatePadElementEnum.LIST_ITEM) {
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
  editor.shoutCutsMap.set("-", SlatePadElementEnum.LIST_ITEM);
  editor.normalizeNode = ([node, path]) => {
    if (
      SlateElement.isElement(node) &&
      node.type === SlatePadElementEnum.LIST_ITEM
    ) {
      const [parentBlock, parentPath] = Editor.parent(
        editor,
        path
      ) as NodeEntry<SlatePadElement>;
      // 从飞书对话框粘贴列表,发现里面的list没有用ul或者ol包围
      if (
        parentBlock.type !== SlatePadElementEnum.BULLED_LIST &&
        parentBlock.type !== SlatePadElementEnum.NUMBER_LIST
      ) {
        Transforms.wrapNodes(
          editor,
          {
            type: SlatePadElementEnum.BULLED_LIST,
            children: [],
          },
          {
            match: (n) =>
              SlateElement.isElement(n) &&
              n.type === SlatePadElementEnum.LIST_ITEM,
            at: parentPath,
            split: true,
          }
        );
        return;
      }
      const isOperation = wrapTextNode(editor, path);
      if (isOperation) return;
    }
    normalizeNode([node, path]);
  };
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
  editor.onKeyDown = (e) => {
    if (e.key === "Enter" && !e.metaKey && !e.shiftKey) {
      const { selection } = editor;
      if (!selection) return;
      if (e.nativeEvent.isComposing || !Range.isCollapsed(selection)) return;
      const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>;
      const [parent, parentPath] = Editor.parent(
        editor,
        path
      ) as NodeEntry<SlateElement>;
      if (
        block.type !== SlatePadElementEnum.PARAGRAPH ||
        parent.type !== SlatePadElementEnum.LIST_ITEM
      )
        return;
      e.preventDefault();
      /* case: 1. 删除最后一个li 2.在ul平级新建一个普通段落 3. 更新选区
      <editor>
          <ul>
              li <p>1</p>
              li <p>2</p>
              li <p>光标</p>
          </ul>
      </editor>
      */
      if (!Node.string(parent)) {
        const ulNextPath = Path.next(Path.parent(parentPath));
        Transforms.insertNodes(
          editor,
          {
            type: SlatePadElementEnum.PARAGRAPH,
            children: [{ text: "1" }],
          },
          { at: ulNextPath }
        );
        Transforms.select(editor, Editor.end(editor, ulNextPath));
        Transforms.removeNodes(editor, {
          match(node) {
            return SlateElement.isElement(node) && node.type === "list-item";
          },
          at: path,
        });
        return;
      }
      /* case2: 
      <editor>
          <li>
              <ul>
                  li <p>1</p>
                  li <p>2</p>
                  li <p>123光标4</p> 或者<p>123光标</p> 
              </ul>
          </li>
      </editor>
      */
       
    }
    onKeyDown(e);
  };
  return editor;
};

function isListParagraph(editor: SlatePadEditor, paragraphPath: Path) {
  const [list] = Editor.parent(
    editor,
    paragraphPath
  ) as NodeEntry<SlateElement>;
  const isListParagraph =
    list.type === "list-item" && list.children.length === 1;
  return isListParagraph;
}
