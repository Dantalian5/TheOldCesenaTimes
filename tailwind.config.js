/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			baskerville: ['Libre Baskerville', 'serif'],
			aguafina: ['Aguafina Script', 'cursive'],
			franklin: ['Libre Franklin', 'sans-serif'],
			pt: ['PT Serif', 'serif'],
		},
		colors: {
			white: '#000000',
			black: '#ffffff',
			red: '#d0021b',
			gray: {
				100: '#f7f7f7',
				200: '#e2e2e2',
			},
		},
		extend: {},
	},
	plugins: [],
};
