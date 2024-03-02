export const getImagePath = (path) => {
  const prefix = "/sso-integration"; // Replace with your desired prefix
  // const prefix = ''; // Replace with your desired prefix

  return `${prefix}${path}`;
};
