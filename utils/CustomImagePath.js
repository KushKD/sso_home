export const getImagePath = (path) => {
	const prefix = "/sso"; // Replace with your desired prefix
	// const prefix = ''; // Replace with your desired prefix

	return `${prefix}${path}`;
};
