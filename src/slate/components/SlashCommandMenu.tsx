import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSlateStatic, useSlateSelection, ReactEditor } from 'slate-react'
import { Editor, Transforms, Range, Element as SlateElement } from 'slate'
import { SlatePadEditor } from '../../types/slate'
import { getCurrentBlock } from '../utils/BlockUtils'

interface CommandItem {
  title: string
  description: string
  icon: string
  keywords: string[]
  onSelect: (editor: SlatePadEditor) => void
}

const SLASH_COMMANDS: CommandItem[] = [
  // {
  //   title: '段落',
  //   description: '普通文本段落',
  //   icon: '¶',
  //   keywords: ['paragraph', 'text', '段落', '文字'],
  //   onSelect: (editor) => {
  //     Transforms.setNodes(editor, { type: 'paragraph' })
  //   },
  // },
  // {
  //   title: '一级标题',
  //   description: '最大的章节标题',
  //   icon: 'H1',
  //   keywords: ['heading', 'h1', '标题', '一级'],
  //   onSelect: (editor) => {
  //     Transforms.setNodes(editor, { type: 'heading1' })
  //   },
  // },
  // {
  //   title: '二级标题',
  //   description: '大章节标题',
  //   icon: 'H2',
  //   keywords: ['heading', 'h2', '标题', '二级'],
  //   onSelect: (editor) => {
  //     Transforms.setNodes(editor, { type: 'heading2' })
  //   },
  // },
  // {
  //   title: '三级标题',
  //   description: '中等章节标题',
  //   icon: 'H3',
  //   keywords: ['heading', 'h3', '标题', '三级'],
  //   onSelect: (editor) => {
  //     Transforms.setNodes(editor, { type: 'heading3' })
  //   },
  // },
  // {
  //   title: '四级标题',
  //   description: '小章节标题',
  //   icon: 'H4',
  //   keywords: ['heading', 'h4', '标题', '四级'],
  //   onSelect: (editor) => {
  //     Transforms.setNodes(editor, { type: 'heading4' })
  //   },
  // },
  // {
  //   title: '无序列表',
  //   description: '创建无序列表',
  //   icon: '•',
  //   keywords: ['list', 'ul', '列表', '无序'],
  //   onSelect: (editor) => {
  //     editor.withoutNormalizing(() => {
  //       Transforms.setNodes(editor, { type: 'list-item' })
  //       Transforms.wrapNodes(
  //         editor,
  //         { type: 'bulleted-list', children: [] },
  //         {
  //           match: (n) => SlateElement.isElement(n) && n.type === 'list-item',
  //         }
  //       )
  //     })
  //   },
  // },
  // {
  //   title: '有序列表',
  //   description: '创建有序列表',
  //   icon: '1.',
  //   keywords: ['list', 'ol', '列表', '有序', '数字'],
  //   onSelect: (editor) => {
  //     editor.withoutNormalizing(() => {
  //       Transforms.setNodes(editor, { type: 'list-item' })
  //       Transforms.wrapNodes(
  //         editor,
  //         { type: 'number-list', children: [] },
  //         {
  //           match: (n) => SlateElement.isElement(n) && n.type === 'list-item',
  //         }
  //       )
  //     })
  //   },
  // },

  {
    title: '表格',
    description: '插入表格',
    icon: '⊞',
    keywords: ['table', '表格'],
    onSelect: (editor) => {
      const rows = 3
      const cols = 3
      const tableNode = {
        type: 'table' as const,
        children: [
          {
            type: 'table-row' as const,
            children: Array.from({ length: cols }, () => ({
              type: 'table-head' as const,
              children: [{ type: 'paragraph' as const, children: [{ text: '' }] }],
            })),
          },
          ...Array.from({ length: rows - 1 }, () => ({
            type: 'table-row' as const,
            children: Array.from({ length: cols }, () => ({
              type: 'table-cell' as const,
              children: [{ type: 'paragraph' as const, children: [{ text: '' }] }],
            })),
          })),
        ],
      }
      Transforms.insertNodes(editor, tableNode)
    },
  },
  {
    title: '代码块',
    description: '插入代码块',
    icon: '</>',
    keywords: ['code', 'codeblock', '代码'],
    onSelect: (editor) => {
      editor.withoutNormalizing(() => {
        Transforms.setNodes(editor, { type: 'code-line' })
        Transforms.wrapNodes(
          editor,
          { type: 'code-block', language: '', children: [] },
          {
            match: (n) => SlateElement.isElement(n) && n.type === 'code-line',
          }
        )
      })
    },
  },
  {
    title: '任务列表',
    description: '创建可勾选的任务列表',
    icon: '☑',
    keywords: ['todo', 'checklist', 'task', '任务', '勾选'],
    onSelect: (editor) => {
      Transforms.setNodes(editor, { type: 'check-list-item', checked: false })
    },
  },
  {
    title: '引用',
    description: '创建块引用',
    icon: '"',
    keywords: ['quote', 'blockquote', '引用'],
    onSelect: (editor) => {
      Transforms.setNodes(editor, { type: 'block-quote' })
    },
  },

  {
    title: '分割线',
    description: '插入水平分割线',
    icon: '—',
    keywords: ['divider', 'hr', '分割线', '横线'],
    onSelect: (editor) => {
      Transforms.setNodes(editor, { type: 'divider' })
    },
  },
]

