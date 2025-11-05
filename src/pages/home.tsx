import { Link } from "react-router-dom";

const Home = () => {
	const bubbles = [
		{ id: 1, label: "Blog", link: "/blog", image: "/images/blog.png" },
		{
			id: 2,
			label: "Products",
			link: "/products",
			image: "/images/products.png",
		},
		{ id: 3, label: "About", link: "/about", image: "/images/about.png" },
	];
	const snsBubbles = [
		{ id: 1, label: "Github", link: "" },
		{ id: 2, label: "X", link: "" },
	];
	return (
		<div>
			<nav>
				<h2>my page</h2>
				<ul>
					<li>
						<Link to="/">Blog</Link>
					</li>
					<li>
						<Link to="/product">Product</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>

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
			</div>
		</div>
	);
};
export default Home;
