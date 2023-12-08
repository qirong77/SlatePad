import { createEditor } from "slate";
import { withPastHtml } from "./withPastHtml";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import { withShortcuts } from "./withShortcuts";
import { withForceLayout } from "./withForceLayout";
import { withNormalizing } from "./withNormalizing";
import { withTables } from "./withTables";
import { withElementChecklist } from "./withElementCheckList";
import { withElementCodeBlock } from "./withElementCodeBlock";
import { withElementFixSelect } from "./withElementFixSelect";
import { withElementHeading } from "./withElementHeading";
import { withElementImage } from "./withElementImages";
import { withElementLink } from "./withElementLink";
import { withElementList } from "./withElementList";
import { withElementTable } from "./withElementTable";

export const createSlatepad = () => {
  const editor = createEditor();
  editor.use = (plugin) => {
    return plugin(editor);
  };
  // 结构参考:https://marked.js.org/demo/
  editor.renderElement = (props) => {
    const { attributes, children } = props
    return <p {...attributes}>{children}</p>
  }
  editor
    .use(withReact)
    .use(withElementChecklist)
    .use(withElementCodeBlock)
    .use(withElementFixSelect)
    .use(withElementHeading)
    .use(withElementImage)
    .use(withElementLink)
    .use(withElementList)
    .use(withElementTable)
    // .use(withShortcuts)
    // .use(withNormalizing)
    // .use(withTables)
    // .use(withForceLayout)
    // .use(withHistory)
    // .use(withPastHtml);
  return editor;
};
