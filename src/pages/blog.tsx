import { Link } from "react-router-dom";
import fm from "front-matter";
import type { BlogFrontMatter } from "../type";

// ブログ投稿の型定義
// frontmatterから取得する情報の構造を定義
type BlogPost = {
	slug: string;
	attributes: BlogFrontMatter;
};
const Blog = () => {
	// "../posts/*.md"と文字列で取得して、postsに格納
	const posts = import.meta.glob("../posts/*.md", {
		eager: true,
		query: "?raw",
		import: "default",
	}) as Record<string, string>;

	// 読み込んだファイルをBlogPost型の配列に変換
	const postList: BlogPost[] = Object.entries(posts).map(([path, content]) => {
		const slug = path.split("/").pop()?.replace(".md", "") || "";
		const { attributes } = fm<BlogFrontMatter>(content);
		// frontmatterのデータとslugを組み合わせてBlogPostオブジェクトを作成
		return {
			slug,
			attributes,
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
								<h2>{post.attributes.title || "無題"}</h2>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blog;
