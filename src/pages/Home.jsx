import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { API_KEY, BASE_URL } from "../config";

function Home() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const url = `${BASE_URL}/trending/all/day?page=${page}&api_key=${API_KEY}`;

			try {
				const res = await axios.get(url);

				setData((prev) => [...prev, ...res.data.results]);
				console.log("Page:", page, res.data);
			} catch (err) {
				console.error("Error fetching data:", err);
			}
		})();
	}, [page]);

	return (
		<main className="flex flex-col">
			<CardList data={data} />
			<div className="flex items-center justify-center fixed bottom-40 w-dvw">
				{/* <button */}
				{/* 	className="bg-sky-500 hover:bg-sky-600 text-white rounded w-[200px] py-1 px-2 cursor-pointer" */}
				{/* 	type="button" */}
				{/* 	onClick={() => setPage((prev) => prev + 1)} */}
				{/* > */}
				{/* 	Load More... */}
				{/* </button> */}
			</div>
		</main>
	);
}

export default Home;
