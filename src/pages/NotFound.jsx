import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-dvh">
			<h1 className="text-sky-950 text-6xl font-bold py-5">
				404 Page Not Found
			</h1>
			<Link to={"/"}>
				<button
					className="bg-sky-500 hover:bg-sky-600 text-white rounded w-[200px] py-1 px-2 cursor-pointer"
					type="button"
				>
					Back to Home
				</button>
			</Link>
		</div>
	);
}

export default NotFound;
