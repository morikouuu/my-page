import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Product from "./pages/product";
import Profile from "./pages/profile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/product" element={<Product />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<h1>Not Found Page</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
