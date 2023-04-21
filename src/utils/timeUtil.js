const convertDate = (timestamp) => {
  const milliseconds = timestamp._seconds * 1000 + timestamp._nanoseconds / 1e6;
  const date = new Date(milliseconds);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const dateString = `${month}/${day}/${year}`;

  return dateString;
};

const convertDateTimestamp = (dateString) => {
  const dateObject = new Date(Date.parse(dateString) + 86400000);
  const timestampMilliseconds = dateObject.getTime();
  const _seconds = Math.floor(timestampMilliseconds / 1000);
  const _nanoseconds = (timestampMilliseconds - _seconds * 1000) * 1000000;

  const timestampObject = { _seconds, _nanoseconds };
  return timestampObject;
};

export { convertDate, convertDateTimestamp };
