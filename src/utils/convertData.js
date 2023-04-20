const convertDate = (timestamp) => {
  const milliseconds = timestamp._seconds * 1000 + timestamp._nanoseconds / 1e6;
  const date = new Date(milliseconds);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const dateString = `${month}/${day}/${year}`;

  return dateString;
};

export { convertDate };
