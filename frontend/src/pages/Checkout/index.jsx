import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUser } from '../../api/userApi';
import { shopByShopId } from '../../api/shopsApi';
import parseAddress from '../../utils/parseAddress';
import parseDate from '../../utils/parseDate';
import { useDispatch, useSelector } from 'react-redux';
import { BsImages } from 'react-icons/bs';
import { uploadProofPayment } from '../../api/transactionApi';
import { updateTransactionStatus } from '../../actions/transaction/transactionActions';
import { useRef } from 'react';
import { getProofPaymentImage } from '../../api/transactionApi';
import StatusChanger from '../../components/StatusChanger';

const Checkout = () => {
  const navigation = useNavigate();
  const transaction_id = useParams().transaction_id;
  const transaction = useSelector((state) => state.transaction).find(
    (transaction) => transaction._id === transaction_id
  );

  const [shop, setShop] = useState({});
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState({});
  const [userBuyer, setUserBuyer] = useState('');
  const [loading, setLoading] = useState(true);
  const [transactionLoading, setTransactionLoading] = useState(false);

  useEffect(() => {
    if (!transaction) {
      navigation('/', { replace: true });
    }
  }, [transaction, navigation]);

  useEffect(() => {
    setLoading(true);
    const productSelected = products.find((product) => product._id === transaction?._productId);
    shopByShopId(productSelected?._shopId)
      .then((res) => {
        setShop(res.data.data);
        setProduct(productSelected);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [transaction, setShop, products]);

  useEffect(() => {
    setLoading(true);
    getUser(transaction?._buyerId)
      .then((res) => {
        setUserBuyer(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [transaction, setUserBuyer]);

  const [image, setImage] = useState(undefined);
  const [imagePreview, setImagePreview] = useState(null);
  const imageInput = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [proofPaymentImage, setProofPaymentImage] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProofPaymentImage(transaction?._id, user.token)
      .then((res) => {
        console.log(res.data.data);
        setProofPaymentImage(res.data.data.image);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [transaction, user]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const preview = URL.createObjectURL(e.target.files[0]);
    setImagePreview(preview);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('transaction_id', transaction?._id);
    try {
      setTransactionLoading(true);
      await uploadProofPayment(formData, user.token);
      setTimeout(() => {
        dispatch(updateTransactionStatus(transaction?._id, 1));
        setTransactionLoading(false);
      }, 5000);
      setImage(null);
      setImagePreview(null);
      imageInput.current.value = '';
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return 'Loading...';

  return (
    <div className="text-gray-900 __montserat-text">
      <div className="mt-12">
        <div className="mycontainer-sm mobile:mycontainerfull gap-x-8">
          <h1 className="font-semibold">Checkout</h1>
          <div className="flex items-start justify-center mt-4 gap-x-4">
            <div style={{ flex: 2 }} className="space-y-4">
              <div className="p-5 border rounded-md shadow">
                <div className="py-2 font-semibold border-b-2 text-md">Detail Checkout</div>
                <div className="pb-3 border-b-8 border-gray-200">
                  <div className="flex flex-col mt-5">
                    <div className="text-sm font-semibold text-gray-800">{userBuyer.name}</div>
                    <div className="text-xs font-medium text-subtitle __poppins-text">{userBuyer.telephone}</div>
                  </div>
                  <p className="mt-2 bg-white rounded-md outline-none text-blueGray-600">
                    {parseAddress(userBuyer.address)}
                  </p>
                  <p className="mt-5 text-sm">
                    <span className="font-bold">Tanggal Checkout :</span> {parseDate(transaction?.createdAt)}
                  </p>
                </div>
                <div className="py-4">
                  <div className="flex items-center justify-between px-4 py-2 border-b-2 border-gray-100 border-t-1">
                    <div className="flex items-center">
                      <img
                        src={shop.image}
                        alt={shop.name}
                        className="object-cover w-12 h-12 transition rounded-full shadow-lg cursor-pointer"
                      />
                      <div className="ml-4">
                        <p className="max-w-xs text-sm font-semibold __text-elipsis-one-line">{shop.name}</p>
                        <p className="max-w-xs text-xs text-gray-400 __text-elipsis-one-line">{shop.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start w-full px-8 pt-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-32 h-32 transition border-2 rounded-md shadow-lg cursor-pointer hover:border-subtitle"
                    />
                    <div className="w-full ml-4">
                      <h3 className="mb-2 text-xl font-medium">{product.name}</h3>
                      <p className="text-sm">{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <StatusChanger
                status={transaction?.status}
                buyer_id={transaction._buyerId}
                shop_id={transaction._shopId}
                transaction_id={transaction._id}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div className="p-5 border rounded-md shadow">
                <div className="text-sm font-semibold">Ringkasan Belanja :</div>
                <div className="py-4 mt-2 text-sm text-gray-600 border-b-2">
                  <div className="flex items-center justify-between font-medium">
                    <div>Harga Satuan</div>
                    <div>Rp {Intl.NumberFormat('en-US').format(product.price)}</div>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <div>Jumlah Barang</div>
                    <div>{transaction?.quantity} Barang</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5 text-sm font-semibold">
                  <div>Total Harga</div>
                  <div>Rp {Intl.NumberFormat('en-US').format(transaction?.total_price)}</div>
                </div>
                <div className="justify-between mt-5 space-y-2 text-sm">
                  <div className="font-semibold">Transfer</div>
                  <div className="text-xs">
                    <p>
                      No Rekening : <strong>{process.env.REACT_APP_ACCOUNT_NUMBER}</strong>
                    </p>
                    <p>
                      Nama Bank : <strong>{process.env.REACT_APP_BANK_NAME}</strong>
                    </p>
                    <p>
                      Nama Pemilik : <strong>{process.env.REACT_APP_HOLDER_NAME}</strong>
                    </p>
                  </div>
                </div>

                {transaction?.status === 0 && (
                  <div className="flex items-center justify-center w-full mt-5">
                    <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 group">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <BsImages className="w-10 h-10 text-gray-400 hover:text-gray-600" />
                        <p className="pt-1 text-sm tracking-wider text-gray-400 lowercase group-hover:text-gray-600">
                          foto bukti pembayaran
                        </p>
                      </div>
                      <input type="file" className="hidden" onChange={handleImageChange} required ref={imageInput} />
                    </label>
                  </div>
                )}

                {imagePreview && (
                  <div className="mt-5">
                    <img src={imagePreview} alt="preview" className="w-full" />
                  </div>
                )}

                {transaction?.status === 0 && (
                  <div className="flex flex-col items-center justify-center mt-9">
                    <button
                      className="w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded"
                      onClick={handleUpload}
                    >
                      {transactionLoading ? 'Loading...' : 'Kirim Bukti Pembayaran'}
                    </button>
                  </div>
                )}

                {transaction?.status >= 1 && (
                  <div className="mt-5">
                    <img src={proofPaymentImage} alt="proof payment" className="w-full" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
