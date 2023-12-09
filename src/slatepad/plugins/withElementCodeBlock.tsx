import { useRef, useState } from "react";
import {
  Transforms,
  Node,
  Editor,
  Element as SlateElement,
  Range,
  Path,
} from "slate";
import { ReactEditor, RenderElementProps, useSlateStatic } from "slate-react";
import { format } from "prettier/standalone";
import BabelPlugin from "prettier/parser-babel";
import CssPlugin from "prettier/parser-postcss";
import HtmlPlugin from "prettier/parser-html.js";
import { PrettierPluginJava } from "../lib/PrettierJavaPlugin";
import { SlatePadEditor, SlatePadElement, SlatePadElementEnum } from "../types";
import { Arrow, PrettierIcon } from "../../assets/svg/icon";
import { getNextPath, getPrePath } from "../utils/PathUtils";
import { getCurrentBlock, getNextBlock } from "../utils/BlockUtils";
import { Options } from "prettier";
import { LANGUAGES } from "../components/SetNodeToDecorations";

export const withElementCodeBlock = (editor: SlatePadEditor) => {
  const { renderElement, onShortCuts, onKeyDown, normalizeNode } = editor;
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    if (props.element.type === SlatePadElementEnum.CODE_LINE) {
      return (
        <div
          {...attributes}
          style={{
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          }}
          className="code-line relative text-[16px] leading-[20px] mx-[10px] my-[4px]"
        >
          {children}
        </div>
      );
    }
    if (props.element.type === SlatePadElementEnum.CODE_BLOCK) {
      return <CodeBlock props={props} />;
    }
    return renderElement(props);
  };
  editor.shoutCutsMap.set("```", SlatePadElementEnum.CODE_LINE);
  editor.onShortCuts = (type, beforeText) => {
    if (type === SlatePadElementEnum.CODE_LINE && /^```/.test(beforeText)) {
      editor.withoutNormalizing(() => {
        Transforms.setNodes<SlateElement>(
          editor,
          { type: SlatePadElementEnum.CODE_LINE },
          {
            match: (n) =>
              SlateElement.isElement(n) && Editor.isBlock(editor, n),
          }
        );
        Transforms.wrapNodes(
          editor,
          {
            type: SlatePadElementEnum.CODE_BLOCK,
            language: beforeText?.replace("```", "") || "",
            children: [],
          },
          {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === SlatePadElementEnum.CODE_LINE,
          }
        );
      });
      return;
    }
    onShortCuts(type, beforeText);
  };
  editor.onKeyDown = (e) => {
    if (e.code === "ArrowUp") {
      // 处理进入到代码块的逻辑
      const [, path] = getCurrentBlock(editor) || [];
      if (!path) return;
      const prePath = getPrePath(editor, path);
      if (prePath) {
        const preBlock = Node.get(editor, prePath) as SlateElement;
        if (preBlock?.type === SlatePadElementEnum.CODE_BLOCK) {
          e.preventDefault();
          ReactEditor.toDOMNode(editor, preBlock)
            .querySelector("input")
            ?.focus();
          return;
        }
      }
    }
    if (e.code === "ArrowDown") {
      // 处理离开代码块的逻辑
      const codeLine = getCurrentBlock(editor, "code-line");
      if (codeLine) {
        const [, path] = codeLine;
        const nextCodeLine = getNextBlock(editor, path);
        if (!nextCodeLine) {
          e.preventDefault();
          const [codeBlock] = getCurrentBlock(editor, "code-block") || [];
          codeBlock &&
            ReactEditor.toDOMNode(editor, codeBlock)
              .querySelector("input")
              ?.focus();
          return;
        }
      }
    }
    if (e.code === "Tab") {
      const [block, path] = getCurrentBlock(editor, "code-block") || [];
      if (!editor.selection || !block || !path) return;
      e.preventDefault();
      const codeLines: [SlatePadElement, Path][] = [];
      for (const [child, childPath] of Node.children(editor, path)) {
        if (
          SlateElement.isElement(child) &&
          Range.includes(editor.selection, childPath)
        ) {
          codeLines.push([child, childPath]);
          if (!e.shiftKey) {
            Transforms.insertText(editor, "  ", {
              at: Editor.start(editor, childPath),
            });
          }
        }
      }
      if (e.shiftKey) {
        codeLines.forEach(([child, childPath]) => {
          // 由于setNodes无法直接改变子元素的children,为了简便操作直接使用移除和新增节点,完成缩进文本空白删除
          const text = Node.string(child).split("");
          if (text[0] === " ") text.splice(0, 1);
          if (text[0] === " ") text.splice(0, 1);
          Transforms.removeNodes(editor, { at: childPath });
          Transforms.insertNodes(
            editor,
            {
              type: SlatePadElementEnum.CODE_LINE,
              children: [{ text: text.join("") }],
            },
            { at: childPath }
          );
        });
      }
      const newRange: Range = {
        anchor: Editor.start(editor, codeLines[0][1]),
        focus: Editor.end(editor, codeLines[codeLines.length - 1][1]),
      };
      Transforms.select(editor, newRange);
    }
    onKeyDown(e);
  };
  editor.normalizeNode = ([node, path]) => {
    // Code-Block里面必须是codeline
    if (
      SlateElement.isElement(node) &&
      node.type === SlatePadElementEnum.CODE_BLOCK
    ) {
      for (const [child] of Node.children(editor, path)) {
        if (
          SlateElement.isElement(child) &&
          child.type !== SlatePadElementEnum.CODE_LINE
        ) {
          const codeLines = Node.string(node)
            .split("\n")
            .map(
              (text) =>
                ({
                  type: SlatePadElementEnum.CODE_LINE,
                  children: [{ text }],
                } as any)
            );
          Transforms.setNodes(editor, {
            type: SlatePadElementEnum.CODE_BLOCK,
            children: codeLines,
          });
          return;
        }
      }
    }
    normalizeNode([node, path]);
  };
  return editor;
};

