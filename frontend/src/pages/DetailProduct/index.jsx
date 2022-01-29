import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { BsWhatsapp, BsPinMap } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import CardSlider from '../../components/CardSlider';
import { useSelector } from 'react-redux';
import { shopByShopId } from '../../api/shopsApi';
import { getUser } from '../../api/userApi';
import { useCallback } from 'react';

const DetailProduct = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const { slug } = useParams();
  const [shop, setShop] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const [descCollapse, setDescCollapse] = useState(true);
  const [qty, setQty] = useState(1);

  const getShopData = useCallback(async (shop_id) => {
    try {
      const result = await shopByShopId(shop_id);
      return result.data.data;
    } catch (err) {
      throw err;
    }
  }, []);

  const getUserData = useCallback(async (user_id) => {
    try {
      const result = await getUser(user_id);
      return result.data.data;
    } catch (err) {
      throw err;
    }
  }, []);

  const getDouble = useCallback(
    async (shop_id) => {
      try {
        const shop = await getShopData(shop_id);
        const user = await getUserData(shop._userId);
        setShop(shop);
        setUser(user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [getShopData, getUserData]
  );

  useEffect(() => {
    const data = products.find((product) => product.slug === slug);
    getDouble(data._shopId);
    setProductData(data);
  }, [slug, products, getDouble]);

  if (loading) return 'Loading...';
  return (
    <div className="text-gray-700 __montserat-text mycontainer-sm mobile:mycontainerfull">
      {productData && (
        <div className="mt-12">
          <div className="grid gap-x-8" style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>
            <div className="w-96">
              <div className="overflow-hidden rounded-md shadow-lg w-96 h-96">
                <img src={productData?.image} alt="product images" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="px-5">
              <p className="text-xl font-bold">{productData?.name}</p>
              <div className="mt-7">
                <p className="text-2xl font-bold mt-1.5">Rp {Intl.NumberFormat('en-US').format(productData?.price)}</p>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Barang tersisa : <span className="font-semibold">{productData?.stock}</span>
              </p>
              <div className="mt-3">
                <p className="px-2 py-2 font-semibold border-t-2 border-b-2 border-gray-100">Detail :</p>
                <p
                  className={`${descCollapse ? '__text-elipsis-many-line' : ''} mt-3 px-2 text-gray-600`}
                  style={{ textIndent: 20, fontSize: 14.5 }}
                >
                  {productData?.description}
                </p>
                {descCollapse && (
                  <div className="flex justify-between mt-1">
                    <span></span>
                    <span
                      className="text-xs font-medium cursor-pointer"
                      style={{ color: '#008000' }}
                      onClick={() => setDescCollapse(false)}
                    >
                      Lihat Selengkapnya
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between py-2 border-t-2 border-b-2 border-gray-100">
                  <div className="flex items-center">
                    <img
                      src={shop?.image}
                      alt="seller images"
                      className="object-cover w-12 h-12 transition rounded-full shadow-lg cursor-pointer"
                    />
                    <div className="ml-4">
                      <p className="max-w-xs text-sm font-semibold __text-elipsis-one-line">{shop?.name}</p>
                      <p className="max-w-xs text-xs text-gray-400 __text-elipsis-one-line">{shop?.description}</p>
                    </div>
                  </div>
                  <button className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full">
                    WhatsApp
                    <span>
                      <BsWhatsapp className="ml-2 text-xl" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-sm font-semibold">Pengiriman :</div>
                <div className="flex items-center justify-between">
                  <p className="flex items-center mt-2 text-sm">
                    <BsPinMap className="mr-2" /> Dikirim dari {user.address.city}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="p-4 rounded-md shadow-md">
                <div className="text-sm font-semibold">Atur Jumlah Dan Catatan :</div>
                <div
                  className="flex items-center justify-between px-3 py-1 mt-3 border rounded-md bg-gray-50"
                  style={{ maxWidth: 100 }}
                >
                  <button
                    className="border-none focus:ring-0 focus:outline-none"
                    onClick={() => (qty === productData?.quantity ? setQty(qty) : setQty(qty + 1))}
                  >
                    <AiOutlinePlusCircle className="text-xl cursor-pointer" />
                  </button>
                  <span>{qty}</span>
                  <button
                    className="border-none focus:ring-0 focus:outline-none"
                    onClick={() => (qty === 1 ? setQty(qty) : setQty(qty - 1))}
                  >
                    <AiOutlineMinusCircle className="text-xl cursor-pointer" />
                  </button>
                </div>
                <div className="mt-3 rounded-md">
                  <input
                    type="text"
                    placeholder="Tambahkan Catatan"
                    className="w-full text-sm border-gray-100 rounded-md focus:border-gray-100 focus:ring-0"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-xs font-medium">Sub Total : </div>
                  <p className="mt-1 text-base font-semibold">
                    Rp {Intl.NumberFormat('en-US').format(productData?.price * qty)}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-3">
                  <button
                    onClick={() => navigate('/my-cart')}
                    className="ml-2 w-full flex justify-between bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded"
                  >
                    Masukan Keranjang
                    <span>
                      <TiShoppingCart className="ml-4 text-xl" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <CardSlider category_id={productData._categoryId} product_id={productData._id} />
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
