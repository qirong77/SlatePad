import { CustomEditor } from '../../types/slate'

export const withImages = (editor: CustomEditor) => {
  const { insertData, isVoid } = editor

  // void元素就是不可编辑的元素，slate默认都是返回false，这里重写这个方法
  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element)
  }
  // 在粘贴和拖住上增加image的功能
  editor.insertData = data => {
    insertData(data)
  }
  return editor
}
