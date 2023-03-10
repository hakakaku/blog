import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import StyledLink from "components/StyledLink";

export async function getStaticProps() {
	const posts: Post[] = allPosts
		.filter((post) => !post.draft)
		.sort((a, b) => {
			return compareDesc(new Date(a.date), new Date(b.date));
		});
	return { props: { posts } };
}

function PostCard(post: Post) {
	return (
		<div>
			<h2 className="text-2xl">
				<StyledLink href={post.url}>{post.title}</StyledLink>
			</h2>
			<time dateTime={post.date} className="block">
				{format(parseISO(post.date), "LLLL d, yyyy")}
			</time>
			{/* <div
				className="text-sm"
				dangerouslySetInnerHTML={{ __html: post.body.html }}
			/> */}
		</div>
	);
}

export default function PostPage({ posts }: { posts: Post[] }) {
	return (
		<section>
			<h1 className="py-12 text-4xl leading-loose">Blog</h1>
			<div className="space-y-6">
				{posts.map((post, idx) => (
					<PostCard key={idx} {...post} />
				))}
			</div>
		</section>
	);
}
