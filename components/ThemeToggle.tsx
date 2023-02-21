import { useTheme } from "next-themes";

function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<select
			className="w-16"
			value={theme}
			onChange={(e) => setTheme(e.target.value)}
		>
			<option value="dark">dark</option>
			<option value="light">light</option>
		</select>
	);
}
export default ThemeToggle;
