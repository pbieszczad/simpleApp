export const createConstants = (...constants) => {
	return constants.reduce((acc, constant) => {
		acc[constant] = constant;
		return acc;
	}, {});
};