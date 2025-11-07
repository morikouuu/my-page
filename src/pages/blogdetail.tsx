import { useParams, Link } from "react-router-dom";
import fm from "front-matter";
import { marked } from "marked";

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
	const { slug } = useParams<{ slug: string }>();

	// すべてのマークダウンファイルを読み込む
	// blog.tsxと同じ方法でファイルを読み込む（文字列として取得）
	const posts = import.meta.glob("../posts/*.md", {
		eager: true,
		query: "?raw",
		import: "default",
	}) as Record<string, string>;

	// slugに一致するファイルを探す
	// Object.entriesで[パス, ファイル内容]の配列に変換し、
	// findメソッドでslugと一致するファイルを検索
	const postEntry = Object.entries(posts).find(
		([path]) => path.split("/").pop()?.replace(".md", "") === slug
	);

	// 該当するファイルが見つからない場合のエラーハンドリング
	if (!postEntry) {
		return (
			<div>
				<h1>記事が見つかりません</h1>
				<Link to="/blog">ブログ一覧に戻る</Link>
			</div>
		);
	}

	// postEntryは[パス, ファイル内容]のタプル
	// 配列の分割代入でファイル内容のみを取得（パスは不要なので_で無視）
	const [, content] = postEntry;

	// front-matterでfrontmatterと本文を分離
	// attributes: frontmatterの内容（title, date, description, thumbnailなど）
	// body: frontmatterを除いたMarkdown本文
	const markdown = content.toString();
	const { attributes, body } = fm<BlogFrontMatter>(markdown);
	const {
		title = "",
		date = "",
		description = "",
		thumbnail,
		eyecatch,
	} = attributes;

	// markedライブラリでMarkdownをHTMLに変換
	const htmlContent = marked(body);

	return (
		<div>
			{/* ブログ一覧に戻るリンク */}
			<Link to="/blog">← ブログ一覧に戻る</Link>

			{/* サムネイル画像がある場合のみ表示 */}
			{(thumbnail || eyecatch) && (
				<img src={thumbnail || eyecatch} alt={title} />
			)}

			<article>
				{/* frontmatterから取得したタイトルを表示 */}
				<h1>{title || "無題"}</h1>
				{/* 公開日を表示 */}
				<p>{date}</p>

				{/* descriptionがある場合のみ表示 */}
				{description && <p>{description}</p>}

				{/* MarkdownをHTMLに変換した内容を表示 */}
				{/* dangerouslySetInnerHTMLは、文字列のHTMLを直接DOMに挿入するReactの機能 */}
				{/* markedで変換したHTMLを安全に表示するために使用 */}
				<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
			</article>
		</div>
	);
};

export default BlogDetail;
