import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const Blog = () => {
	const postList = usePosts();

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
								{post.attributes.description && (
									<p>{post.attributes.description}</p>
								)}
								{post.attributes.date && <p>{post.attributes.date}</p>}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blog;
