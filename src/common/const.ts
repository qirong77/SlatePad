import { Descendant } from 'slate'
// decoration-bug
// export const initialValue: Descendant[] = [
//   {
//     type: 'code-block',
//     language: 'js',
//     children: [
//       {
//         type: 'code-line',
//         children: [
//           {
//             text: 'const x = 10'
//           }
//         ]
//       },
//       {
//         type: 'code-line',
//         children: [
//           {
//             text: 'const x = 10'
//           }
//         ]
//       },
//       {
//         type: 'code-line',
//         children: [
//           {
//             text: 'const x = 10'
//           }
//         ]
//       }
//     ]
//   }
// ]

export const initialValue: Descendant[] = [
  {
    type: 'fix-select',
    children: [
      {
        text: ''
      }
    ]
  },
  // {
  //   type: 'paragraph',
  //   children: [
  //     {
  //       text: 'p1'
  //     }
  //   ]
  // },
  // {
  //   type: 'number-list',
  //   children: [
  //     {
  //       type: 'list-item',
  //       children: [
  //         {
  //           text: '111'
  //         }
  //       ]
  //     },
  //     {
  //       type: 'list-item',
  //       children: [
  //         {
  //           text: '1111'
  //         }
  //       ]
  //     },
  //     {
  //       type: 'number-list',
  //       children: [
  //         {
  //           type: 'list-item',
  //           children: [
  //             {
  //               text: '222'
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    type: 'paragraph',
    children: [
      {
        text: ''
      }
    ]
  },
  // {
  //   type: 'number-list',
  //   children: [
  //     {
  //       type: 'list-item',
  //       children: [
  //         {
  //           type: 'paragraph',
  //           children: [
  //             {
  //               text: 'p1'
  //             }
  //           ]
  //         },
  //         {
  //           type: 'paragraph',
  //           children: [
  //             {
  //               text: ''
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
]
