import React, { useState } from 'react';
import Tabel from '../../../components/Tabel';
import { BsPlusLg, BsCloudUploadFill } from 'react-icons/bs';
import Modal from '../../../components/Modal';

const DashboarSeller = () => {
  const [handleModal, setHandleModal] = useState(false);

  const AddItem = (
    <div className="px-10 py-6 bg-white rounded-md max-w-max __montserat-text">
      <h1 className="pt-4 text-2xl font-bold text-center">Tambah Item</h1>

      <div className="mt-4">
        <div className="flex flex-col pt-0 mb-3">
          <label className="text-sm font-medium text-subtitle">Nama</label>
          <input
            type="text"
            className="px-3 py-3 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
            style={{ width: 330 }}
          />
        </div>
        <div className="flex flex-col pt-0 mt-4 mb-3">
          <label className="text-sm font-medium text-subtitle">Harga</label>
          <div className="grid grid-flow-col gap-x-3">
            <input
              type="number"
              className="px-3 py-3 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
              style={{ width: 160 }}
              placeholder="Normal"
              min="0"
            />
            <input
              type="number"
              className="px-3 py-3 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
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
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">Deskripsi</label>
          <div>
            <textarea
              className="p-2 mt-2 text-sm bg-white border-2 border-gray-200 rounded-md outline-none placeholder-blueGray-300 text-blueGray-600 focus:border-gray-300 focus:outline-none focus:ring-0"
              cols="40"
              rows="4"
              placeholder="Deskripsi Produk"
            ></textarea>
          </div>
        </div>

        <label className="flex items-center justify-center px-5 py-2 mt-4 text-sm text-gray-800 transition-all duration-150 ease-linear bg-transparent border-2 border-gray-800 rounded-full cursor-pointer hover:text-gray-600 max-w-max hover:border-gray-600">
          <span className="flex items-center leading-normal">
            <BsCloudUploadFill /> <span className="ml-4 font-semibold">Upload Gambar</span>
          </span>
          <input type="file" className="hidden" />
        </label>

        <div className="flex flex-col items-center justify-center mt-9">
          <button className=" w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
        <div className="mb-11">
          <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
            <div>
              <div className="font-semibold">Dashboard Seller</div>
              <div className="text-sm text-subtitle">Atur Barang Dagangan Anda Disini</div>
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
      <Modal isOpen={handleModal} component={AddItem} handleClose={() => setHandleModal(false)} />
    </div>
  );
};

export default DashboarSeller;
