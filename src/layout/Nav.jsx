import { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";

function Nav() {
	const { watchlist } = useContext(WatchlistContext);
	return (
		<nav className="bg-sky-950 text-white p-3 flex justify-between">
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
					<Link to={"/"}>
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
			<div className="border-2 rounded-2xl px-2 font-bold cursor-pointer hover:border-gray-400">
				Whatchlist{" "}
				<span className="rounded-full bg-red-500 px-1">{watchlist.length}</span>
			</div>
		</nav>
	);
}

export default Nav;
