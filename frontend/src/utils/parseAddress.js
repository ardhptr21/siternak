export default function parseAddress(address) {
  try {
    const parsing = Object.values(address).join(', ');
    return parsing;
  } catch (err) {
    console.log(err);
  }
}
