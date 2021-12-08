export const verticalSlice = ({ array, position }) => array.reduce((finalSlice, currentArray, i) => {
	finalSlice[i] = currentArray[position];
	return finalSlice;
}, []);