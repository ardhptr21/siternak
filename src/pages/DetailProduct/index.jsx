import { useEffect, useState } from "react";
import { staticConst } from "../../static/staticConst";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { BsWhatsapp, BsPinMap } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import Dropdown from "../../components/Dropdown";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import CardSlider from "../../components/CardSlider";

const imageUrl = [
  "https://media.istockphoto.com/photos/rooster-and-hens-free-range-rooster-and-chickens-picture-id1170875829?k=20&m=1170875829&s=612x612&w=0&h=jrCZoKnepJLRoW2VRrG7CRSEExbWEhl-j3EZAS0A2lc=",
  "/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg",
  "https://media.istockphoto.com/photos/mont-saint-michel-monument-normandy-france-picture-id475842082?k=20&m=475842082&s=612x612&w=0&h=x21EQ5kxgKKRLx28ov7VUK_98b-KvTU3l-fH8yriul8=",
  "https://media.istockphoto.com/photos/goats-picture-id146776721?k=20&m=146776721&s=612x612&w=0&h=y2eWzDfQIlJ8D88iMFwx7KCKyrdG9G7QMlbxceJ4Bhc=",
];

const DetailProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [showCaseImage, setShowCaseImage] = useState(null);
  const [descCollapse, setDescCollapse] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const data = staticConst?.stasticCardData.filter(
      (el) => el._id.toString() === id
    );
    setProductData(data[0]);
    setShowCaseImage(data[0].product_image);
  }, [id]);

  return (
    <div className="__montserat-text text-gray-700 mycontainer-sm mobile:mycontainerfull">
      {productData && (
        <div className="mt-12">
          <div
            className=" grid gap-x-8"
            style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
          >
            <div className="w-96">
              <div className="w-96 rounded-md shadow-lg overflow-hidden h-96">
                <img
                  src={showCaseImage}
                  alt="product images"
                  className="w-full h-full object-cover"
                />
              </div>
              {imageUrl && (
                <div className="flex justify-between mt-6">
                  {imageUrl.map((el, i) => (
                    <img
                      key={i}
                      src={el}
                      onClick={() => setShowCaseImage(el)}
                      alt="product images"
                      className="object-cover w-20 h-20 rounded-md shadow-lg transition cursor-pointer border-2 hover:border-subtitle"
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="px-5">
              <p className="text-xl font-bold">{productData?.product_name}</p>
              <div className="mt-7">
                <p className="text-2xl font-bold mt-1.5">
                  Rp{" "}
                  {Intl.NumberFormat("en-US").format(
                    productData?.discount_price || productData?.price
                  )}
                </p>
                {productData?.discount_price && (
                  <div className="mt-1 flex items-center">
                    <span className="inline-flex items-center justify-center px-2 py-1 font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2 opacity-80">
                      {((productData?.price - productData?.discount_price) *
                        100) /
                        productData?.price +
                        "%"}
                    </span>
                    <p className="line-through text-subtitle">
                      Rp {Intl.NumberFormat("en-US").format(productData?.price)}
                    </p>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Barang tersisa :{" "}
                <span className="font-semibold">{productData?.quantity}</span>
              </p>
              <div className="mt-3">
                <p className="border-b-2 border-t-2 border-gray-100 px-2 py-2 font-semibold">
                  Detail :
                </p>
                <p
                  className={`${
                    descCollapse ? "__text-elipsis-many-line" : ""
                  } mt-3 px-2 text-gray-600`}
                  style={{ textIndent: 20, fontSize: 14.5 }}
                >
                  {productData?.product_desc}
                </p>
                {descCollapse && (
                  <div className="flex justify-between mt-1">
                    <span></span>
                    <span
                      className="text-xs font-medium cursor-pointer"
                      style={{ color: "#008000" }}
                      onClick={() => setDescCollapse(false)}
                    >
                      Lihat Selengkapnya
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <div className="border-b-2 border-t-2 border-gray-100 py-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={productData?.product_image}
                      alt="seller images"
                      className="object-cover w-12 h-12 rounded-full shadow-lg transition cursor-pointer"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-sm __text-elipsis-one-line max-w-xs">
                        {productData?.seller?.name}
                      </p>
                      <p className="text-xs text-gray-400 __text-elipsis-one-line max-w-xs">
                        {productData?.seller?.seller_desc}
                      </p>
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
                <div className="font-semibold text-sm">Pengiriman :</div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="mt-2 text-sm flex items-center">
                      <BsPinMap className="mr-2" /> Dikirim dari Surabaya
                    </p>
                    <p className="mt-1 text-sm flex items-center">
                      <GrMoney className="mr-2" />
                      Estimasi Ongkir Reguler 200rb
                    </p>
                  </div>
                  <div className="mt-2">
                    <Dropdown
                      title="Pengiriman"
                      viewMore={true}
                      dropdownOpts={staticConst.ongkirOpt}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md shadow-md p-4">
                <div className="font-semibold text-sm">
                  Atur Jumlah Dan Catatan :
                </div>
                <div
                  className="flex items-center justify-between mt-3 bg-gray-50 border px-3 py-1 rounded-md"
                  style={{ maxWidth: 100 }}
                >
                  <button
                    className="border-none focus:ring-0 focus:outline-none"
                    onClick={() =>
                      qty === productData?.quantity
                        ? setQty(qty)
                        : setQty(qty + 1)
                    }
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
                <div className="rounded-md mt-3">
                  <input
                    type="text"
                    placeholder="Tambahkan Catatan"
                    className="border-gray-100 rounded-md w-full text-sm focus:border-gray-100 focus:ring-0"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-medium text-xs">Sub Total : </div>
                  <p className="text-base font-semibold mt-1">
                    Rp{" "}
                    {Intl.NumberFormat("en-US").format(
                      (productData?.discount_price || productData?.price) * qty
                    )}
                  </p>
                </div>
                <div className="flex flex-col justify-center mt-3 items-center">
                  <button
                    onClick={() => navigate("/my-cart")}
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
          <CardSlider />
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
