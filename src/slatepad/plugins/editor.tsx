import { createEditor  } from "slate";
import { withPastHtml } from "./withPastHtml";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import { withForceLayout } from "./withForceLayout";
import { withNormalizing } from "./withNormalizing";
import { withElementChecklist } from "./withElementCheckList";
import { withElementCodeBlock } from "./withElementCodeBlock";
import { withElementFixSelect } from "./withElementFixSelect";
import { withElementHeading } from "./withElementHeading";
import { withElementImage } from "./withElementImages";
import { withElementLink } from "./withElementLink";
import { withElementList } from "./withElementList";
import { withElementTable } from "./withElementTable";
import { withShortCuts } from "./withShortCuts";
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
    .use(withShortCuts)
    .use(withElementTable)
    // .use(withNormalizing)
    // .use(withForceLayout)
    // .use(withPastHtml);
    .use(withElementChecklist)
    .use(withElementCodeBlock)
    .use(withElementFixSelect)
    .use(withElementHeading)
    .use(withElementImage)
    .use(withElementLink)
    .use(withElementList)
    .use(withElementTable);

  return editor;
};
