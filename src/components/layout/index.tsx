import type { ReactNode } from "react";
import "./style.css";
import Navbar from "../navbar";
type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="layout">
			<div className="layout__sidebar">
				<Navbar />
			</div>
			<main className="layout__content">{children}</main>
		</div>
	);
};

export default Layout;
