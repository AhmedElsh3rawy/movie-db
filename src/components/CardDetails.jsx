import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL, IMAGE_ORIGINAL_PATH, IMAGE_PATH } from "../config";

function CardDetails() {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const url = [
				`${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
				`${BASE_URL}/tv/${id}?api_key=${API_KEY}`,
			];
			try {
				setLoading(true);
				const res = await axios.get(url[0]);
				console.log("res:", res.data);
				setData((prev) => res.data);
			} catch {
				// TV Show
				try {
					setLoading(true);
					const res = await axios.get(url[1]);
					console.log("res:", res.data);
					setData((prev) => res.data);
				} catch (err) {
					console.error("Error fetching data:", err);
				}
			} finally {
				setLoading(false);
			}
		})();
	}, [id]);

	return (
		<>
			{!loading && (
				<div
					className="relative bg-cover bg-center h-[600px] w-full text-white flex items-center"
					style={{
						backgroundImage: `url(${IMAGE_ORIGINAL_PATH}${data.backdrop_path})`,
					}}
				>
					<div className="absolute inset-0 bg-black/50"></div>

					<div className="relative z-10 flex items-start gap-6 px-10">
						<div className="h-[300px] w-[200px] rounded overflow-hidden shadow-lg flex-shrink-0">
							<img
								className="w-full h-full object-cover"
								src={`${IMAGE_PATH}${data.poster_path}`}
								alt={data.title || data.name}
							/>
						</div>

						<div className="flex flex-col gap-4 max-w-2xl">
							<h1 className="font-bold text-4xl drop-shadow-lg">
								{data.title || data.name}
							</h1>
							<p className="text-xl font-semibold">Overview</p>
							<p className="leading-relaxed text-gray-200">{data.overview}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default CardDetails;
