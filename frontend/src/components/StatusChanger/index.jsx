import parseStatus from '../../utils/parseStatus';
import { useDispatch, useSelector } from 'react-redux';
import { updateTransactionStatus } from '../../actions/transaction/transactionActions';
import axiosInstance from '../../axiosInstance';
import { BsWhatsapp } from 'react-icons/bs';

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
        <div className="flex items-center justify-between mb-5">
          <h4 className="text-lg font-bold text-textDefault">Status Barang</h4>
          <div>{parseStatus(status)}</div>
        </div>
        <p>{textShowNormal[status]}</p>
        <div className="text-right">
          {status !== 5 && (
            <button
              className="px-4 py-2 mt-3 text-white rounded bg-danger hover:bg-red-800"
              onClick={() => handleUpdateStatusAction(5)}
            >
              Batalkan Checkout
            </button>
          )}
        </div>
      </div>

      {user.role === 2 && status === 1 && (
        <div className="mt-5 space-y-3">
          <h4 className="text-lg font-bold text-textDefault">Aksi</h4>
          <p>
            Anda sebagai admin, silahkan konfirmasi apakah pesanan ini sudah sesuai untuk diproses ke tahap selanjutnya
          </p>
          <div className="text-right">
            <button
              className="px-4 py-2 text-white rounded bg-success hover:bg-green-800"
              onClick={handleUpdateStatusByAdmin}
            >
              Ya, Konfirmasi
            </button>
          </div>
        </div>
      )}

      {shop._id === shop_id && status === 2 && (
        <div className="mt-5 space-y-3">
          <h4 className="text-lg font-bold text-textDefault">Aksi</h4>
          <p>Anda sebagai pemilik toko, silahkan konfirmasi jika pesanan sudah siap dikirim</p>
          <div className="text-right">
            <button
              className="px-4 py-2 text-white rounded bg-success hover:bg-green-800"
              onClick={() => handleUpdateStatusAction(3)}
            >
              Ya, Konfirmasi
            </button>
          </div>
        </div>
      )}

      {user._id === buyer_id && status === 3 && (
        <div className="mt-5 space-y-3">
          <h4 className="text-lg font-bold text-textDefault">Aksi</h4>
          <p>Anda sebagai pembeli, silahkan konfirmasi jika barang sudah diterima</p>
          <div className="text-right">
            <button
              className="px-4 py-2 text-white rounded bg-success hover:bg-green-800"
              onClick={() => handleUpdateStatusAction(4)}
            >
              Ya, Konfirmasi
            </button>
          </div>
        </div>
      )}

      {shop._id === shop_id && status === 4 && (
        <div className="mt-5 space-y-3">
          <h4 className="text-lg font-bold text-textDefault">Aksi</h4>
          <p>
            Anda sebagai pemilik toko, barang sudah dikonfirmasi dan diterima oleh pembeli, anda dapat menghubungi admin
            untuk melakukan penarikan dana dari penjualan barang anda
          </p>
          <div className="text-right">
            <a href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <button className="g-transparent flex justify-between transition hover:bg-subtitle items-center text-sm font-medium  py-1.5 px-3 border rounded-full bg-textDefault text-white">
                Hubungi Admin
                <span>
                  <BsWhatsapp className="ml-2 text-xl" />
                </span>
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusChanger;
