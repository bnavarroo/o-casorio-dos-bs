const fmtNumberToDate = (n = 0) =>
  n?.toString()?.length === 1 ? `0${n}` : n?.toString();

export const getDateParsed = (d: Date) => ({
  yyyy: d.getFullYear(),
  mm: fmtNumberToDate(d.getMonth() + 1),
  dd: fmtNumberToDate(d.getDate()),
  hours: fmtNumberToDate(d.getHours()),
  minutes: fmtNumberToDate(d.getMinutes()),
  seconds: fmtNumberToDate(d.getSeconds()),
});

export const fmtDateToModel = (d: Date) => {
  const { yyyy, mm, dd, hours, minutes, seconds } = getDateParsed(d);
  return `${yyyy}-${mm}-${dd}T${hours}:${minutes}:${seconds}+00:00`;
};

export const fmtDateToUI = (d: Date) => {
  const { yyyy, mm, dd, hours, minutes, seconds } = getDateParsed(d);
  return `${dd}/${mm}/${yyyy} ${hours}:${minutes}:${seconds}`;
};
