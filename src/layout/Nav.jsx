import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="bg-sky-950 text-white p-3 flex justify-around">
			<div>
				<ul className="flex gap-5">
					<li className="">
						<Link to={"/"}>
							<img
								src="https://themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
								alt="The Movie Database"
								className="cursor-pointer"
								width={150}
								height={190}
							/>
						</Link>
					</li>
					<Link to={"/movies"}>
						<li className="cursor-pointer border border-sky-950 hover:border-gray-400 rounded px-1">
							Movies
						</li>
					</Link>

					<Link to={"/tv"}>
						<li className="cursor-pointer border border-sky-950 hover:border-gray-400 hover:rounded px-1">
							TV Shows
						</li>
					</Link>
				</ul>
			</div>
			<div className="flex gap-2">
				<Link to={"/login"}>
					<button
						className="text-sky-950 bg-white rounded py-1 px-2 font-bold cursor-pointer"
						type="button"
					>
						Login
					</button>
				</Link>
				<Link to={"/register"}>
					<button
						className="text-sky-950 bg-white rounded py-1 px-2 font-bold cursor-pointer"
						type="button"
					>
						Register
					</button>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
