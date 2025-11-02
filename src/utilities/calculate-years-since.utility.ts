export function calculateYearsSince(year: number, monthIndex: number, day: number) {
  const now = new Date();
  let years = now.getFullYear() - year;

  const anniversaryThisYear = new Date(now.getFullYear(), monthIndex, day);

  if (now < anniversaryThisYear) years -= 1;

  return years;
}