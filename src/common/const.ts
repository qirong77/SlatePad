import { Descendant } from "slate";

export const initialValue: Descendant[] = [
  {
    type: "bulleted-list",
    children: [
      {
        type: "list-item",
        children: [
          { type: "paragraph", children: [{ text: "`.slatepad-checklist `" }] },
        ],
      },
      {
        type: "list-item",
        children: [
          { type: "paragraph", children: [{ text: "" }] },
        ],
      },
    ],
  },
];
export const blankInitial: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
