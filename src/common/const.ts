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
  { type: 'paragraph', children: [{ text: '' }] }
]
