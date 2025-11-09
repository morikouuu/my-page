import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { useMemo } from "react";
const Home = () => {
	const bubbles = [
		{ id: 1, label: "Blog", link: "/blog/post1" },
		{
			id: 2,
			label: "Products",
			link: "/products",
			image: "/images/products.png",
		},
		{ id: 3, label: "About", link: "/about", image: "/images/about.png" },
	];
	const snsBubbles = [
		{ id: 1, label: "Github", link: "github.com/morikouuu" },
		{
			id: 2,
			label: "X",
			link: "https://x.com/ilike_lamb?t=Lmu7FrE60JIyM9wmEbS1fA&s=09",
		},
	];

	const postList = usePosts();
	//毎回再レンダリングされるのを防ぐためにuseMemoを使う=>合ってるか聞く
	const latestPosts = useMemo(() => postList.slice(0, 3), [postList]);
	return (
		<div>
			<div className="bubble-area">
				<div className="bubbles">
					{bubbles.map((bubble) => (
						<Link to={bubble.link} key={bubble.id}>
							<span>{bubble.label}</span>
						</Link>
					))}
				</div>
				<div className="sns-bubbles">
					{snsBubbles.map((s) => (
						<Link to={s.link} key={s.id}>
							<span>{s.label}</span>
						</Link>
					))}
				</div>
				<div>
					<ul>
						{/* postListの各投稿をカード形式で表示 */}
						{latestPosts.map((post) => (
							<li key={post.slug}>
								<Link to={`/blog/${post.slug}`}>
									<div>
										<h2>{post.attributes.title || "無題"}</h2>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Home;
