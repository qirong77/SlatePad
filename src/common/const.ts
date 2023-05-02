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
    type: 'paragraph',
    children: [{ text: 'p1' }]
  }
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
  //               text: 'li1'
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       type: 'list-item',
  //       children: [
  //         {
  //           type: 'paragraph',
  //           children: [
  //             {
  //               text: 'li2'
  //             }
  //           ]
  //         },
  //         {
  //           type: 'paragraph',
  //           children: [
  //             {
  //               text: 'li3'
  //             }
  //           ]
  //         },
  //         {
  //           type: 'code-block',
  //           language:'',
  //           children: [
  //             {
  //               type: 'code-line',
  //               children: [
  //                 {
  //                   text: 'html'
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: '\n'
  // }
]
