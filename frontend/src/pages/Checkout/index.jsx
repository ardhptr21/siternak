import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUser } from '../../api/userApi';
import { shopByShopId } from '../../api/shopsApi';
import parseAddress from '../../utils/parseAddress';
import parseStatus from '../../utils/parseStatus';
import { useDispatch, useSelector } from 'react-redux';
import { BsImages } from 'react-icons/bs';
import { uploadProofPayment } from '../../api/transactionApi';
import { updateOrdersData } from '../../actions/transaction/transactionActions';
import { useRef } from 'react';
import { getProofPaymentImage } from '../../api/transactionApi';

const Checkout = () => {
  const navigation = useNavigate();
  const transaction_id = useParams().transaction_id;
  const orders = useSelector((state) => state.transaction).orders;
  const [order, setOrder] = useState({});
  const [shop, setShop] = useState({});
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState({});
  const [userBuyer, setUserBuyer] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const selected = orders.find((order) => order._id === transaction_id);
    if (!selected) {
      navigation('/', { replace: true });
    }
    setOrder(selected);
  }, [orders, transaction_id, navigation]);

  useEffect(() => {
    setLoading(true);
    const productSelected = products.find((product) => product._id === order._productId);
    shopByShopId(productSelected?._shopId)
      .then((res) => {
        setShop(res.data.data);
        setProduct(productSelected);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [order, setShop, products]);

  useEffect(() => {
    setLoading(true);
    getUser(order._buyerId)
      .then((res) => {
        setUserBuyer(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [order, setUserBuyer]);

  const [image, setImage] = useState(undefined);
  const [imagePreview, setImagePreview] = useState(null);
  const imageInput = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [proofPaymentImage, setProofPaymentImage] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProofPaymentImage(order._id, user.token)
      .then((res) => {
        console.log(res.data.data);
        setProofPaymentImage(res.data.data.image);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [order, user]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const preview = URL.createObjectURL(e.target.files[0]);
    setImagePreview(preview);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    console.log(image);
    formData.append('image', image);
    formData.append('transaction_id', order._id);
    try {
      await uploadProofPayment(formData, user.token);
      setTimeout(() => {
        dispatch(updateOrdersData(order._id, 1));
      }, 3000);
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
            <div className="p-5 border rounded-md shadow" style={{ flex: 2 }}>
              <div className="py-2 font-semibold border-b-2 text-md">Detail Pengiriman</div>
              <div className="pb-3 border-b-8 border-gray-200">
                <div className="flex flex-col mt-5">
                  <div className="text-sm font-semibold text-gray-800">Mr. {userBuyer.name}</div>
                  <div className="text-xs font-medium text-subtitle __poppins-text">{userBuyer.telephone}</div>
                </div>
                <div className="flex justify-between">
                  <p className="mt-2 text-sm bg-white rounded-md outline-none text-blueGray-600">
                    {parseAddress(userBuyer.address)}
                  </p>
                </div>
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
                    <div>{order.quantity} Barang</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5 text-sm font-semibold">
                  <div>Total Harga</div>
                  <div>Rp {Intl.NumberFormat('en-US').format(order.total_price)}</div>
                </div>
                <div className="flex items-center justify-between mt-5 text-sm font-semibold">
                  <div>Transfer</div>
                  <div>{shop.account_number}</div>
                </div>

                {order.status === 0 && (
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

                {order.status === 0 && (
                  <div className="flex flex-col items-center justify-center mt-9">
                    <button
                      className="w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded"
                      onClick={handleUpload}
                    >
                      Kirim Bukti Pembayaran
                    </button>
                  </div>
                )}

                {order.status >= 1 && (
                  <div className="mt-5">
                    <img src={proofPaymentImage} alt="proof payment" className="w-full" />
                  </div>
                )}
              </div>
              <div className="mt-5 text-center">{parseStatus(order.status)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
