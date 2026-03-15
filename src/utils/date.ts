export function getMonthLabel(
  months: string[],
  year: number,
  abbreviated = false,
): string {
  const fmt = (m: string) => (abbreviated ? m.slice(0, 3) : m);
  return months.length === 1
    ? `${fmt(months[0])} ${year}`
    : `${fmt(months[0])}–${fmt(months[months.length - 1])} ${year}`;
}
