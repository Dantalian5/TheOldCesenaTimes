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
			white: '#ffffff',
			black: {
				100: '#121212',
				200: '#000000',
			},
			red: '#d0021b',
			gray: {
				100: '#f7f7f7',
				200: '#DFDFDF',
				300: '#727272',
				400: '#5a5a5a',
				500: '#666',
				600: '#333',
			},
			blue: '#326890',
		},
		extend: {
			fontSize: {
				10: '0.625rem',
				13: '0.8125rem',
				18: '1.125rem',
				20: '1.25rem',
				24: '1.5rem',
				28: '1.75rem',
				30: '1.875rem',
			},
		},
	},
	plugins: [],
};
