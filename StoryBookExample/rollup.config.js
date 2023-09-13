const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const typescript = require('@rollup/plugin-typescript')
const url = require('@rollup/plugin-url')
const svgr = require('@svgr/rollup')
const postcssUrl = require('postcss-url')
const babel = require('rollup-plugin-babel')
const dts = require('rollup-plugin-dts')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const svg = require('rollup-plugin-svg')
const { terser } = require('rollup-plugin-terser')

const packageJson = require('./package.json')

module.exports = [
	{
		input: 'src/components/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
			},
			{
				file: packageJson.module,
				format: 'esm',
			},
		],
		plugins: [
			resolve(),
			peerDepsExternal(),
			commonjs(),
			svg(),
			svgr(),
			url(),
			postcss({
				minimize: true,
				modules: {
					generateScopedName: '[hash:base64:5]',
				},
			}),
			postcssUrl({
				url: 'inline',
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
			babel({
				exclude: ['node_modules/**', 'src/stories/**', 'src/**/*.stories.tsx'],
			}),
		],
	},

	{
		input: 'src/components/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts.default()],
		external: [/\.scss$/],
	},
]
