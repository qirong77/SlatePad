import {
  ReactEditor,
  RenderElementProps,
  useSelected,
  useSlateStatic,
} from "slate-react";
import { DeleteIcon, GridIcon } from "../../assets/svg/icon";
import { useEffect, useRef, useState } from "react";
import { Transforms,Range,Editor,Element,Point, NodeEntry, } from "slate";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";

export const withElementTable = (editor: SlatePadEditor) => {
  const { renderElement,deleteBackward } = editor;
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
        <tr {...attributes} className="h-[30px]">
          {children}
        </tr>
      );
    }
    return renderElement(props);
  };
  editor.deleteBackward = unit => {
    const { selection } = editor
    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: n => Element.isElement(n) && n.type === SlatePadElementEnum.TABLE_CELL
      })
      if (cell) {
        const [cellNode, cellPath] = cell as NodeEntry<SlatePadElement>
        const start = Editor.start(editor, cellPath)
        if (
          Point.equals(selection.anchor, start) &&
          (cellNode.children[0] as any)?.type === SlatePadElementEnum.PARAGRAPH
        ) {
          return
        }
      }
    }
    deleteBackward(unit)
  }
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
      <table {...attributes} className="w-full table-fixed">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
