import { Transforms, Element, Node, Path } from "slate";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import { getCurrentBlock } from "../utils/BlockUtils";

export const withElementBlockQuote = (editor: SlatePadEditor) => {
  const {
    onShortCuts,
    renderElement,
    insertBreak,
    normalizeNode,
  } = editor;
  editor.onShortCuts = (beforeText) => {
    if (/^\>/.test(beforeText)) {
      Transforms.setNodes<SlatePadElement>(editor, {
        type: SlatePadElementEnum.BLOCK_QUOTE,
      });
      editor.deleteBackward("line");
      return;
    }
    onShortCuts(beforeText);
  };
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    if (props.element.type === SlatePadElementEnum.BLOCK_QUOTE) {
      return (
        <blockquote
          className="slatepad-blockquote border-l-[3px] pl-[15px] my-[8px]  border-slate-400 text-slate-400"
          {...attributes}
        >
          {children}
        </blockquote>
      );
    }
    return renderElement(props);
  };
  editor.normalizeNode = ([node, path]) => {
    if (
      Element.isElement(node) &&
      node.type === SlatePadElementEnum.BLOCK_QUOTE
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
  editor.insertBreak = () => {
    const [block, path] = getCurrentBlock(editor);
    const [parent, parentPath] = getCurrentBlock(
      editor,
      SlatePadElementEnum.BLOCK_QUOTE
    );
    if (
      block && parent &&
      parent.type === SlatePadElementEnum.BLOCK_QUOTE &&
      block.type === SlatePadElementEnum.PARAGRAPH
    ) {
      const shouldUnwrap = !Node.string(block);
      if (shouldUnwrap) {
        Transforms.unwrapNodes(editor, {
          match(node, path) {
            return (
              Element.isElement(node) &&
              node.type === SlatePadElementEnum.BLOCK_QUOTE
            );
          },
          split:true
        })
      } else {
        Transforms.insertNodes(
          editor,
          { type: SlatePadElementEnum.PARAGRAPH, children: [{ text: "" }] },
          { at: Path.next(path), select: true }
        );
      }
      return;
    }
    insertBreak();
  };
  return editor;
};
