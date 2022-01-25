import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Input from '../Input';
import { staticConst } from '../../static/staticConst';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { MdStorefront } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

const { categoriesOptions } = staticConst;

const Navbar = () => {
  const navigation = useNavigate();
  const [handleModal, setHandleModal] = useState(false);
  const loginComponent = (
    <div className="px-10 py-6 bg-white rounded-md max-w-max __montserat-text">
      <h1 className="pt-4 text-2xl font-bold text-center">Login</h1>
      <p className="text-xs text-center text-subtitle">
        Belum Punya Akun?{' '}
        <span className="cursor-pointer text-warning" onClick={() => setModalComponent(RegisterComponent)}>
          Register
        </span>
      </p>
      <div className="mt-4 mb-7">
        <div class="mb-3 pt-0 flex flex-col">
          <label className="text-sm font-medium text-subtitle">Email / no. tlpn</label>
          <input
            type="text"
            class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
            style={{ width: 330 }}
          />
          <p className="mt-1 text-xs text-gray-400">Contoh: email@tokopedia.com</p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Password</label>
          <div>
            <input
              type="text"
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 ">
          <span></span>
          <span className="mt-1 text-xs cursor-pointer text-warning">Lupa Kata Sandi ?</span>
        </div>

        <div className="flex flex-col items-center justify-center mt-9">
          <button className="ml-2 w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Masuk
          </button>
        </div>
        <p className="mt-5 text-xs text-center text-subtitle">
          Butuh bantuan? <span className="cursor-pointer text-warning">Hubungi ITernak Care</span>
        </p>
      </div>
    </div>
  );

  const RegisterComponent = (
    <div className="px-10 py-6 bg-white rounded-md max-w-max __montserat-text">
      <h1 className="pt-4 text-2xl font-bold text-center">Register</h1>
      <p className="text-xs text-center text-subtitle">
        Sudah Punya Akun?{' '}
        <span className="cursor-pointer text-warning" onClick={() => setModalComponent(loginComponent)}>
          Masuk
        </span>
      </p>
      <div className="mb-7 mt-7">
        <div class="mb-3 pt-0 flex flex-col">
          <label className="text-sm font-medium text-subtitle">Nama</label>
          <div className="grid grid-flow-col gap-x-3">
            <input
              type="text"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 160 }}
              placeholder="Nama Depan"
            />
            <input
              type="text"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 160 }}
              placeholder="Nama Belakang"
            />
          </div>
        </div>
        <div class="mb-3 pt-0 flex flex-col">
          <label className="text-sm font-medium text-subtitle">Email / no. tlpn</label>
          <input
            type="text"
            class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
            style={{ width: 330 }}
          />
          <p className="mt-1 text-xs text-gray-400">Contoh: email@tokopedia.com</p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Password</label>
          <div>
            <input
              type="text"
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-9">
          <button className="ml-2 w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Daftar
          </button>
        </div>
        <p className="mt-5 text-xs text-center text-subtitle">
          Butuh bantuan? <span className="cursor-pointer text-warning">Hubungi ITernak Care</span>
        </p>
      </div>
    </div>
  );

  const [modalComponent, setModalComponent] = useState(loginComponent);
  const user = useSelector((state) => state.user);

  const handleSearch = (e) => {
    const pathname = window.location.pathname;
    if (pathname !== '/product_page') {
      navigation('/product_page');
    }
    console.log(e.target.value);
  };

  return (
    <div className="fixed z-20 w-screen bg-white shadow-md">
      <div className="mycontainer flex justify-between items-center py-0.5">
        <a href="/">
          <img src="/assets/logo_si_ternak.png" alt="Logo" className="w-16" />
        </a>
        <div className="grid grid-flow-col p-1 bg-gray-100 divide-x-2 rounded max-w-max">
          <Dropdown noBorder={true} dropdownOpts={categoriesOptions} />
          <Input placeholder="Search" onChange={handleSearch} customStyles="bg-transparent" />
        </div>
        <div className="flex items-center justify-between gap-8">
          {!user.isLoggedIn && (
            <div
              className="px-4 py-2 text-white transition duration-200 bg-black rounded-md cursor-pointer hover:bg-subtitle"
              onClick={() => setHandleModal(true)}
            >
              Login / Register
            </div>
          )}
          {user.isLoggedIn && (
            <>
              <div className="relative inline-block cursor-pointer ">
                <MdStorefront className="text-xl" />
              </div>
              <div className="relative inline-block cursor-pointer">
                <CgProfile className="text-xl" />
              </div>
              <div
                className="relative inline-block cursor-pointer"
                onClick={() => navigation('my-cart', { replace: true })}
              >
                <RiShoppingCartLine className="mr-4 text-xl text-gray-700" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform -translate-y-1/2 bg-red-600 rounded-full translate-x-1/4">
                  1
                </span>
              </div>
              <div>
                <img
                  src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
                  alt="profile_picture"
                  className="object-cover w-10 h-10 rounded-full"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Modal isOpen={handleModal} component={modalComponent} handleClose={() => setHandleModal(false)} />
    </div>
  );
};

export default Navbar;
