import { Descendant } from "slate";

export const initialValue: Descendant[] = [{
  "type": "bulleted-list",
  "children": [
      {
          "type": "list-item",
          "children": [
              {
                  "type": "paragraph",
                  "children": [
                      {
                          "text": "11111"
                      }
                  ]
              }
          ]
      },
      {
          "type": "list-item",
          "children": [
              {
                  "type": "bulleted-list",
                  "children": [
                      {
                          "type": "list-item",
                          "children": [
                              {
                                  "type": "paragraph",
                                  "children": [
                                      {
                                          "text": "2222"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "type": "list-item",
                          "children": [
                              {
                                  "type": "paragraph",
                                  "children": [
                                      {
                                          "text": "3"
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "type": "list-item",
                          "children": [
                              {
                                  "type": "paragraph",
                                  "children": [
                                      {
                                          "text": "4444"
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
}]
export const blankInitial: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
