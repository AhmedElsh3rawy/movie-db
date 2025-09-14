import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WatchlistProvider } from "./context/WatchlistContext";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import TVShows from "./pages/TVShows";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/tv", element: <TVShows /> },
			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

function App() {
	return (
		<>
			<WatchlistProvider>
				<RouterProvider router={router} />;
			</WatchlistProvider>
		</>
	);
}

export default App;
