export type Post = {
	slug: string;
	title: string;
	date: string;
	description?: string;
	thumbnail?: string;
};

export type BlogFrontMatter = {
	title?: string;
	date?: string;
	description?: string;
	thumbnail?: string;
	eyecatch?: string;
};

export type PostList = {
	slug: string;
	attributes: BlogFrontMatter;
};
