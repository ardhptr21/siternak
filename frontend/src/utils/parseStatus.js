export default function parseStatus(status) {
  switch (status) {
    case 0:
      return <span className="inline-block p-3 text-sm text-white bg-yellow-300 rounded-full">BELUM DIBAYAR</span>;
    case 1:
      return <span className="inline-block p-3 text-sm text-white bg-purple-400 rounded-full">DIREVIEW</span>;
    case 2:
      return <span className="inline-block p-3 text-sm text-white rounded-full bg-lightBlue">DIKIRIM</span>;
    case 3:
      return <span className="inline-block p-3 text-sm text-white bg-green-200 rounded-full">SELESAI</span>;
    case 4:
      return <span className="inline-block p-3 text-sm text-white bg-red-200 rounded-full">DIBATALKAN</span>;
    default:
      return '';
  }
}
