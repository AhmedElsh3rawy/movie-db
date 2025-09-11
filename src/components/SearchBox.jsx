import { useEffect, useState } from "react";

function SearchBox({ onSearch }) {
	const [query, setQuery] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState(query);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query);
		}, 500);

		return () => clearTimeout(handler);
	}, [query]);

	useEffect(() => {
		if (debouncedQuery.trim() !== "") {
			onSearch(debouncedQuery);
		}
	}, [debouncedQuery, onSearch]);

	return (
		<div className="flex flex-col items-center justify-center gap-2 py-9 bg-sky-500 text-white m-0">
			<h1 className="text-5xl font-bold mb-4">
				<span className="block font-bold">Welcome.</span>
				Millions of movies, TV shows and people to discover. Explore now.
			</h1>
			<form className="border rounded-lg  border-gray-300">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search for a movie, tv show..."
					className="w-2xl p-2 rounded-lg focus:outline-none bg-white text-gray-700"
				/>
				<button
					type="submit"
					className="px-4 py-2 m-0.5 rounded-lg text-white font-semibold hover:text-black bg-[linear-gradient(to_right,rgb(30,213,169),rgb(1,180,228))]"
				>
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchBox;