export const SlashCommandMenu: React.FC = () => {
  const editor = useSlateStatic() as SlatePadEditor
  const selection = useSlateSelection()
  const menuRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slashRange, setSlashRange] = useState<Range | null>(null)

  const filteredCommands = SLASH_COMMANDS.filter((cmd) => {
    if (!search) return true
    const q = search.toLowerCase()
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.description.toLowerCase().includes(q) ||
      cmd.keywords.some((k) => k.toLowerCase().includes(q))
    )
  })

  // 监听 selection 变化以检测斜杠输入
  useEffect(() => {
    if (!selection || !Range.isCollapsed(selection)) {
      setVisible(false)
      setSlashRange(null)
      return
    }

    const { anchor } = selection

    // 获取从行首到光标的文本
    const block = Editor.above(editor, {
      match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
    })

    if (!block) {
      setVisible(false)
      return
    }

    const [, path] = block
    const start = Editor.start(editor, path)
    const range = { anchor, focus: start }
    const beforeText = Editor.string(editor, range)

    // 检测是否以斜杠开头（行首斜杠或空格后斜杠）
    const slashMatch = /(?:^|\s)(\/([^/\s]*))$/.exec(beforeText)

    if (slashMatch) {
      const query = slashMatch[2] || ''
      setSearch(query)
      setSelectedIndex(0)

      // 计算斜杠所在的 range
      const slashStart = {
        path: anchor.path,
        offset: anchor.offset - query.length - 1,
      }
      setSlashRange({ anchor: slashStart, focus: anchor })

      // 计算菜单位置
      try {
        const domRange = ReactEditor.toDOMRange(editor, {
          anchor: slashStart,
          focus: anchor,
        })
        const rect = domRange.getBoundingClientRect()
        setPosition({
          top: rect.bottom + window.scrollY + 4,
          left: rect.left + window.scrollX,
        })
        setVisible(true)
      } catch {
        setVisible(false)
      }
    } else {
      setVisible(false)
      setSlashRange(null)
    }
  }, [selection, editor])

  const selectCommand = useCallback(
    (cmd: CommandItem) => {
      if (!slashRange) return

      // 删除斜杠和输入的搜索文字
      Transforms.select(editor, slashRange)
      Transforms.delete(editor)

      cmd.onSelect(editor)

      setVisible(false)
      setSlashRange(null)
      setSearch('')
    },
    [editor, slashRange]
  )

  // 键盘导航
  useEffect(() => {
    if (!visible) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((i) => (i + 1) % filteredCommands.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((i) => (i - 1 + filteredCommands.length) % filteredCommands.length)
          break
        case 'Enter':
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            selectCommand(filteredCommands[selectedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          setVisible(false)
          setSlashRange(null)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [visible, filteredCommands, selectedIndex, selectCommand])

  // 滚动到选中项
  useEffect(() => {
    if (!menuRef.current || !visible) return
    const items = menuRef.current.querySelectorAll('[data-slash-item]')
    const selected = items[selectedIndex] as HTMLElement
    selected?.scrollIntoView({ block: 'nearest' })
  }, [selectedIndex, visible])

  if (!visible || filteredCommands.length === 0) return null

  return (
    <div
      ref={menuRef}
      className="slash-menu fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-y-auto"
      style={{
        top: position.top,
        left: position.left,
        maxHeight: '320px',
        width: '260px',
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      {filteredCommands.map((cmd, index) => (
        <div
          key={cmd.title}
          data-slash-item
          className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
            index === selectedIndex ? 'bg-blue-50' : 'hover:bg-gray-50'
          }`}
          onMouseEnter={() => setSelectedIndex(index)}
          onMouseDown={(e) => {
            e.preventDefault()
            selectCommand(cmd)
          }}
        >
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-600 text-xs font-mono font-bold">
            {cmd.icon}
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-gray-800 truncate">{cmd.title}</span>
            <span className="text-xs text-gray-400 truncate">{cmd.description}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
