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
  const {
    renderElement,
    onShortCuts,
    onKeyDown,
    normalizeNode,
    deleteBackward,
  } = editor;
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
    // 检测li是否被ul或者ol包围
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
    // 校验ul和ol
    if (SlateElement.isElement(node) && (node.type === SlatePadElementEnum.BULLED_LIST || node.type === SlatePadElementEnum.NUMBER_LIST)) {
      for (const [child, childPath] of Node.children(editor, path)) {
        // 如果li或者ol里面是有文字
        if (!SlateElement.isElement(child) || editor.isInline(child)) {
          Transforms.wrapNodes(
            editor,
            {
              type: SlatePadElementEnum.LIST_ITEM,
              children: [],
            },
            {
              match: (n) =>
                !SlateElement.isElement(n),
              at: path,
              split: true,
            }
          );
          return;
        }
        // 如果ul或者ol里面的元素不是li,条件比较苛刻,比如
        /* 
        - 123
        - 光标在这删除,产生一个空行
        - 33
        */
      }
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
    // 处理在列表中按下enter的情况
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
        block.type === SlatePadElementEnum.PARAGRAPH &&
        parent.type === SlatePadElementEnum.LIST_ITEM
      ) {
        /* case: 1. 删除最后一个li 2.在ul平级新建一个普通段落 3. 更新选区
        <editor>
            <ul>
                li <p>1</p>
                li <p>2</p>
                li <p>光标</p>
            </ul>
        </editor>
        */

        /* case1补充: 可能出现以下情况,所以isLastLi需要做额外判断
        <editor>
            <li>
                 <ul></ul>
                 <p>光标</p>
            </li>
        </editor>
        */
        const isLastLi =
          !Editor.hasPath(editor, Path.next(parentPath)) &&
          parent.children.length === 1;
        if (!Node.string(parent) && isLastLi) {
          e.preventDefault();
          const ulNextPath = Path.next(Path.parent(parentPath));
          Transforms.insertNodes(
            editor,
            {
              type: SlatePadElementEnum.PARAGRAPH,
              children: [{ text: "" }],
            },
            { at: ulNextPath }
          );
          Transforms.select(editor, Editor.start(editor, ulNextPath));
          Transforms.removeNodes(editor, {
            match(node) {
              return SlateElement.isElement(node) && node.type === "list-item";
            },
            at: path,
          });
          return;
        }
        /* case2: 需要拆分上下的li,直接调用删除方法即可
        <editor>
            <ul>
                li <p>1</p>
                li <p>光标</p>
                li <p>2</p>
            </ul>
        </editor>
        */
        if (!Node.string(parent) && !isLastLi) {
          e.preventDefault();
          editor.deleteBackward("character");
          return;
        }
        /* case3: 
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
        const prePath = {
          anchor: selection.anchor,
          focus: Editor.start(editor, path),
        };
        const preText = Editor.string(editor, prePath);
        const remainPath = {
          anchor: selection.anchor,
          focus: Editor.end(editor, path),
        };
        const remainText = Editor.string(editor, remainPath);
        // parent.children.length === 1保证他不是一个段落[参考case1]
        if (remainText || preText && parent.children.length === 1) {
          e.preventDefault();
          Transforms.insertNodes(
            editor,
            {
              type: SlatePadElementEnum.LIST_ITEM,
              children: [{ text: remainText }],
            },
            { at: Path.next(parentPath) }
          );
          Transforms.select(
            editor,
            Editor.start(editor, Path.next(parentPath))
          );
          remainText &&
            editor.delete({
              at: remainPath,
            });
          return;
        }
      }
    }
    if (e.key === "Tab" && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      const [block] = getCurrentBlock(editor,SlatePadElementEnum.BULLED_LIST)  as NodeEntry<SlateElement>;
      const canWrap = block && block.children.length >1
      if(canWrap) {
        Transforms.setNodes(editor, { type: SlatePadElementEnum.BULLED_LIST}) ;
        return;
      }
    }
    if (e.key === "Tab" && !e.metaKey && e.shiftKey) {
      e.preventDefault();
      Transforms.unwrapNodes(editor,{
        match: (n) => {
          return SlateElement.isElement(n) && n.type === SlatePadElementEnum.LIST_ITEM
        },
        split:true
      })
      Transforms.unwrapNodes(editor,{
        match: (n) => {
          return SlateElement.isElement(n) && (n.type === SlatePadElementEnum.BULLED_LIST)
        },
        split:true
      })
    }
    onKeyDown(e);
  };
  editor.deleteBackward = (unit) => {
    const { selection } = editor;
    if (!selection) return;
    const [block, path] = getCurrentBlock(editor) as NodeEntry<SlateElement>;
    const start = Editor.start(editor, path);
    if (!Point.equals(selection.anchor, start)) {
      deleteBackward(unit);
      return;
    }
    const newProperties: Partial<SlatePadElement> = {
      type: SlatePadElementEnum.PARAGRAPH,
    };

    // 当前的光标在某个list-item里面,因为withNormaliz插件,list里面的元素会默认是个段落,
    const [parentBlock, parentPath] = Editor.parent(
      editor,
      path
    ) as NodeEntry<SlateElement>;
    const isListParagraph =
      parentBlock.type === SlatePadElementEnum.LIST_ITEM &&
      parentBlock.children.length === 1;
    if (block.type === SlatePadElementEnum.PARAGRAPH && isListParagraph) {
      Transforms.setNodes(editor, newProperties, { at: parentPath });
      Transforms.unwrapNodes(editor, {
        match: (n) =>
          SlateElement.isElement(n) &&
          (n.type === SlatePadElementEnum.BULLED_LIST ||
            n.type === SlatePadElementEnum.NUMBER_LIST),
        split: true,
        // 由于嵌套list的结构,所有的unwrap都必须指明路径,否则会将整个路径上的嵌套结构都结构铺平
        at: parentPath,
      });
      return;
    }
    deleteBackward(unit);
  };
  return editor;
};
