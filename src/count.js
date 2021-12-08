export const count = (counts, current) => {
	counts[current] += 1;
	return counts;
};