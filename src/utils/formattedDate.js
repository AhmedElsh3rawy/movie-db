export const format = (dateStr) => {
	const date = new Date(dateStr);

	const formatted = date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	return formatted;
};
