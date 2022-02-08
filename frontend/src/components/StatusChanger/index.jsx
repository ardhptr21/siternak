import parseStatus from '../../utils/parseStatus';
import { useDispatch, useSelector } from 'react-redux';
import { updateTransactionStatus } from '../../actions/transaction/transactionActions';
import axiosInstance from '../../axiosInstance';

const StatusChanger = ({ status, buyer_id, shop_id, transaction_id }) => {
  const user = useSelector((state) => state.user);
  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const textShowNormal = {
    0: 'Pesanan ini belum dibayar',
    1: 'Pesanan sedang direview oleh admin',
    2: 'Pesanan anda selesai direview oleh admin',
    3: 'Pesanan sedang dalam proses pengiriman',
    4: 'Pesanan telah selesai, terima kasih',
    5: 'Pesanan ini telah dibatalkan',
  };

  const handleUpdateStatusByAdmin = async () => {
    const isConfirm = window.confirm('Apakah anda yakin ingin mengubah status pesanan ini?');
    if (!isConfirm) return false;

    try {
      await axiosInstance.patch(
        `/transaction/${transaction_id}/review-done`,
        {},
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      dispatch(updateTransactionStatus(transaction_id, 2));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateStatusAction = async (status_update) => {
    const isConfirm = window.confirm('Apakah anda yakin ingin mengubah status pesanan ini?');
    if (!isConfirm) return false;

    try {
      await axiosInstance.patch(
        `/transaction/${transaction_id}`,
        { status: status_update },
        {
          headers: {
            Authorization: user.token,
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(updateTransactionStatus(transaction_id, status_update));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-5 border rounded-md shadow">
      <div>
        <div className="flex justify-between items-center mb-5">
          <h4 className="font-bold text-lg text-textDefault">Status Barang</h4>
          <div>{parseStatus(status)}</div>
        </div>
        <p>{textShowNormal[status]}</p>
      </div>

      {user.role === 2 && status === 1 && (
        <div className="mt-5 space-y-3">
          <h4 className="font-bold text-lg text-textDefault">Aksi</h4>
          <p>
            Anda sebagai admin, silahkan konfirmasi apakah pesanan ini sudah sesuai untuk diproses ke tahap selanjutnya
          </p>
          <div className="text-right">
            <button
              className="bg-success px-4 py-2 rounded hover:bg-green-800 text-white"
              onClick={handleUpdateStatusByAdmin}
            >
              Ya, Konfirmasi
            </button>
          </div>
        </div>
      )}

      {shop._id === shop_id && status === 2 && (
        <div className="mt-5 space-y-3">
          <h4 className="font-bold text-lg text-textDefault">Aksi</h4>
          <p>Anda sebagai pemilik toko, silahkan konfirmasi jika pesanan sudah siap dikirim</p>
          <div className="text-right">
            <button
              className="bg-success px-4 py-2 rounded hover:bg-green-800 text-white"
              onClick={() => handleUpdateStatusAction(3)}
            >
              Ya, Konfirmasi
            </button>
          </div>
        </div>
      )}

      {user._id === buyer_id && status === 3 && (
        <div className="mt-5 space-y-3">
          <h4 className="font-bold text-lg text-textDefault">Aksi</h4>
          <p>Anda sebagai pembeli, silahkan konfirmasi jika barang sudah diterima</p>
          <div className="text-right">
            <button
              className="bg-success px-4 py-2 rounded hover:bg-green-800 text-white"
              onClick={() => handleUpdateStatusAction(4)}
            >
              Ya, Konfirmasi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusChanger;
