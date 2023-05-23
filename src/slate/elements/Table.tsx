import { ReactEditor, RenderElementProps, useSelected, useSlate, useSlateStatic } from 'slate-react'
import { DeleteIcon, GridIcon } from '../../assets/svg/icon'
import { useEffect, useRef, useState } from 'react'
import { Element, Path, Transforms } from 'slate'
import { TableCellElement, TableRowElement } from '../../types/slate'

export const Table = ({ props }: { props: RenderElementProps }) => {
  const { attributes, children, element } = props
  const [show, setShow] = useState(false)
  const [row, setRow] = useState<any>(element.children.length)
  const [colmn, setColum] = useState<any>((element.children[0] as TableRowElement).children.length)
  const editor = useSlateStatic()
  const selected = useSelected()
  const path = ReactEditor.findPath(editor, element)
  useEffect(() => {
    if (!selected) {
      setShow(false)
    }
  }, [selected])

  const updateTable = (e: React.MouseEvent) => {
    let newRow = Number(row) || 1
    let newColmn = Number(colmn) || 1
    e.stopPropagation()
    let preRows = JSON.parse(JSON.stringify(element.children)) as TableRowElement[]
    const td: TableCellElement = {
      type: 'table-cell',
      children: [{ type: 'paragraph', children: [{ text: '' }] }]
    }
    // 让行数一样
    const tr: TableRowElement = {
      type: 'table-row',
      children: []
    }
    const newRows = new Array(Math.abs(preRows.length - newRow)).fill(tr)
    preRows = [...preRows, ...newRows].slice(0, newRow)
    // 让列数一样
    preRows.forEach((row: TableRowElement) => {
      const newColmns = new Array(Math.abs(row.children.length - newColmn)).fill(td)
      row.children = [...row.children, ...newColmns].slice(0, newColmn)
    })
    Transforms.removeNodes(editor, {
      at: path
    })
    Transforms.insertNodes(
      editor,
      [
        {
          type: 'table',
          children: JSON.parse(JSON.stringify(preRows))
        }
      ],
      {
        at: path
      }
    )
  }
  const removeTable = () => {
    Transforms.removeNodes(editor, {
      at: path
    })
  }
  const handleBlur = () => {
    // console.log(selected)
  }
  return (
    <div className="slatepad-table relative my-[25px]">
      <div
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          ReactEditor.blur(editor)
        }}>
        <div
          contentEditable={false}
          className="absolute top-[-20px]  [&>svg]:cursor-pointer"
          style={{
            display: selected ? 'flex' : 'none'
          }}>
          <GridIcon onClick={() => setShow(true)} className="active:opacity-0" />
          <DeleteIcon onClick={() => removeTable()} className="ml-[5px] active:opacity-0" />
        </div>
        {show && (
          <div
            onBlur={handleBlur}
            contentEditable={false}
            className="absolute bg-white  rounded w-[160px] p-[10px]"
            style={{
              boxShadow: 'rgba(4, 4, 4, 0.1) 0px 2px 4px 3px'
            }}>
            <div className="flex justify-between items-center">
              <input
                autoFocus
                value={row}
                onChange={e => setRow(e.target.value)}
                className="w-[30px] h-[20px] p-[2px] text-sm border-black border-[1px] rounded outline-none"
                type="text"
              />
              <span>X</span>
              <input
                value={colmn}
                className="w-[30px]  h-[20px] p-[2px] text-sm border-black border-[1px] rounded outline-none"
                type="text"
                onChange={e => setColum(e.target.value)}
              />
              <button onClick={updateTable}>确定</button>
            </div>
          </div>
        )}
      </div>
      <table {...attributes} className="w-full table-fixed">
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
