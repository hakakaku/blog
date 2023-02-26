import Link from "next/link";
import { useRouter } from "next/router";

function StyledLink({ href, ...rest }) {
	const router = useRouter();

	const hoverStyle =
		"shadow-fuchsia-600 dark:shadow-fuchsia-400 hover:animate-text-shadow-drop-center dark:hover:animate-text-shadow-drop-center-dark";

	const activeStyle = href === router.pathname ? "text-shadow-lg" : "";

	return (
		<Link className={`${hoverStyle} ${activeStyle}`} href={href} {...rest} />
	);
}

export default StyledLink;
