import React, { useState } from 'react';
import { BsPencil, BsCheckLg } from 'react-icons/bs';
import { IoMdLogOut } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../actions/user/userActions';
import { useNavigate } from 'react-router-dom';
import DashboardData from '../../../components/DashboardData';
import DashboardDataContainer from '../../../components/DashboardDataContainer';

const UserPage = () => {
  const navigation = useNavigate();
  const [isEdit, setEdit] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleEditForm = () => {
    setEdit(!isEdit);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation('/');
  };

  return (
    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
      <div className="mb-11">
        <div className="font-semibold">Profile Saya</div>
        <div className="text-sm text-subtitle">
          Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun
        </div>
      </div>
      <div className="flex justify-between pb-16 border-b-8 border-gray-200">
        <div className="flex">
          <div className={!isEdit && 'w-850'}>
            <img
              src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
              alt="profile_pict"
              className="object-cover w-48 h-48 rounded-md"
            />
            <div className="mt-5 space-y-5">
              <button
                onClick={handleEditForm}
                className="ml-2 bg-transparent flex justify-center gap-2 hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full w-full"
              >
                Edit Profile
                <span>
                  <BsPencil className="ml-2 text-sm" />
                </span>
              </button>
              <button
                className="ml-2 bg-transparent flex justify-center gap-2 hover:bg-red-500 hover:text-white transition items-center text-sm font-medium text-red-500 py-1.5 px-3 border border-red-500 rounded-full w-full"
                onClick={handleLogout}
              >
                Logout
                <span>
                  <IoMdLogOut className="ml-2 text-sm" />
                </span>
              </button>
            </div>
          </div>
          <div className="ml-12">
            <DashboardDataContainer title="Biodata">
              <DashboardData title="Nama" value={user.name} isEdit={isEdit} />
              <DashboardData title="Email" value={user.email} isEdit={isEdit} />
              <DashboardData title="Telepon" value={user.telephone} isEdit={isEdit} />
            </DashboardDataContainer>
            <DashboardDataContainer title="Alamat" margin="mt-5">
              <DashboardData title="Provinsi" value={user.address.province} isEdit={isEdit} />
              <DashboardData title="Kota/Kab" value={user.address.city} isEdit={isEdit} />
              <DashboardData title="Kecamatan" value={user.address.district} isEdit={isEdit} />
              <DashboardData title="Detail" value={user.address.detail} isEdit={isEdit} isTextarea={true} />
              {isEdit && (
                <button className="bg-transparent mt-32 flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full">
                  SIMPAN
                  <span>
                    <BsCheckLg className="ml-2 text-sm" />
                  </span>
                </button>
              )}
            </DashboardDataContainer>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="max-w-screen-sm text-xs font-medium text-center text-gray-400">
          Pengguna terdaftar sesuai degan <span className="text-warning">syarat dan Kondisi</span> yang berlaku ITernak,
          apabila membutuhkan bantuan silahkan menghubungi <span className="text-warning">IternakCare</span>{' '}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
