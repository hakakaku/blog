import { useEffect, useState } from "react";
import StyledLink from "./StyledLink";
import ThemeToggle from "./ThemeToggle";

function Siderbar() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<nav className="m-4 w-auto flex flex-row gap-x-4 justify-between sm:w-24 sm:justify-start sm:flex-col sm:gap-y-16">
			<StyledLink href="/" className="text-6xl p-2 select-none">
				ハ<br />ク
			</StyledLink>
			<ul className="leading-loose flex flex-row justify-end flex-wrap gap-x-3 sm:flex-col sm:gap-y-3">
				<li>
					<StyledLink href="/">blog</StyledLink>
				</li>
				<li>
					<StyledLink href="/guestbook">guestbook</StyledLink>
				</li>
				<li>
					<StyledLink href="/about">about</StyledLink>
				</li>
				<li>
					<ThemeToggle />
				</li>
			</ul>
		</nav>
	);
}

export default Siderbar;
