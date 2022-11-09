const fmtNumberToDate = (n = 0) =>
  n?.toString()?.length === 1 ? `0${n}` : n?.toString();

export const getDateParsed = (d: Date) => ({
  yyyy: d.getUTCFullYear(),
  mm: fmtNumberToDate(d.getUTCMonth() + 1),
  dd: fmtNumberToDate(d.getUTCDate()),
  hours: fmtNumberToDate(d.getUTCHours()),
  minutes: fmtNumberToDate(d.getUTCMinutes()),
  seconds: fmtNumberToDate(d.getUTCSeconds()),
});

export const fmtDateToModel = (d: Date) => {
  const { yyyy, mm, dd, hours, minutes, seconds } = getDateParsed(d);
  return `${yyyy}-${mm}-${dd}T${hours}:${minutes}:${seconds}+00:00`;
};

export const fmtDateToUI = (d: Date) => {
  const { yyyy, mm, dd, hours, minutes, seconds } = getDateParsed(d);
  return `${dd}/${mm}/${yyyy} ${hours}:${minutes}:${seconds}`;
};
