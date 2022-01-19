import React, { useState } from "react";
import Tabel from "../../../components/Tabel";
import { BsPlusLg, BsCloudUploadFill } from "react-icons/bs";
import Modal from "../../../components/Modal";

const DashboarSeller = () => {
  const [handleModal, setHandleModal] = useState(false);

  const AddItem = (
    <div className="px-10 py-6 bg-white max-w-max rounded-md __montserat-text">
      <h1 className="font-bold pt-4 text-2xl text-center">Tambah Item</h1>

      <div className="mt-4">
        <div class="mb-3 pt-0 flex flex-col">
          <label className="text-sm font-medium text-subtitle">Nama</label>
          <input
            type="text"
            class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
            style={{ width: 330 }}
          />
        </div>
        <div class="mb-3 pt-0 flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">Harga</label>
          <div className="grid grid-flow-col gap-x-3">
            <input
              type="number"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 160 }}
              placeholder="Normal"
              min="0"
            />
            <input
              type="number"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 160 }}
              placeholder="Discount"
              min="0"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">stock</label>
          <div>
            <input
              type="number"
              min="0"
              className="px-3 py-3 mt-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-gray-200 outline-none focus:outline-none focus:ring-0 pl-20 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">Deskripsi</label>
          <div>
            <textarea
              className=" p-2 mt-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-sm outline-none focus:border-gray-300 focus:outline-none focus:ring-0 border-2 border-gray-200"
              cols="40"
              rows="4"
              placeholder="Deskripsi Produk"
            ></textarea>
          </div>
        </div>

        <label class="flex justify-center mt-4 bg-transparent hover:text-gray-600  items-center text-sm text-gray-800 border-2 border-gray-800 rounded-full ease-linear transition-all max-w-max duration-150 px-5 py-2 cursor-pointer hover:border-gray-600">
          <span class="leading-normal flex items-center">
            <BsCloudUploadFill />{" "}
            <span className="ml-4 font-semibold">Upload Gambar</span>
          </span>
          <input type="file" class="hidden" />
        </label>

        <div className="flex flex-col justify-center mt-9 items-center">
          <button className=" w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="rounded-lg shadow border __montserat-text border-gray-200 bg-white p-5">
        <div className="mb-11">
          <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
            <div>
              <div className="font-semibold">Dashboard Seller</div>
              <div className="text-sm text-subtitle">
                Atur Barang Dagangan Anda Disini
              </div>
            </div>
            <button
              onClick={() => setHandleModal(true)}
              className="ml-2 bg-gray-800 flex justify-between hover:text-white transition hover:border-gray-800 items-center text-sm font-medium text-gray-100 py-1.5 px-3 border rounded-full"
            >
              Tambah Item
              <span>
                <BsPlusLg className="ml-2 text-sm" />
              </span>
            </button>
          </div>
          <div className="mt-8">
            <Tabel />
          </div>
        </div>
      </div>
      <Modal
        isOpen={handleModal}
        component={AddItem}
        handleClose={() => setHandleModal(false)}
      />
    </div>
  );
};

export default DashboarSeller;
