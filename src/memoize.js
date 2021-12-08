export const memoize = (func) => {
	const cache = new Map();
	return (input) => {
		if (cache.has(input)) return cache.get(input);
		const value = func(input);
		cache.set(input, value);
		return value;
	};
};