function CodeBlock({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const [collapse, setCollapse] = useState(false);
  const [isIptFocus, setIptFocus] = useState(false);
  const [isSelectLang, setIsSelect] = useState(false);
  const [langIndex, setLangIndex] = useState(0);
  const [matchLangs, setMatchLangs] = useState([""]);
  const iptRef = useRef<HTMLInputElement>(null);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  const setLanguage = (language: string) => {
    const path = ReactEditor.findPath(editor, element);
    Transforms.setNodes(editor, { language }, { at: path });
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    !isSelectLang && setIsSelect(true);
    setLangIndex(0);
    setLanguage(e.target.value);
    setMatchLangs(
      LANGUAGES.filter((L) =>
        new RegExp(iptRef.current?.value || "", "i").test(L)
      )
    );
  };
  // 将所有的keydown逻辑放在一起不是很nice,后续可以拆分放到plugin中
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "ArrowUp") {
      e.preventDefault();
      if (!isSelectLang) {
        const path = ReactEditor.findPath(editor, element);
        const [, lastPath] = Node.last(editor, path);
        // focus的位置默认是[0],所以你需要重置到代码块的底部
        ReactEditor.focus(editor);
        Transforms.select(editor, lastPath);
        Transforms.select(editor, Editor.end(editor, lastPath));
      } else {
        setLangIndex(langIndex <= 1 ? matchLangs.length - 1 : langIndex - 1);
      }
    }
    if (e.code === "ArrowDown") {
      e.preventDefault();
      if (!isSelectLang) {
        const path = ReactEditor.findPath(editor, element);
        const nextPath = getNextPath(editor, path);
        const nextBlock = getNextBlock(editor, path);
        if (nextPath && nextBlock) {
          ReactEditor.focus(editor);
          Transforms.select(editor, nextPath);
          Transforms.select(editor, Editor.end(editor, nextPath));
        }
      } else {
        setLangIndex(langIndex === matchLangs.length - 1 ? 0 : langIndex + 1);
      }
    }
    if (e.code === "Enter" && isSelectLang) {
      setLanguage(matchLangs[langIndex]);
      setIsSelect(false);
    }
  };

  const formatter = () => {
    const codeString = element.children
      .map((codeLine) => Node.string(codeLine))
      .join("\n");
    const path = ReactEditor.findPath(editor, element);
    try {
      const codeLines = formatCodeString(
        element.language.toLowerCase(),
        codeString
      )
        .split("\n")
        .map(
          (line) =>
            ({
              type: SlatePadElementEnum.CODE_LINE,
              children: [{ text: line }],
            } as any)
        );
      // prettier-bug:格式化后,最后一行可能会是空的,如果是空的就去除
      if (!Node.string(codeLines[codeLines.length - 1])) {
        codeLines.pop();
      }
      Editor.withoutNormalizing(editor, () => {
        Transforms.removeNodes(editor, { at: path });
        Transforms.insertNodes(
          editor,
          {
            type: SlatePadElementEnum.CODE_BLOCK,
            children: codeLines,
            language: element.language,
          },
          { at: path }
        );
        ReactEditor.blur(editor);
      });
    } catch (error) {
      console.log("语法出错或者解析器不匹配,格式化失败");
    }
  };
  return (
    <div
      {...attributes}
      className="slatepad-code-block rounded group bg-[#fafafa] py-[4px] my-[8px] relative"
      suppressContentEditableWarning
      contentEditable={collapse ? false : true}
    >
      <pre
        className={`language-${""} overflow-hidden`}
        style={{
          height: collapse ? "30px" : "auto",
        }}
      >
        <code className="whitespace-pre-wrap">{children}</code>
      </pre>
      {collapse && (
        <div
          contentEditable={false}
          className="rest pl-[10px]  h-[30px] relative"
        >
          <span className="absolute top-0">......</span>
        </div>
      )}
      <div className="code-helpers [&>button]:active:opacity-0 absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-[4px]">
        {/* <Copy /> */}
        <PrettierIcon onMouseDown={formatter} />
      </div>
      <Arrow
        contentEditable={false}
        onClick={handleClick}
        className={`absolute hover:bg-white left-[-30px]  top-[0px] opacity-${
          collapse ? 100 : 0
        } group-hover:opacity-100 transition-all ${
          collapse ? "-rotate-90" : ""
        }`}
      />
      <div
        contentEditable={false}
        className={`slatepad-lang-selector absolute right-[0]  bottom-0 p-[6px] w-[100px] opacity-${
          isIptFocus ? "100" : 0
        } group-hover:opacity-100`}
      >
        <input
          type="text"
          ref={iptRef}
          onFocus={() => setIptFocus(true)}
          onBlur={() => setIptFocus(false)}
          className="px-[4px] w-full rounded "
          value={(element as any).language}
          onKeyDown={handleKeyDown}
          onChange={handleInput}
        />
        <ul
          className={
            `${isSelectLang ? "" : "hidden"}` +
            " absolute right-0 mt-[10px] rounded bg-slate-100 px-[20px]"
          }
        >
          {matchLangs.map((l, index) => {
            return (
              <li
                className={
                  index === langIndex ? "slatepad-lang text-red-400" : ""
                }
                key={l}
              >
                {l}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/*
 * 格式化测试地址:https://prettier.io/playground/
 * 每种语言需要使用对应的parser,否则会报错. 这里暂时只对以下进行支持
 */
function formatCodeString(lang: string, codeStr = "") {
  const options = new Map<string, Options>();
  // Java插件 参考: https://github.com/jhipster/prettier-java/issues/547
  options.set("java", {
    parser: "java",
    plugins: [PrettierPluginJava],
  });
  // 这些语言都可以使用这个解析器
  ["javascript", "typescript", "jsx", "tsx"].forEach((lang) => {
    options.set(lang, {
      parser: "babel-ts",
      plugins: [BabelPlugin],
      // 结尾不使用分号;
      semi: false,
    });
  });
  ["html", "vue"].forEach((lang) => {
    options.set(lang, {
      parser: "vue",
      plugins: [HtmlPlugin],
    });
  });
  ["css", "sass", "scss"].forEach((lang) => {
    options.set(lang, {
      parser: "css",
      plugins: [CssPlugin],
    });
  });
  return format(codeStr, options.get(lang));
}
