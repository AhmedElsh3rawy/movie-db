import { useEffect } from "react";
import { IMAGE_PATH } from "../config";
import Card from "./Card";

function CardList({ data, media_type = "movie" }) {
	useEffect(() => {
		console.log("data:", data);
	}, [data]);

	return (
		<div className="flex flex-wrap gap-10">
			{data.map((item) => (
				<Card
					key={item.id}
					id={item.id}
					src={
						item.poster_path
							? `${IMAGE_PATH}${item.poster_path}`
							: "https://picsum.photos/200x400"
					}
					media_type={media_type}
					title={item.title}
					name={item.name}
					release_date={item.release_date}
					first_air_date={item.first_air_date}
				/>
			))}
		</div>
	);
}

export default CardList;
