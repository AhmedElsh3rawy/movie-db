import { createContext, useState } from "react";

const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
	const [watchlist, setWatchlist] = useState([]);

	const addToWatchlist = (item) => {
		setWatchlist((prev) => {
			if (prev.find((i) => i.id === item.id)) return prev;
			return [...prev, item];
		});
	};

	const removeFromWatchlist = (id) => {
		setWatchlist((prev) => prev.filter((i) => i.id !== id));
	};

	const isInWatchlist = (id) => {
		return watchlist.some((i) => i.id === id);
	};

	return (
		<WatchlistContext.Provider
			value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
		>
			{children}
		</WatchlistContext.Provider>
	);
}

export { WatchlistContext, WatchlistProvider };
