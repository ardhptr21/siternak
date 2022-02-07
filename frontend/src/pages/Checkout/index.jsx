import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUser } from '../../api/userApi';
import { shopByShopId } from '../../api/shopsApi';
import parseAddress from '../../utils/parseAddress';
import parseStatus from '../../utils/parseStatus';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const navigation = useNavigate();
  const order = useLocation().state.order;
  const [shop, setShop] = useState({});
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState({});
  const [userBuyer, setUserBuyer] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productSelected = products.find((product) => product._id === order._productId);
    shopByShopId(productSelected._shopId)
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

  useEffect(() => {
    if (!order) {
      navigation('/', { replace: true });
    }
  }, [order, navigation]);

  if (loading) return 'Loading...';
  return (
    <div className="text-gray-900 __montserat-text">
      <div className="mt-12">
        <div className="mycontainer-sm mobile:mycontainerfull gap-x-8">
          <h1 className="font-semibold">Checkout</h1>
          <div className="grid mt-4 gap-x-4" style={{ gridTemplateColumns: '3fr 1fr' }}>
            <div className="p-5 border rounded-md shadow">
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
            <div>
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
                {order.status === 0 && (
                  <div className="flex flex-col items-center justify-center mt-9">
                    <button className="w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
                      Kirim Bukti Pembayan
                    </button>
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
