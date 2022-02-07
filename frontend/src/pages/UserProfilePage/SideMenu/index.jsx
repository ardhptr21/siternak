import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import SideMenuListContainer from '../../../components/SideMenuListContainer';
import SideMenuListItem from '../../../components/SideMenuListItem';

const SideMenu = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <div className="py-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
      <div
        className="flex items-center px-5 pb-5 border-b-8 border-gray-200 cursor-pointer"
        onClick={() => navigate('/user-profile/bio', { replace: true })}
      >
        <img
          src={user.photo || '/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png'}
          alt="profile_pict"
          className="object-cover rounded-full w-11 h-11"
        />
        <div>
          <div>
            <div className="ml-2 text-sm font-semibold">{user.name}</div>
            <div className="ml-2 text-xs text-gray-500">{user.email}</div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <SideMenuListContainer title="Menu">
          <SideMenuListItem path="/user-profile/bio" name="Profile" />
          <SideMenuListItem path="/user-profile/toko" name="Toko" />
        </SideMenuListContainer>
        <SideMenuListContainer title="Produk">
          <SideMenuListItem path="/user-profile/produk" name="Produk Saya" />
          <SideMenuListItem path="/user-profile/tambah-produk" name="Tambah Produk" />
        </SideMenuListContainer>
        <SideMenuListContainer title="Transaksi">
          <SideMenuListItem path="/user-profile/pengiriman" name="Pengiriman" />
          <SideMenuListItem path="/user-profile/pesanan" name="Pesanan" />
        </SideMenuListContainer>
      </div>
    </div>
  );
};

export default SideMenu;
