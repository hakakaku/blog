import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticPaths() {
	const paths: string[] = allPosts.map((post) => post.url);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post: Post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug
	);
	return {
		props: {
			post,
		},
	};
}

const PostLayout = ({ post }: { post: Post }) => {
	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<article>
				<div className="mb-8">
					<h1>{post.title}</h1>
					<time dateTime={post.date}>
						{format(parseISO(post.date), "LLLL d, yyyy")}
					</time>
				</div>
				<div dangerouslySetInnerHTML={{ __html: post.body.html }} />
			</article>
		</>
	);
};

export default PostLayout;
