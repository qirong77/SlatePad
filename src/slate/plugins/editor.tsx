import { createEditor } from "slate";

import { withImages } from "./withImages";
import { withInlines } from "./withInlines";
import { withPastHtml } from "./withPastHtml";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import { withShortcuts } from "./withShortcuts";
import { withForceLayout } from "./withForceLayout";
import { withNormalizing } from "./withNormalizing";
import { withTables } from "./withTables";

export const createSlatepad = () => {
  const editor = createEditor();
  editor.use = (plugin) => {
    return plugin(editor);
  };
  editor
    .use(withReact)
    .use(withShortcuts)
    .use(withNormalizing)
    .use(withTables)
    .use(withForceLayout)
    .use(withHistory)
    .use(withInlines)
    .use(withImages)
    .use(withPastHtml);
  return editor;
};
