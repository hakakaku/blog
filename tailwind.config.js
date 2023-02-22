/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./posts/*.{md,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				serif: [
					"Georgia",
					'"Times New Roman"',
					"游明朝",
					"YuMincho",
					"Yu Mincho",
					'"ヒラギノ明朝 ProN W3"',
					'"Hiragino Mincho ProN"',
					"serif",
				],
			},
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(function ({ addBase }) {
			addBase({
				section: { margin: "1rem" },
				time: {
					fontSize: "0.75rem",
					color: "rgb(107 114 128)",
					paddingTop: "0.5rem",
					paddingBottom: "0.5rem",
				},
			});
		}),
	],
};
