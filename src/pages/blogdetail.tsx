import { useParams, Link } from "react-router-dom";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { usePosts } from "../hooks/usePosts";

//TODO usePostに変更?
type BlogFrontMatter = {
	title?: string;
	date?: string;
	description?: string;
	thumbnail?: string;
	eyecatch?: string;
};

const BlogDetail = () => {
	// useParamsフックでURLパラメータからslugを取得
	// 例: /blog/post1 にアクセスした場合、slug = "post1"
	const slug = useParams<{ slug: string }>();

	const postList = usePosts();
	const postFile = postList.find((post) => slug === post.slug);
	// 該当するファイルが見つからない場合のエラーハンドリング
	if (!postFile) {
		return (
			<div>
				<h1>記事が見つかりません</h1>
				<Link to="/blog">ブログ一覧に戻る</Link>
			</div>
		);
	}

	const markdown = postFile.toString();
	const { attributes, body } = fm<BlogFrontMatter>(markdown);

	return (
		<div>
			{/* ブログ一覧に戻るリンク */}
			<Link to="/blog">← ブログ一覧に戻る</Link>

			{/* サムネイル画像がある場合のみ表示 */}
			{(attributes.thumbnail || attributes.eyecatch) && (
				<img
					src={attributes.thumbnail || attributes.eyecatch}
					alt={attributes.title}
				/>
			)}

			<article>
				{/* frontmatterから取得したタイトルを表示 */}
				<h1>{attributes.title || "無題"}</h1>
				{/* 公開日を表示 */}
				<p>{attributes.date}</p>

				{/* descriptionがある場合のみ表示 */}
				{attributes.description && <p>{attributes.description}</p>}

				{/* ReactMarkdownでMarkdownを安全に描画 */}
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
			</article>
		</div>
	);
};

export default BlogDetail;
