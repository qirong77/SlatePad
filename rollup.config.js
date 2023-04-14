import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
export default {
  input: 'src/App.tsx',
  output: {
    file: 'package/index.js',
    format: 'es',
    sourcemap: true
  },
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
}
