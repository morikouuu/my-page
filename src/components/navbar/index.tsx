import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<h2>my page</h2>
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
	);
};

export default Navbar;
