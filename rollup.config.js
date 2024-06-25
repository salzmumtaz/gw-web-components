import { dts } from 'rollup-plugin-dts'
import merge from 'rollup-plugin-merge'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import polyfillNode from 'rollup-plugin-polyfill-node'
// To handle css files
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    onwarn: (warning, handler) => {
      // Skip certain warnings

      // should intercept ... but doesn't in some rollup versions
      if (
        warning.code === 'THIS_IS_UNDEFINED' ||
        warning.code === 'MODULE_LEVEL_DIRECTIVE'
      ) {
        return
      }

      // console.warn everything else
      handler(warning)
    },
    plugins: [
      peerDepsExternal(),
      nodeResolve({ preferBuiltins: false }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      json(),
      postcss(),

      terser({ compress: { evaluate: false } }),
      image(),
      svgr(),
      polyfillNode(),
      merge({
        input: [
          '../common/src/locales/en.json',
          '../organisms/src/locales/en.json',
        ],
        output: 'dist/locales/en/main.json',
      }),
      merge({
        input: [
          '../common/src/locales/fr.json',
          '../organisms/src/locales/fr.json',
        ],
        output: 'dist/locales/fr/main.json',
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  },
]
