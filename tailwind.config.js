/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			colors: {
				i01: "#111111",
				i02: "#222222",
				i03: "#333333",
				i04: "#888888",
				iorange: "#FC6736",
				ipink: "#FC36D0",
				iblue: "#0D6EFD",
			},
			borderRadius: {
				iform: '100px'
			},
		},
	},
	plugins: [require("daisyui")],
};
