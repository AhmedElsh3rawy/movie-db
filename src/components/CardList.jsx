import { IMAGE_PATH } from "../config";
import Card from "./Card";

function CardList({ data }) {
	return (
		<div className="flex flex-wrap gap-5">
			{data.map((item) => (
				<Card
					key={item.id}
					src={
						item.poster_path
							? `${IMAGE_PATH}${item.backdrop_path}`
							: "https://picsum.photos/200x400"
					}
					title={item.media_type === "movie" ? item.title : undefined}
					name={item.media_type === "tv" ? item.name : undefined}
					release_date={
						item.media_type === "movie" ? item.release_date : undefined
					}
					first_air_date={
						item.media_type === "tv" ? item.first_air_date : undefined
					}
				/>
			))}
		</div>
	);
}

export default CardList;
