import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import {
  Transforms,
  Node,
  Editor,
  Path,
  Element,
  Range,
  Text,
  NodeEntry,
} from "slate";
/* 
在 Slate.js 中，normalizeNode 方法用于规范化节点，它的执行时机有以下几种情况：

当节点首次被添加到 Slate.js 的文档树中时；
当节点内容发生变化时；
当节点的祖先节点发生变化时；
当用户执行了一些操作（如拖放）之后。
*/
// 执行时间:节点变化时,并不会遍历所有的节点,而是类似于Editor.above方式,从内向外,遍历当前选区的节点
// 当粘贴文本时,会遍历所有的粘贴文本
// 通过normalizing,可以处理粘贴的文本不符合文档的schema问题
export const withNormalizing = (editor: SlatePadEditor) => {
  const { normalizeNode } = editor;
  editor.normalizeNode = (entry) => {
    const [node, path] = entry as [SlatePadElement, Path];
    // 段落无法嵌套其他块元素
    if (Element.isElement(node) && node.type === SlatePadElementEnum.PARAGRAPH) {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (Element.isElement(child) && !editor.isInline(child)) {
          Transforms.unwrapNodes(editor, { at: path });
          return;
        }
      }
    }
    normalizeNode(entry)
  };
  return editor
};
