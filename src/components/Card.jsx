import { format } from "../utils/formattedDate";

function Card({ src, title, name, release_date, first_air_date }) {
	return (
		<div className="flex flex-col text-center bg-white rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
			<div className="h-[250px] overflow-hidden w-full">
				<img
					src={src}
					alt={title || name}
					className="w-full h-full object-cover rounded-t-2xl"
				/>
			</div>

			<div className="p-4 flex flex-col text-center">
				<p className="font-bold text-wrap text-gray-800 truncate w-[150px]">
					{title || name}
				</p>
				<p className="text-sm text-gray-500">
					{format(release_date || first_air_date)}
				</p>
			</div>
		</div>
	);
}

export default Card;
