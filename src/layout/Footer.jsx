import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="bg-sky-950 p-3 mt-5 grid gap-3 place-items-center md:grid-cols-4 sm:grid-cols-2 sm:place-items-start text-white">
			<div>
				<Link to={"/"}>
					<img
						className="cursor-pointer"
						src="https://themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
						alt="the movie db"
						width={130}
						height={94}
					/>
				</Link>
			</div>
			<div>
				<ul>
					<li className="font-bold">Movies</li>
					<li>Popular</li>
					<li>Now Playing</li>
					<li>Upcoming</li>
					<li>Top Rated</li>
				</ul>
			</div>

			<div>
				<ul>
					<li className="font-bold">TV Shows</li>
					<li>Popular</li>
					<li>Airing Today</li>
					<li>On TV</li>
					<li>Top Rated</li>
				</ul>
			</div>

			<div>
				<ul>
					<li className="font-bold">About</li>
					<li>Team</li>
					<li>The App</li>
					<li>Terms of Use</li>
					<li>Privacy Policy</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
