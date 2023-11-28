export default function stringToDate(str) {
  let date = new Date(str);
  let DD = date.getDate();
  let MM = date.getMonth();
  let YYYY = date.getFullYear();

  return `${Less10(DD)}.${Less10(MM)}.${YYYY}`;
}

function Less10(num) {
  return num < 10 ? '0' + num : num;
}
