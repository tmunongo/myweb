export const formatDate = (timestamp) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(timestamp).toLocaleDateString(undefined, options);
  return date;
};
