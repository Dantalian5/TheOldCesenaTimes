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
			black: '#000000',
			red: '#d0021b',
			gray: {
				100: '#f7f7f7',
				200: '#e2e2e2',
			},
			blue: '#326890',
		},
		extend: {
			fontSize: {
				10: '0.625rem',
				24: '1.5rem',
			},
		},
	},
	plugins: [],
};
