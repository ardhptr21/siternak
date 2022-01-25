import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Input from '../Input';
import { staticConst } from '../../static/staticConst';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { MdStorefront } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal';
import Login from '../Login';
import { useEffect } from 'react';

const { categoriesOptions } = staticConst;

const Navbar = () => {
  const navigation = useNavigate();
  const [handleModal, setHandleModal] = useState(false);
  const user = useSelector((state) => state.user);

  const [modalComponent, setModalComponent] = useState(null);

  useEffect(() => {
    setModalComponent(<Login setModalComponent={setModalComponent} setHandleModal={setHandleModal} />);
  }, []);

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
        <Link to="/">
          <img src="/assets/logo_si_ternak.png" alt="Logo" className="w-16" />
        </Link>
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
              <Link
                to="/user-profile/bio"
                className="flex items-center justify-center gap-5 px-5 py-2 border-2 rounded-md"
              >
                <div className="relative inline-block cursor-pointer ">
                  <MdStorefront className="text-xl" />
                </div>
                <div className="relative inline-block cursor-pointer">
                  <CgProfile className="text-xl" />
                </div>
              </Link>
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
