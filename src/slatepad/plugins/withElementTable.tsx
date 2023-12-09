import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic,
} from "slate-react";
import { DeleteIcon, GridIcon } from "../../assets/svg/icon";
import { useEffect, useRef, useState } from "react";
import {
  Transforms,
  Range,
  Editor,
  Element,
  Point,
  NodeEntry,
  Node,
  Path,
} from "slate";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import { getCurrentBlock, wrapTextNode } from "../utils/BlockUtils";
import { getNextPath, getPrePath } from "../utils/PathUtils";

export const withElementTable = (editor: SlatePadEditor) => {
  const { renderElement, deleteBackward, onKeyDown, normalizeNode } = editor;
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    if (props.element.type === SlatePadElementEnum.TABLE) {
      return <Table props={props} />;
    }
    if (props.element.type === SlatePadElementEnum.TABLE_ROW) {
      return (
        <tr {...attributes} className="h-[30px]">
          {children}
        </tr>
      );
    }
    if (props.element.type === SlatePadElementEnum.TABLE_CELL) {
      return (
        <td {...attributes} className="h-[30px] border-gray-300 border-[1.8px]">
          {children}
        </td>
      );
    }
    return renderElement(props);
  };
  editor.deleteBackward = (unit) => {
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (n) =>
          Element.isElement(n) && n.type === SlatePadElementEnum.TABLE_CELL,
      });
      if (cell) {
        const [cellNode, cellPath] = cell as NodeEntry<SlatePadElement>;
        const start = Editor.start(editor, cellPath);
        if (
          Point.equals(selection.anchor, start) &&
          (cellNode.children[0] as any)?.type === SlatePadElementEnum.PARAGRAPH
        ) {
          return;
        }
      }
    }
    deleteBackward(unit);
  };
  editor.onKeyDown = (e) => {
    if (e.code === "ArrowUp") {
      // 处理表格选择
      const isHandle = handleTable(editor, "ArrowUp");
      if (isHandle) {
        e.preventDefault();
        return;
      }
    }
    if (e.code === "ArrowDown") {
      // 处理表格选择
      const isHandle = handleTable(editor, "ArrowDown");
      if (isHandle) {
        e.preventDefault();
        return;
      }
    }
    onKeyDown(e);
  };
  editor.normalizeNode = ([node, path]) => {
    if (
      Element.isElement(node) &&
      node.type === SlatePadElementEnum.TABLE_ROW
    ) {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (
          !(
            Element.isElement(child) &&
            child.type === SlatePadElementEnum.TABLE_CELL
          )
        ) {
          Transforms.wrapNodes(
            editor,
            { type: SlatePadElementEnum.TABLE_CELL, children: [] },
            {
              at: childPath,
            }
          );
          return;
        }
      }
    }
    if (Element.isElement(node) && node.type === "table-cell") {
      const isOperation = wrapTextNode(editor, path);
      if (isOperation) return;
    }
    normalizeNode([node,path])
  };
  return editor;
};

