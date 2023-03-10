import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `posts/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			description: "The title of the post",
			required: true,
		},
		date: {
			type: "date",
			description: "The date of the post",
			required: true,
		},
		draft: {
			type: "boolean",
			description: "Whether the post is a draft or not",
			required: true,
		},
		tags: {
			type: "list",
			of: { type: "string" },
			description: "The tags array of the post",
			required: false,
		},
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (doc) => `/${doc._raw.flattenedPath}`,
		},
	},
}));

const About = defineDocumentType(() => ({
	name: "About",
	filePathPattern: `**/about.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			description: "The title of the post",
			required: true,
		},
		date: {
			type: "date",
			description: "The date of the post",
			required: true,
		},
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (doc) => `/${doc._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: "data",
	documentTypes: [Post, About],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: "one-dark-pro",
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push("line--highlighted");
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ["word--highlighted"];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["anchor"],
					},
				},
			],
		],
	},
});
