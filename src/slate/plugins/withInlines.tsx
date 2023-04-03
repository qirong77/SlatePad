import { CustomEditor } from '../../types/slate'

export const withInlines = (editor: CustomEditor) => {
  const { insertData, isInline } = editor
  //   重写isInline方法，默认情况下这个方法都是返回false
  // 前面那部分表示如果匹配到了行内快，后面表示使用原来的方法，也就一直是返回false
  editor.isInline = element => {
    return ['link', 'button'].includes(element?.type) || isInline(element)
  }
  // 复制粘贴和拖拽的时候转换为对应的元素，待完成
  editor.insertData = data => {
    insertData(data)
  }
  return editor
}
