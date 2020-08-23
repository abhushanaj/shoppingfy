export const displayDate = (date) => {
  const cartDate = new Date(date);
  const dateString = cartDate.toDateString();
  return `${dateString}`;
};
