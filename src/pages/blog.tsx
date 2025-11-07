import { Link } from "react-router-dom";
import fm from "front-matter";
import type { Post } from "../type";

type BlogFrontMatter = {
	title?: string;
	date?: string;
	description?: string;
	thumbnail?: string;
	eyecatch?: string;
};

// ブログ投稿の型定義
// frontmatterから取得する情報の構造を定義

const Blog = () => {
	// Viteのimport.meta.globを使用して、postsディレクトリ内のすべての.mdファイルを読み込む
	// as: "raw" を指定すると、各Markdownファイルの内容が文字列として取得できる
	const posts = import.meta.glob("../posts/*.md", {
		eager: true,
		query: "?raw",
		import: "default",
	}) as Record<string, string>;

	// 読み込んだファイルをBlogPost型の配列に変換
	const postList: Post[] = Object.entries(posts).map(([path, content]) => {
		// ファイルパスからslugを抽出
		// 例: "../posts/post1.md" → "post1"
		const slug = path.split("/").pop()?.replace(".md", "") || "";

		// front-matterを使用してfrontmatter（YAML形式のメタデータ）を解析
		// file.defaultにはマークダウンファイルの全体（frontmatter + 本文）が含まれる
		const markdown = content.toString();
		const { attributes } = fm<BlogFrontMatter>(markdown);
		const {
			title = "",
			date = "",
			description = "",
			thumbnail,
			eyecatch,
		} = attributes;

		// frontmatterのデータとslugを組み合わせてBlogPostオブジェクトを作成
		return {
			slug,
			title,
			date,
			description,
			// thumbnailがなければeyecatch（旧形式）を試す、どちらもなければ空文字
			thumbnail: thumbnail || eyecatch || "",
		};
	});

	return (
		<div>
			<h1>Blog</h1>
			<ul>
				{/* postListの各投稿をカード形式で表示 */}
				{postList.map((post) => (
					<li key={post.slug}>
						<Link to={`/blog/${post.slug}`}>
							{/* サムネイル画像がある場合のみ表示 */}
							<div>
								<h2>{post.title}</h2>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blog;
