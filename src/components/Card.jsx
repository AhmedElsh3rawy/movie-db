import { Link } from "react-router-dom";
import { format } from "../utils/formattedDate";

function Card({
	id,
	src,
	title,
	name,
	release_date,
	first_air_date,
	media_type,
}) {
	return (
		<Link to={`/${media_type}/${id}`}>
			<div className="flex flex-col bg-white hover:scale-105 transition-transform duration-200">
				<div className="h-[250px] overflow-hidden w-full">
					<img
						src={src}
						alt={title || name}
						className="w-full h-full object-cover rounded-md"
					/>
				</div>

				<div className="p-2 flex flex-col">
					<p className="font-bold text-sm text-wrap text-gray-800 truncate w-[150px]">
						{title || name}
					</p>
					<p className="text-[12px] text-gray-500">
						{format(release_date || first_air_date)}
					</p>
				</div>
			</div>
		</Link>
	);
}

export default Card;
