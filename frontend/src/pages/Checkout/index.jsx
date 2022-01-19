import { staticConst } from "../../static/staticConst";
import CardItemShop from "../../components/CardItemShop";
import Dropdown from "../../components/Dropdown";
const data = staticConst.stasticCardData[11];

const Checkout = () => {
  return (
    <div className="__montserat-text text-gray-900">
      <div className="mt-12">
        <div className="mycontainer-sm mobile:mycontainerfull gap-x-8">
          <h1 className="font-semibold">Checkout</h1>
          <div
            className="grid mt-4 gap-x-4"
            style={{ gridTemplateColumns: "3fr 1fr" }}
          >
            <div className="rounded-md border shadow p-5">
              {" "}
              <div className="font-semibold text-md border-b-2 py-2">
                Alamat Pengiriman :
              </div>
              <div className="border-b-8 pb-3 border-gray-200">
                <span
                  className="mt-3 mb-1 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 rounded-full mr-2"
                  style={{ backgroundColor: "#03AC0E" }}
                >
                  Utama
                </span>
                <div className="flex items-center">
                  <div className="font-semibold text-sm text-gray-800">
                    Mr. Low Calories
                  </div>
                  <div className="text-sm font-medium text-subtitle __poppins-text ml-1">
                    ( +62 1231133424 )
                  </div>
                </div>
                <div className="flex justify-between">
                  <textarea
                    className=" p-2 mt-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-sm outline-none focus:border-gray-300 focus:outline-none focus:ring-0 border-2 border-gray-200"
                    name="input alamat"
                    cols="80"
                    rows="4"
                    placeholder="Masukan Alamat Pengiriman"
                  >
                    Creative Office, Virus Media Investara, Cilandak Barat, Kec.
                    Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota
                    Jakarta [Tokopedia Note: Jl. H. Batong Raya no 33C, RW 6]
                    Cilandak, Jakarta Selatan, 12430
                  </textarea>
                  <div className="mt-2">
                    <Dropdown
                      title="Pengiriman"
                      viewMore={true}
                      dropdownOpts={staticConst.ongkirOpt}
                    />
                  </div>
                </div>
              </div>
              <div className="py-4">
                <CardItemShop data={data} onCheckout={true} />
              </div>
            </div>
            <div>
              <div className="rounded-md border shadow p-5">
                <div className="font-semibold text-sm">Ringkasan Belanja :</div>
                <div className="text-sm text-gray-600 border-b-2 py-4 mt-2">
                  <div className="flex justify-between items-center font-medium">
                    <div>Total Harga(1 barang)</div>
                    <div>Rp {Intl.NumberFormat("en-US").format(1000000)}</div>
                  </div>
                  <div className="flex justify-between items-center font-medium mt-1">
                    <div>Total Diskon(1 barang)</div>
                    <div>Rp {Intl.NumberFormat("en-US").format(400000)}</div>
                  </div>
                </div>
                <div className="flex text-sm justify-between items-center font-semibold mt-5">
                  <div>Total Harga</div>
                  <div>Rp {Intl.NumberFormat("en-US").format(600000)}</div>
                </div>
                <div className="flex flex-col justify-center mt-9 items-center">
                  <button className="w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
                    Proses Pembayaran
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

export default Checkout;
