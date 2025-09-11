import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Nav />
			<main className="flex-1 px-5 py-5">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
