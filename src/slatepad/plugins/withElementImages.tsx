import isUrl from 'is-url'
import { SlatePadEditor, SlatePadElementEnum } from '../types'
import { insertImage } from '../utils/RichUtils'
import { ReactEditor, RenderElementProps, useSelected, useSlateStatic } from 'slate-react'
import { useEffect, useState } from 'react'
import { Transforms } from 'slate'


export const withElementImage = (editor: SlatePadEditor) => {
  const { insertData, isVoid,renderElement } = editor
  // void元素就是不可编辑的元素，slate默认都是返回false，这里重写这个方法
  editor.isVoid = element => {
    return element.type === SlatePadElementEnum.IMAGE ? true : isVoid(element)
  }
  // 在粘贴和拖住上增加image的功能
  editor.insertData = data => {
    const text = data.getData('text/plain')
    const { files } = data
    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result
            url && insertImage(editor, url as string)
          })
          reader.readAsDataURL(file)
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text)
    } else {
      insertData(data)
    }
  }
  editor.renderElement = (props) => {
    if (props.element.type === SlatePadElementEnum.IMAGE) {
      return <ImageElement props={props} />;
    }
    return renderElement(props);
  };
  return editor
}
const isImageUrl = (url = '') => {
  if (!url) return false
  if (!isUrl(url)) return false
  const ext = new URL(url).pathname.split('.').pop() || 'error'
  return imageExtensions.includes(ext)
}

function ImageElement({ props }: { props: RenderElementProps }) {
  const { attributes, children, element } = props
  const [url, setUrl] = useState(element.url)
  const selected = useSelected()
  const editor = useSlateStatic()
  const updateUrl = (url = '') => {
    Transforms.setNodes(
      editor,
      {
        url
      },
      { at: ReactEditor.findPath(editor, element) }
    )
  }
  useEffect(() => {
    async function resetUrl() {
      const newUrl = await editor.onInsertImage?.(element.url)
      if (newUrl) {
        updateUrl(newUrl)
        setUrl(newUrl)
      }
    }
    resetUrl()
  }, [])
  return (
    <div
      {...attributes}
      className={`slatepad-image min-h-[50px] relative border-[3px] rounded ${
        selected ? 'border-blue-500' : 'border-transparent'
      }`}>
      {children}
      <div
        contentEditable={false}
        className="absolute  top-0 left-0 border-[2px] border-blue-400 rounded z-20"
        style={{
          opacity: selected ? '100%' : '0%'
        }}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          onBlur={e => updateUrl(e.target.value)}
          className="rounded pl-[2px]"
        />
      </div>
      <img
        src={element.url}
        className="w-full h-full"
        /* 
        兼容处理:当图片在一个表格的单元格中,且这个单元格里面只有一个image元素时有时无法选中的问题
        */
        onClick={e => {
          e.stopPropagation()
          Transforms.select(editor, ReactEditor.findPath(editor, element))
        }}
      />
    </div>
  )
}








var imageExtensions = [
  'ase',
  'art',
  'bmp',
  'blp',
  'cd5',
  'cit',
  'cpt',
  'cr2',
  'cut',
  'dds',
  'dib',
  'djvu',
  'egt',
  'exif',
  'gif',
  'gpl',
  'grf',
  'icns',
  'ico',
  'iff',
  'jng',
  'jpeg',
  'jpg',
  'jfif',
  'jp2',
  'jps',
  'lbm',
  'max',
  'miff',
  'mng',
  'msp',
  'nitf',
  'ota',
  'pbm',
  'pc1',
  'pc2',
  'pc3',
  'pcf',
  'pcx',
  'pdn',
  'pgm',
  'PI1',
  'PI2',
  'PI3',
  'pict',
  'pct',
  'pnm',
  'pns',
  'ppm',
  'psb',
  'psd',
  'pdd',
  'psp',
  'px',
  'pxm',
  'pxr',
  'qfx',
  'raw',
  'rle',
  'sct',
  'sgi',
  'rgb',
  'int',
  'bw',
  'tga',
  'tiff',
  'tif',
  'vtf',
  'xbm',
  'xcf',
  'xpm',
  '3dv',
  'amf',
  'ai',
  'awg',
  'cgm',
  'cdr',
  'cmx',
  'dxf',
  'e2d',
  'egt',
  'eps',
  'fs',
  'gbr',
  'odg',
  'svg',
  'stl',
  'vrml',
  'x3d',
  'sxd',
  'v2d',
  'vnd',
  'wmf',
  'emf',
  'art',
  'xar',
  'png',
  'webp',
  'jxr',
  'hdp',
  'wdp',
  'cur',
  'ecw',
  'iff',
  'lbm',
  'liff',
  'nrrd',
  'pam',
  'pcx',
  'pgf',
  'sgi',
  'rgb',
  'rgba',
  'bw',
  'int',
  'inta',
  'sid',
  'ras',
  'sun',
  'tga'
]
