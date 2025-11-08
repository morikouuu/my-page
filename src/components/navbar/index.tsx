import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<li>
				<Link to="/">
					<h2>my page</h2>
				</Link>
			</li>
			<nav>
				<ul>
					<li>
						<Link to="/blog">Blog</Link>
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
		</div>
	);
};

export default Navbar;
