const firstLetterCapital = (string) => {
  return string.replace(/^\w/, (c) => c.toUpperCase());
};
const getMs = (time) => {
  return time.split(":").reduce((acc, time) => 60 * acc + +time);
};
module.exports = {
  firstLetterCapital,
  getMs,
};
