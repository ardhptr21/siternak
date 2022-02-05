import { BsPencil } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useState } from 'react';

const CardItemShop = ({ data }) => {
  const [qtyItem, setQtyItem] = useState(1);

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="border-b-2">
      <div className="flex items-center justify-between px-4 py-2 border-b-2 border-gray-100 border-t-1">
        <div className="flex items-center">
          <img
            src="https://static.tvtropes.org/pmwiki/pub/images/old_man_jenkins.png"
            alt="seller images"
            className="object-cover w-12 h-12 transition rounded-full shadow-lg cursor-pointer"
          />
          <div className="ml-4">
            <p className="max-w-xs text-sm font-semibold __text-elipsis-one-line">Peternakan Situa Jenkins</p>
            <p className="max-w-xs text-xs text-gray-400 __text-elipsis-one-line">
              Kualitas Terbaik Hasil Peternakan Yang Sudah Terbukti Selama 20th
            </p>
          </div>
        </div>

        {!isEdit && (
          <button
            className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
            onClick={() => setIsEdit(true)}
          >
            Edit Barang
            <span>
              <BsPencil className="ml-2 text-sm" />
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center w-full px-8 pt-4">
        <img
          src={data?.product_image}
          alt="product images"
          className="object-cover w-32 h-32 transition border-2 rounded-md shadow-lg cursor-pointer hover:border-subtitle"
        />
        <div className="w-full ml-4">
          <p className="text-sm font-medium">{data?.product_name}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-bold mt-1.5 flex items-center">
                Rp {Intl.NumberFormat('en-US').format(data?.price)}
              </p>
              <div className="flex items-center mt-1 text-sm">
                <span className="font-medium text-warning">Harga satuan :</span>
                <p className="ml-2 text-subtitle">Rp {Intl.NumberFormat('en-US').format(10000)}</p>
              </div>
              <div className="flex items-center mt-1 text-sm">
                <span className="font-medium text-warning">Total barang :</span>
                <p className="ml-2 text-subtitle">10 barang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full px-8 pb-5">
        <div className="space-x-5">
          {isEdit ? (
            <>
              <button
                className="px-4 py-2 mt-6 text-red-500 border border-red-500 rounded-md"
                onClick={() => setIsEdit(false)}
              >
                Batal
              </button>
              <button className="px-4 py-2 mt-6 text-white bg-green-500 rounded-md">Simpan Perubahan</button>
            </>
          ) : (
            <>
              <button className="px-4 py-2 mt-6 text-red-500 border border-red-500 rounded-md">Hapus</button>
              <button className="px-4 py-2 mt-6 text-white bg-black rounded-md">Checkout</button>
            </>
          )}
        </div>
        {isEdit && (
          <div
            className="flex items-center justify-between w-32 px-3 py-1 mt-3 border rounded-md bg-gray-50"
            style={{ maxWidth: 100 }}
          >
            <button
              className="border-none focus:ring-0 focus:outline-none"
              onClick={() => {
                if (qtyItem === data?.quantity) {
                  setQtyItem(qtyItem);
                } else {
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
                  setQtyItem(qtyItem);
                } else {
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
  );
};

export default CardItemShop;
