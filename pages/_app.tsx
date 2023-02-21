import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Siderbar from "components/Sidebar";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Haku</title>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
			</Head>
			<ThemeProvider attribute="class">
				<div className="text-justify font-serif mx-auto p-4 justify-center flex flex-col gap-y-4 sm:gap-x-4 sm:flex-row">
					<Siderbar />
					<main className="flex-grow sm:max-w-lg">
						<Component {...pageProps} />
					</main>
				</div>
			</ThemeProvider>
			;
		</>
	);
}
