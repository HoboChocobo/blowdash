export const pipe = 
	(...functions) => 
		(initialValue) => 
			functions.reduce((input, func) => func(input), initialValue);