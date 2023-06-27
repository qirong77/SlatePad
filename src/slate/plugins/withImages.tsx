import isUrl from 'is-url'
import { CustomEditor } from '../../types/slate'
import imageExtensions from 'image-extensions'
import { insertImage } from '../utils/RichUtils'

export const withImages = (editor: CustomEditor) => {
  const { insertData, isVoid } = editor

  // void元素就是不可编辑的元素，slate默认都是返回false，这里重写这个方法
  editor.isVoid = element => {
    return element.type === 'image' || element.type === 'divider' ? true : isVoid(element)
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
  return editor
}
const isImageUrl = (url = '') => {
  if (!url) return false
  if (!isUrl(url)) return false
  const ext = new URL(url).pathname.split('.').pop() || 'error'
  return imageExtensions.includes(ext)
}
