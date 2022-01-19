import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import Input from '../Input'
import { staticConst } from '../../static/staticConst'
import { RiShoppingCartLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { MdStorefront } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal'

const { categoriesOptions } = staticConst

const Navbar = () => {
  const navigation = useNavigate()
  const [handleModal, setHandleModal] = useState(false)
  const loginComponent = (
    <div className="px-10 py-6 bg-white max-w-max rounded-md __montserat-text">
      <h1 className="font-bold pt-4 text-2xl text-center">Login</h1>
      <p className="text-xs text-subtitle text-center">
        Belum Punya Akun?{' '}
        <span
          className="text-warning cursor-pointer"
          onClick={() => setModalComponent(RegisterComponent)}
        >
          Register
        </span>
      </p>
      <div className="mb-7 mt-4">
        <div class="mb-3 pt-0 flex flex-col">
          <label className="text-sm font-medium text-subtitle">
            Email / no. tlpn
          </label>
          <input
            type="text"
            class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
            style={{ width: 330 }}
          />
          <p className="text-xs text-gray-400 mt-1">
            Contoh: email@tokopedia.com
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Password</label>
          <div>
            <input
              type="text"
              className="px-3 py-3 mt-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-gray-200 outline-none focus:outline-none focus:ring-0 pl-20 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className=" flex justify-between items-center mt-3">
          <span></span>
          <span className="text-xs mt-1 text-warning cursor-pointer">
            Lupa Kata Sandi ?
          </span>
        </div>

        <div className="flex flex-col justify-center mt-9 items-center">
          <button className="ml-2 w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Masuk
          </button>
        </div>
        <p className="mt-5 text-xs text-subtitle text-center">
          Butuh bantuan?{' '}
          <span className="text-warning cursor-pointer">
            Hubungi ITernak Care
          </span>
        </p>
      </div>
    </div>
  )

  const RegisterComponent = (
    <div className="px-10 py-6 bg-white max-w-max rounded-md __montserat-text">
      <h1 className="font-bold pt-4 text-2xl text-center">Register</h1>
      <p className="text-xs text-subtitle text-center">
        Sudah Punya Akun?{' '}
        <span
          className="text-warning cursor-pointer"
          onClick={() => setModalComponent(loginComponent)}
        >
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
          <label className="text-sm font-medium text-subtitle">
            Email / no. tlpn
          </label>
          <input
            type="text"
            class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
            style={{ width: 330 }}
          />
          <p className="text-xs text-gray-400 mt-1">
            Contoh: email@tokopedia.com
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Password</label>
          <div>
            <input
              type="text"
              className="px-3 py-3 mt-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-gray-200 outline-none focus:outline-none focus:ring-0 pl-20 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-9 items-center">
          <button className="ml-2 w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Daftar
          </button>
        </div>
        <p className="mt-5 text-xs text-subtitle text-center">
          Butuh bantuan?{' '}
          <span className="text-warning cursor-pointer">
            Hubungi ITernak Care
          </span>
        </p>
      </div>
    </div>
  )

  const [modalComponent, setModalComponent] = useState(loginComponent)

  const handleSearch = (e) => {
    const pathname = window.location.pathname
    if (pathname !== '/product_page') {
      navigation('/product_page')
    }
    console.log(e.target.value)
  }

  return (
    <div className="w-screen shadow-md bg-white fixed z-20">
      <div className="mycontainer flex justify-between items-center py-0.5">
        <a href="/">
          <img src="/assets/logo_si_ternak.png" alt="Logo" className="w-16" />
        </a>
        <div className="bg-gray-100 rounded grid grid-flow-col divide-x-2 max-w-max p-1">
          <Dropdown noBorder={true} dropdownOpts={categoriesOptions} />
          <Input
            placeholder="Search"
            onChange={handleSearch}
            customStyles="bg-transparent"
          />
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="relative inline-block cursor-pointer">
            <MdStorefront className="text-xl" />
          </div>
          <div className="relative inline-block cursor-pointer">
            <CgProfile className="text-xl" />
          </div>
          <div
            className="relative inline-block cursor-pointer"
            onClick={() => navigation('my-cart', { replace: true })}
          >
            <RiShoppingCartLine className="text-xl mr-4 text-gray-700" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/2 bg-red-600 rounded-full">
              1
            </span>
          </div>
          <div onClick={() => setHandleModal(true)}>
            <img
              src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
              alt="profile_picture"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={handleModal}
        component={modalComponent}
        handleClose={() => setHandleModal(false)}
      />
    </div>
  )
}

export default Navbar
