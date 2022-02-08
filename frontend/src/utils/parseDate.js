export default function parseDate(date) {
  const dateParse = new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  return dateParse;
}
