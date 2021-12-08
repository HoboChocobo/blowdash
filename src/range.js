export const range = (input) => {
	let start = 0, end = 0;
	
	if (typeof input == "object") {
		start = input.start || 0;
		end = input.end || 0;
	} else {
		end = input;
	}

	return Array(end - start).fill().map((_, i) => i + start);
};