import { useEffect, useRef, useState } from 'react'
import { Transforms, Node, Editor, Path } from 'slate'
import { ReactEditor, RenderElementProps, useSlateStatic } from 'slate-react'
import { format } from 'prettier/standalone'
import babelPlugin from 'prettier/parser-babel'
import htmlPlugin from 'prettier/parser-html.js'
import { PrettierPluginJava } from '../lib/PrettierJavaPlugin'
import { CodeBlockElement, CodeLineElement } from '../../types/slate'
import { Arrow, Copy, PrettierIcon } from '../../assets/svg/icon'
import { getNextPath } from '../utils/PathUtils'
import { getNextBlock } from '../utils/BlockUtils'
import { Options } from 'prettier'

export function CodeBlock({ props }: { props: RenderElementProps<CodeBlockElement> }) {
  const { attributes, children, element } = props
  const editor = useSlateStatic()
  const [collapse, setCollapse] = useState(false)
  const [isIptFocus, setIptFocus] = useState(false)
  const iptRef = useRef<HTMLInputElement>(null)
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setCollapse(!collapse)
  }
  const setLanguage = (language: string) => {
    const path = ReactEditor.findPath(editor, element)
    Transforms.setNodes(editor, { language }, { at: path })
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setLanguage(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'ArrowUp') {
      e.preventDefault()
      const path = ReactEditor.findPath(editor, element)
      const [, lastPath] = Node.last(editor, path)
      // focus的位置默认是[0],所以你需要重置到代码块的底部
      ReactEditor.focus(editor)
      Transforms.select(editor, lastPath)
      Transforms.select(editor, Editor.end(editor, lastPath))
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault()
      const path = ReactEditor.findPath(editor, element)
      const nextPath = getNextPath(editor, path)
      const nextBlock = getNextBlock(editor, path)
      if (nextPath && nextBlock) {
        ReactEditor.focus(editor)
        Transforms.select(editor, nextPath)
        Transforms.select(editor, Editor.end(editor, nextPath))
      }
    }
  }

  const formatter = () => {
    const codeString = element.children.map(codeLine => Node.string(codeLine)).join('\n')
    const path = ReactEditor.findPath(editor, element)
    try {
      const codeLines = formatCodeString(element.language, codeString)
        .split('\n')
        .map(
          line =>
            ({
              type: 'code-line',
              children: [{ text: line }]
            } as CodeLineElement)
        )
      // prettier-bug:格式化后,最后一行可能会是空的,如果是空的就去除
      if (!Node.string(codeLines[codeLines.length - 1])) {
        codeLines.pop()
      }
      Editor.withoutNormalizing(editor, () => {
        const selection = editor.selection
        Transforms.removeNodes(editor, { at: path })
        Transforms.insertNodes(
          editor,
          { type: 'code-block', children: codeLines, language: 'ts' },
          { at: path }
        )
        // 格式化后重新选择之前的区域
        Path.isPath(selection) &&
          Editor.hasPath(editor, selection) &&
          Transforms.select(editor, selection)
      })
    } catch (error) {
      console.log('语法出错或者解析器不匹配,格式化失败')
    }
  }
  return (
    <div
      {...attributes}
      className="slatepad-code-block rounded group bg-[#fafafa] py-[4px] my-[8px] relative"
      suppressContentEditableWarning
      contentEditable={collapse ? false : true}>
      <pre
        className={`language-${''} overflow-hidden`}
        style={{
          height: collapse ? '30px' : 'auto'
        }}>
        <code className="whitespace-pre-wrap">{children}</code>
      </pre>
      {collapse && (
        <div contentEditable={false} className="rest pl-[10px]  h-[30px] relative">
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
        } group-hover:opacity-100 transition-all ${collapse ? '-rotate-90' : ''}`}
      />
      <div
        contentEditable={false}
        className={`absolute right-[0]  bottom-0 p-[6px] w-[100px] opacity-${
          isIptFocus ? '100' : 0
        } group-hover:opacity-100`}>
        <input
          type="text"
          ref={iptRef}
          onFocus={() => setIptFocus(true)}
          onBlur={() => setIptFocus(false)}
          className="px-[4px] w-full rounded "
          value={(element as CodeBlockElement).language}
          onKeyDown={handleKeyDown}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

/*
 * 格式化测试地址:https://prettier.io/playground/
 * 每种语言需要使用对应的parser,否则会报错. 这里暂时只对以下进行支持
 */
function formatCodeString(lang: string, codeStr = '') {
  const options = new Map<string, Options>()
  // Java插件 参考: https://github.com/jhipster/prettier-java/issues/547
  options.set('java', {
    parser: 'java',
    plugins: [PrettierPluginJava]
  })
  // 这些语言都可以使用这个解析器
  ;['javascript', 'typescript', 'jsx', 'tsx'].forEach(lang => {
    options.set(lang, {
      parser: 'babel-ts',
      plugins: [babelPlugin]
    })
  })
  ;['html', 'vue'].forEach(lang => {
    options.set(lang, {
      parser: 'vue',
      plugins: [htmlPlugin]
    })
  })
  return format(codeStr, options.get(lang))
}
