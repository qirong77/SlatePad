import { createEditor } from "slate";
import { withPastHtml } from "../plugins/withPastHtml";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import { withElementChecklist } from "../plugins/withElementCheckList";
import { withElementCodeBlock } from "../plugins/withElementCodeBlock";
import { withElementHeading } from "../plugins/withElementHeading";
import { withElementImage } from "../plugins/withElementImages";
import { withElementLink } from "../plugins/withElementLink";
import { withElementList } from "../plugins/withElementList";
import { withElementTable } from "../plugins/withElementTable";
import { withShortCuts } from "../plugins/withShortcuts";
import { withKeyDown } from "../plugins/withKeyDown";
import { withNormalizing } from "../plugins/withNormalizing";
import { withElementBlockQuote } from "../plugins/withElementBlockQuote";
export const createSlatepad = () => {
  const editor = createEditor();
  editor.use = (plugin) => {
    return plugin(editor);
  };
  // 结构参考:https://marked.js.org/demo/
  editor.renderElement = (props) => {
    const { attributes, children } = props;
    return <p {...attributes}>{children}</p>;
  };
  editor
    .use(withReact)
    .use(withHistory)
    .use(withKeyDown)
    .use(withShortCuts)
    .use(withNormalizing)
    .use(withElementTable)
    .use(withElementChecklist)
    .use(withElementCodeBlock)
    .use(withElementHeading)
    .use(withElementImage)
    .use(withElementLink)
    .use(withElementList)
    .use(withElementTable)
    .use(withElementBlockQuote)
    .use(withPastHtml)

  return editor;
};
