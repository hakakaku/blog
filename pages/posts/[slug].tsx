import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";
import { MDXContent } from "components/MDX";

export async function getStaticPaths() {
	const paths: string[] = allPosts.map((post) => post.url);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post: unknown = allPosts.find(
		(post) => post._raw.flattenedPath === `posts/${params.slug}`
	);
	if (post) {
		return {
			props: {
				post,
			},
		};
	}
	throw new Error("cannot find post.");
}

const PostLayout = ({ post }: { post: Post }) => {
	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<section className="space-y-8">
				<div>
					<h1 className="py-12 text-4xl leading-loose">{post.title}</h1>
					<time dateTime={post.date}>
						{format(parseISO(post.date), "LLLL d, yyyy")}
					</time>
				</div>
				<div className="prose prose-quoteless prose-gray dark:prose-invert">
					<MDXContent code={post.body.code} />
				</div>
			</section>
		</>
	);
};

export default PostLayout;
