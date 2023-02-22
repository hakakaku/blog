import { MDXContent } from "components/MDX";
import { About, allAbouts } from "contentlayer/generated";
import Head from "next/head";

export async function getStaticProps() {
	const about: unknown = allAbouts.find(
		(about) => about._raw.flattenedPath === "about"
	);
	if (about) {
		return {
			props: {
				about,
			},
		};
	}
	throw new Error("cannot find post.");
}

export default function AboutPage({ about }: { about: About }) {
	return (
		<>
			<Head>
				<title>about | Haku</title>
			</Head>
			<section className="space-y-8">
				<div>
					<h1 className="py-12 text-4xl leading-loose">{about.title}</h1>
				</div>
				<div className="prose prose-quoteless prose-gray dark:prose-invert">
					<MDXContent code={about.body.code} />
				</div>
			</section>
		</>
	);
}
