import Link from "next/link";
import { useEffect, useState } from "react";
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
			<Link href="/" className="text-6xl p-2 select-none">
				ハ<br />ク
			</Link>
			<ul className="leading-loose flex flex-row justify-end flex-wrap gap-x-3 sm:flex-col sm:gap-y-3">
				<li>
					<Link href="/">blog</Link>
				</li>
				<li>
					<Link href="guestbook">guestbook</Link>
				</li>
				<li>
					<Link href="/about">about</Link>
				</li>
				<li>
					<ThemeToggle />
				</li>
			</ul>
		</nav>
	);
}

export default Siderbar;
