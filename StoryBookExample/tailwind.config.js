/** @type {import('tailwindcss').Config} */
module.exports = {
	jit: true,
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		fontFamily: {},
		fontSize: {
			xs: [
				'calc(var(--font-size)*5)',
				{
					lineHeight: '160%',
					fontWeight: '400',
				},
			],
			'xs-bold': [
				'calc(var(--font-size)*5)',
				{
					lineHeight: '160%',
					fontWeight: '500',
				},
			],
			sm: [
				'calc(var(--font-size)*6)',
				{
					lineHeight: '133%',
					fontWeight: '400',
				},
			],
			base: [
				'calc(var(--font-size)*7)',
				{
					lineHeight: '143%',
					fontWeight: '400',
				},
			],
			'base-bold': [
				'calc(var(--font-size)*7)',
				{
					lineHeight: '143%',
					fontWeight: '500',
				},
			],
			lg: [
				'var(--font-size-lg)',
				{
					lineHeight: '150%',
					fontWeight: '500',
				},
			],
			xl: [
				'var(--font-size-xl)',
				{
					lineHeight: '133%',
					fontWeight: '500',
				},
			],
			'2xl': [
				'var(--font-size-2xl)',
				{
					lineHeight: '140%',
					fontWeight: '400',
				},
			],
			'3xl': [
				'var(--font-size-3xl)',
				{
					lineHeight: '123%',
					fontWeight: '400',
				},
			],
			'4xl': [
				'var(--font-size-4xl)',
				{
					lineHeight: '114%',
					fontWeight: '500',
				},
			],
			'5xl': [
				'var(--font-size-5xl)',
				{
					lineHeight: '104%',
					fontWeight: '500',
				},
			],
		},
		extend: {
			colors: {
				blue: {
					50: '#DBE3F3',
					100: '#B6C7E8',
					200: '#8FACDE',
					300: '#6392D5',
					400: '#2279CE',
					500: '#0060A9',
					600: '#00497F',
					700: '#003258',
					800: '#001D33',
					900: '#001220',
				},
				gray: {
					50: '#E2E2E2',
					100: '#C6C6C6',
					200: '#ABABAB',
					300: '#919191',
					400: '#777777',
					500: '#5E5E5E',
					600: '#474747',
					700: '#303030',
					800: '#1C1C1C',
					900: '#111111',
				},
				red: {
					50: '#FADBDB',
					100: '#F6B6B6',
					200: '#F38F8F',
					300: '#F06161',
					400: '#D83D3D',
					500: '#AC3131',
					600: '#822525',
					700: '#5A1919',
					800: '#340E0E',
					900: '#210909',
				},
				yellow: {
					50: '#F7E27E',
					100: '#E0C609',
					200: '#C1AB07',
					300: '#A39006',
					400: '#867705',
					500: '#6A5E04',
					600: '#504703',
					700: '#363002',
					800: '#1F1B01',
					900: '#131100',
				},
				green: {
					50: '#D5E6DC',
					100: '#A9CFB8',
					200: '#77B893',
					300: '#2FA36B',
					400: '#278658',
					500: '#1F6A46',
					600: '#175034',
					700: '#103724',
					800: '#091F14',
					900: '#05130C',
				},
				voilet: {
					50: '#EAE5E9',
					100: '#D3C9D1',
					200: '#B9A9B6',
					300: '#9B8096',
					400: '#76426E',
					500: '#6A3B62',
					600: '#5B3355',
					700: '#4A2945',
					800: '#341D31',
					900: '#251422',
				},
				orange: {
					50: '#FCDBD3',
					100: '#FAB6A4',
					200: '#F88E6B',
					300: '#F16507',
					400: '#C65306',
					500: '#9E4205',
					600: '#773203',
					700: '#522202',
					800: '#2F1401',
					900: '#1D0C00',
				},
			},
			minWidth: {
				8: '8rem',
			},
			borderRadius: {
				lgg: '0.5rem',
			},
			spacing: {
				px: '1px',
				1: 'var(--val)',
				2: 'calc(var(--val) * 2)',
				3: 'calc(var(--val) * 3)',
				4: 'calc(var(--val) * 4)',
				5: 'calc(var(--val) * 5)',
				6: 'calc(var(--val) * 6)',
				7: 'calc(var(--val) * 7)',
				8: 'calc(var(--val) * 8)',
				9: 'calc(var(--val) * 9)',
				10: 'calc(var(--val) * 10)',
				11: 'calc(var(--val) * 11)',
				12: 'calc(var(--val) * 12)',
				14: 'calc(var(--val) * 14)',
				16: 'calc(var(--val) * 16)',
				20: 'calc(var(--val) * 20)',
				24: 'calc(var(--val) * 24)',
				28: 'calc(var(--val) * 28)',
				32: 'calc(var(--val) * 32)',
				36: 'calc(var(--val) * 36)',
				40: 'calc(var(--val) * 40)',
				44: 'calc(var(--val) * 44)',
				48: 'calc(var(--val) * 48)',
				52: 'calc(var(--val) * 52)',
				56: 'calc(var(--val) * 56)',
				60: 'calc(var(--val) * 60)',
				64: 'calc(var(--val) * 64)',
				72: 'calc(var(--val) * 72)',
				80: 'calc(var(--val) * 80)',
				96: 'calc(var(--val) * 96)',
				0.5: 'calc(var(--val) * 0.5)',
				1.5: 'calc(var(--val) * 1.5)',
				2.5: 'calc(var(--val) * 2.5)',
				3.5: 'calc(var(--val) * 3.5)',
			},
			transitionProperty: {
				width: 'width',
			},
		},
		animation: {
			inc: 'increase 2s infinite',
			dec: 'decrease 2s 0.5s infinite',
		},
		screens: {
			tablet: [{ raw: '(max-width: 600px),(max-height: 400px)' }],
		},
		keyframes: {
			increase: {
				'0%': {
					left: '-5%',
					width: '5%',
				},
				'100%': {
					left: '130%',
					width: '100%',
				},
			},
			decrease: {
				from: {
					left: '-80%',
					width: '80%',
				},
				to: {
					left: '110%',
					width: '10%',
				},
			},
		},
	},
	plugins: [],
}
