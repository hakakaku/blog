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
			textShadow: {
				sm: "0 0 2px var(--tw-shadow-color)",
				DEFAULT: "0 0 12px var(--tw-shadow-color)",
				lg: "0 0 20px var(--tw-shadow-color)",
			},
			animation: {
				"text-shadow-drop-center": "text-shadow-drop-center 0.6s ease   both",
				"text-shadow-drop-center-dark":
					"text-shadow-drop-center-dark 0.6s ease   both",
				"text-focus-in":
					"text-focus-in 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
			},
			keyframes: {
				"text-shadow-drop-center": {
					"0%": {
						"text-shadow": "0 0 0 transparent",
					},
					to: {
						"text-shadow": "0 0 20px var(--tw-shadow-color)",
					},
				},
				"text-shadow-drop-center-dark": {
					"0%": {
						"text-shadow": "0 0 0 transparent",
					},
					to: {
						"text-shadow": "0 0 20px var(--tw-shadow-color)",
					},
				},
				"text-focus-in": {
					"0%": {
						filter: "blur(12px)",
						opacity: "0",
					},
					to: {
						filter: "blur(0)",
						opacity: "1",
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
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
	],
};
