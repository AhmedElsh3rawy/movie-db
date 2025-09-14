import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { API_KEY, BASE_URL } from "../config";

function Home() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const url = `${BASE_URL}/movie/now_playing?page=${page}&api_key=${API_KEY}`;
			try {
				setLoading(true);
				const res = await axios.get(url);

				setData((prev) => {
					const merged = [...prev, ...res.data.results];
					return [...new Map(merged.map((item) => [item.id, item])).values()];
				});
			} catch (err) {
				console.error("Error fetching data:", err);
			} finally {
				setLoading(false);
			}
		})();
	}, [page]);

	return (
		<main className="flex flex-col items-center">
			{!loading && (
				<>
					<CardList data={data} />

					<button
						className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded w-[200px] py-1 px-5 cursor-pointer mt-2"
						type="button"
						onClick={() => setPage((prev) => prev + 1)}
					>
						Load More
					</button>
				</>
			)}
		</main>
	);
}

export default Home;
