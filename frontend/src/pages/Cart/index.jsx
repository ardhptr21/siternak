import React, { useState } from "react";
import { staticConst } from "../../static/staticConst";
import CardItemShop from "../../components/CardItemShop";
import { useNavigate } from "react-router";
const data = staticConst.stasticCardData[11];

const Cart = () => {
  const navigate = useNavigate();
  const [totalQty, setTotalQty] = useState(1);

  return (
    <div className="__montserat-text text-gray-900">
      <div className="mt-12">
        <div className="mycontainer-sm mobile:mycontainerfull gap-x-8">
          <h1 className="font-semibold">Keranjang</h1>
          <div
            className="grid mt-4 gap-x-4"
            style={{ gridTemplateColumns: "3fr 1fr" }}
          >
            <div className="rounded-md border mb-10">
              {/* next shop */}
              <CardItemShop
                qtyOn={totalQty}
                data={data}
                minQty={(val) => setTotalQty(val)}
                plusQty={(val) => setTotalQty(val)}
              />
            </div>
            {/* panel ringkasan belanja */}
            <div>
              <div className="rounded-md border shadow p-5">
                <div className="font-semibold text-sm">Ringkasan Belanja :</div>
                <div className="text-sm text-gray-600 border-b-2 py-4 mt-2">
                  <div className="flex justify-between items-center font-medium">
                    <div>Total Harga({totalQty} barang)</div>
                    <div>
                      Rp {Intl.NumberFormat("en-US").format(totalQty * 1000000)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center font-medium mt-1">
                    <div>Total Diskon({totalQty} barang)</div>
                    <div>
                      Rp {Intl.NumberFormat("en-US").format(totalQty * 400000)}
                    </div>
                  </div>
                </div>
                <div className="flex text-sm justify-between items-center font-semibold mt-5">
                  <div>Total Harga</div>
                  <div>
                    Rp {Intl.NumberFormat("en-US").format(totalQty * 600000)}
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-9 items-center">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded"
                  >
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
