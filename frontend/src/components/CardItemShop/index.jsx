import { BsPencil } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";

const CardItemShop = ({
  data,
  plusQty,
  minQty,
  qtyOn,
  onCheckout,
  onTransactionList,
}) => {
  const [qtyItem, setQtyItem] = useState(1);

  return (
    <div className="border-b-2">
      <div className="border-b-2 border-t-1 px-4 border-gray-100 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://static.tvtropes.org/pmwiki/pub/images/old_man_jenkins.png"
            alt="seller images"
            className="object-cover w-12 h-12 rounded-full shadow-lg transition cursor-pointer"
          />
          <div className="ml-4">
            <p className="font-semibold text-sm __text-elipsis-one-line max-w-xs">
              Peternakan Situa Jenkins
            </p>
            <p className="text-xs text-gray-400 __text-elipsis-one-line max-w-xs">
              Kualitas Terbaik Hasil Peternakan Yang Sudah Terbukti Selama 20th
            </p>
          </div>
        </div>
        {!onTransactionList && !onCheckout && (
          <button className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full">
            Edit Barang
            <span>
              <BsPencil className="ml-2 text-sm" />
            </span>
          </button>
        )}
        {onTransactionList && (
          <div>
            <div className="text-sm font-medium">
              <span className="text-warning">Total Belanja</span> : Rp{" "}
              {Intl.NumberFormat("en-US").format(600000)}
            </div>
            <span
              className="mt-3 mb-1 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 rounded-full mr-2"
              style={{ backgroundColor: "#03AC0E" }}
            >
              Sedang Dalam Pengiriman
            </span>
          </div>
        )}
      </div>
      {/* for looping item in cart */}
      <div>
        <div className="px-8 py-4 flex items-center w-full">
          {!onCheckout && (
            <div>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox focus:ring-0 border-2 border-gray-500 focus:border-gray-300 rounded"
                />
              </label>
            </div>
          )}

          <img
            src={data?.product_image}
            alt="product images"
            className=" ml-4 object-cover w-20 h-20 rounded-md shadow-lg transition cursor-pointer border-2 hover:border-subtitle"
          />
          <div className="ml-4 w-full">
            <p className="text-sm font-medium">{data?.product_name}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base font-bold mt-1.5 flex items-center">
                  <span>
                    Rp{" "}
                    {Intl.NumberFormat("en-US").format(
                      data?.discount_price || data?.price
                    )}
                  </span>
                  {onCheckout && (
                    <span className="text-xs ml-2 text-gray-500 font-medium">
                      {" "}
                      ( 1 barang ){" "}
                    </span>
                  )}
                </p>
                {data?.discount_price && !onCheckout && (
                  <div className="mt-1 flex items-center text-sm">
                    <span className="inline-flex items-center justify-center px-2 py-1 font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2 opacity-80">
                      {((data?.price - data?.discount_price) * 100) /
                        data?.price +
                        "%"}
                    </span>
                    <p className="line-through text-subtitle">
                      Rp {Intl.NumberFormat("en-US").format(data?.price)}
                    </p>
                  </div>
                )}
                {onCheckout ? (
                  <div className="mt-1 flex items-center text-sm">
                    <span className="font-medium text-warning">
                      sub total barang :
                    </span>
                    <p className="text-subtitle ml-2">
                      Rp{" "}
                      {Intl.NumberFormat("en-US").format(data?.discount_price)}
                    </p>
                  </div>
                ) : null}
              </div>
              {!onCheckout && (
                <div
                  className="flex items-center justify-between w-32 mt-3 bg-gray-50 border px-3 py-1 rounded-md"
                  style={{ maxWidth: 100 }}
                >
                  <button
                    className="border-none focus:ring-0 focus:outline-none"
                    onClick={() => {
                      if (qtyItem === data?.quantity) {
                        plusQty(qtyOn);
                        setQtyItem(qtyItem);
                      } else {
                        plusQty(qtyOn + 1);
                        setQtyItem(qtyItem + 1);
                      }
                    }}
                  >
                    <AiOutlinePlusCircle className="text-xl cursor-pointer" />
                  </button>
                  <span>{qtyItem}</span>
                  <button
                    className="border-none focus:ring-0 focus:outline-none"
                    onClick={() => {
                      if (qtyItem === 1) {
                        minQty(qtyOn);
                        setQtyItem(qtyItem);
                      } else {
                        minQty(qtyOn - 1);
                        setQtyItem(qtyItem - 1);
                      }
                    }}
                  >
                    <AiOutlineMinusCircle className="text-xl cursor-pointer" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemShop;
