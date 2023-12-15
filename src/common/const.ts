import { Descendant } from "slate";
import { SlatePadElementEnum } from "../slatepad/types";

export const initialValue: Descendant[] = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ];
export const blankInitial: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
