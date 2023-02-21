/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				section: { margin: "1rem" },
				article: { margin: "1rem" },
				h1: {
					lineHeight: "1.5",
					fontSize: "2.25rem",
					paddingTop: "4rem",
					paddingBottom: "4rem",
				},
				h2: { fontSize: "1.5rem" },
				h3: { fontSize: "1.125rem" },
				time: {
					fontSize: "0.75rem",
					color: "rgb(107 114 128)",
					paddingTop: "0.5rem",
					paddingBottom: "0.5rem",
				},
				p: { lineHeight: "2.25", paddingTop: "1rem", paddingBottom: "1rem" },
			});
		}),
	],
};
