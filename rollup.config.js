import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import postcssImport from 'postcss-import'
import tailwindConfig from './tailwind.config.js'
import dts from 'rollup-plugin-dts'
export default {
  input: 'src/slate/SlatePad.tsx',
  output: [
    {
      file: 'package/dist/index.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'package/dist/index.d.ts',
      format: 'es'
    },
  ],
  plugins: [
    typescript(),
    commonjs(),
    nodeResolve(),
    dts(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    postcss({
      extract: true,
      extensions: ['.css'],
      plugins: [tailwindcss(tailwindConfig)]
    })
  ],
  external: ['react', 'react-dom']
}
