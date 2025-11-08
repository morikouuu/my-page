export type Post = {
	slug: string; // ファイル名から生成される一意の識別子（例: "post1"）
	title: string; // 記事のタイトル
	date: string; // 公開日
	description?: string; // 記事の説明文（オプション）
	thumbnail?: string; // サムネイル画像のパス（オプション）
};

export type BlogFrontMatter = {
	title?: string;
	date?: string;
	description?: string;
	thumbnail?: string;
	eyecatch?: string;
};
