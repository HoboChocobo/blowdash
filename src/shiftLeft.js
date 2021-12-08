export const shiftLeft = (defaultValue) => (array) => {
	const newArray = [...array];
	newArray.shift();
	newArray[array.length - 1] = defaultValue;
	return newArray;
};