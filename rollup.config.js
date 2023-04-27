import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'
export default [
  {
    input: 'src/slate/SlatePad.tsx',
    output: [
      {
        file: 'package/dist/index.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'package/dist/index.d.ts'
      }
    ],
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      })
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'src/slate/SlatePad.tsx',
    output: [
      {
        file: 'package/dist/index.d.ts'
      }
    ],
    plugins: [
      dts(),
    ]
  }
]
