import fm from "front-matter";
import type { BlogFrontMatter } from "../type";
import type { PostList } from "../type";

export const usePosts = (): PostList[] => {
	const posts = import.meta.glob("../posts/*.md", {
		eager: true,
		query: "?raw",
		import: "default",
	}) as Record<string, string>;

	// 読み込んだファイルをBlogPost型の配列に変換
	const postList: PostList[] = Object.entries(posts).map(([path, content]) => {
		const slug = path.split("/").pop()?.replace(".md", "") || "";
		const { attributes } = fm<BlogFrontMatter>(content);
		// frontmatterのデータとslugを組み合わせてBlogPostオブジェクトを作成
		return {
			slug,
			attributes,
		};
	});
	return postList;
};
