/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'bg-hut': "url('/bg.png')"
			}
		},
		fontFamily: {
			righteous: ['Righteous', 'sans-serif']
		}
	},
	plugins: []
};