function Table({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props;
  const [show, setShow] = useState(false);
  const ipt1 = useRef<HTMLInputElement>(null);
  const ipt2 = useRef<HTMLInputElement>(null);
  const [row, setRow] = useState<any>(element.children.length);
  const [colmn, setColum] = useState<any>(
    (element.children[0] as any).children.length
  );
  const editor = useSlateStatic();
  const selected = useSelected();
  const path = ReactEditor.findPath(editor, element);
  useEffect(() => {
    if (!selected) {
      setShow(false);
    }
  }, [selected]);
  const updateTable = () => {
    let newRow = Number(row) || 1;
    let newColmn = Number(colmn) || 1;
    let preRows = JSON.parse(JSON.stringify(element.children)) as any[];
    const td: any = {
      type: SlatePadElementEnum.TABLE_CELL,
      children: [
        { type: SlatePadElementEnum.PARAGRAPH, children: [{ text: "" }] },
      ],
    };
    // 让行数一样
    const tr: any = {
      type: SlatePadElementEnum.TABLE_ROW,
      children: [],
    };
    const newRows = new Array(Math.abs(preRows.length - newRow)).fill(tr);
    preRows = [...preRows, ...newRows].slice(0, newRow);
    // 让列数一样
    preRows.forEach((row: any) => {
      const newColmns = new Array(
        Math.abs(row.children.length - newColmn)
      ).fill(td);
      row.children = [...row.children, ...newColmns].slice(0, newColmn);
    });
    Transforms.removeNodes(editor, {
      at: path,
    });
    Transforms.insertNodes(
      editor,
      [
        {
          type: SlatePadElementEnum.TABLE,
          children: JSON.parse(JSON.stringify(preRows)),
        },
      ],
      {
        at: path,
      }
    );
  };
  const removeTable = () => {
    Transforms.removeNodes(editor, {
      at: path,
    });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "ArrowUp") {
      ipt1.current?.focus();
    }
    if (e.code === "ArrowDown") {
      ipt2.current?.focus();
    }
    if (e.code === "Enter") {
      updateTable();
    }
  };
  return (
    <div
      className="slatepad-table relative my-[25px]"
      onClick={(e) => {
        e.stopPropagation();
        setShow(false);
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          contentEditable={false}
          className="slatepad-table-icon absolute top-[-20px]  [&>svg]:cursor-pointer"
          style={{
            display: selected ? "flex" : "none",
          }}
        >
          <GridIcon
            onClick={() => setShow(true)}
            className="active:opacity-0"
          />
          <DeleteIcon
            onClick={() => removeTable()}
            className="ml-[5px] active:opacity-0"
          />
        </div>
        {show && (
          <div
            contentEditable={false}
            className="slatepad-table-size absolute bg-white rounded w-[120px] p-[10px]"
            style={{
              boxShadow: "rgba(4, 4, 4, 0.1) 0px 2px 4px 3px",
            }}
          >
            <div className="flex justify-between items-center">
              <input
                onKeyDown={handleKeyDown}
                autoFocus
                value={row}
                ref={ipt1}
                onChange={(e) => setRow(e.target.value)}
                className="w-[35px] h-[20px] p-[2px] text-sm border-black border-[1px] rounded outline-none"
                type="text"
              />
              <span>X</span>
              <input
                onKeyDown={handleKeyDown}
                ref={ipt2}
                value={colmn}
                className="w-[35px]  h-[20px] p-[2px] text-sm border-black border-[1px] rounded outline-none"
                type="text"
                onChange={(e) => setColum(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      <table {...attributes} className="w-full">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

// 在表格中,进行上下切换
function handleTable(
  editor: SlatePadEditor,
  direction: "ArrowUp" | "ArrowDown"
) {
  const isArrowDown = direction === "ArrowDown";
  const [, cellPath] = getCurrentBlock(editor, "table-cell") || [];
  const [block, blockPath] = getCurrentBlock(editor) || [];
  if (!cellPath || !editor.selection || !blockPath || !block) return;
  const hasNext = isArrowDown
    ? getNextPath(editor, blockPath)
    : getPrePath(editor, blockPath);
  // 如果当前的块有换行,按下上下键后,可能还需要保留在当前块,所以需要进行判断
  const str = Node.string(block);
  const text = isArrowDown
    ? str.slice(editor.selection.focus.offset)
    : str.slice(0, editor.selection.focus.offset);
  if (!hasNext && !text.includes("\n")) {
    const realNextPath = [...cellPath];
    const nextLevel = isArrowDown ? 1 : -1;
    realNextPath[realNextPath.length - 2] =
      realNextPath[realNextPath.length - 2] + nextLevel;
    if (Path.isPath(realNextPath) && Editor.hasPath(editor, realNextPath)) {
      Transforms.select(editor, Editor.end(editor, realNextPath));
      return true;
    }
  }
}
