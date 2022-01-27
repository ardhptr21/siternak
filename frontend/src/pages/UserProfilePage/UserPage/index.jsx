import React, { useState } from 'react';
import { BsPencil, BsCheckLg } from 'react-icons/bs';
import { AiOutlineShop } from 'react-icons/ai';
import { IoMdLogOut } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser, updateUserPhoto } from '../../../actions/user/userActions';
import DashboardData from '../../../components/DashboardData';
import DashboardDataContainer from '../../../components/DashboardDataContainer';
import { updateUser } from '../../../actions/user/userActions';

const UserPage = () => {
  const navigation = useNavigate();
  const [isEdit, setEdit] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const defaultUserDataState = useMemo(() => {
    return {
      name: user.name,
      email: user.email,
      telephone: user.telephone,
      province: user.address.province,
      city: user.address.city,
      district: user.address.district,
      detail: user.address.detail,
    };
  }, [user]);

  const [userData, setUserData] = useState(defaultUserDataState);

  const handleEditForm = () => {
    setEdit(!isEdit);
  };

  useEffect(() => {
    setUserData(defaultUserDataState);
  }, [isEdit, defaultUserDataState]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdateUserData = () => {
    dispatch(updateUser(userData, user._id, user.token));
    setEdit(false);
  };

  const handleUpdateUserPhotoData = (e) => {
    const formData = new FormData();
    formData.append('photo', e.target.files[0]);
    dispatch(updateUserPhoto(formData, user._id, user.token));
    setEdit(false);
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
          <div>
            <label htmlFor="photo" className={`relative${isEdit && ' cursor-pointer'}`}>
              <img
                src={user.photo || '/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png'}
                alt="profile_pict"
                className="object-cover w-48 h-48 border rounded-md"
              />
              {isEdit && (
                <div className="absolute top-0 left-0 flex items-center justify-center w-48 h-48 bg-black rounded opacity-80">
                  <FaUserEdit className="w-32 h-32 text-white" />
                </div>
              )}
            </label>
            {isEdit && (
              <small className="inline-block w-48 mt-2 text-xs text-gray-400">
                *Otomatis diperbarui ketika anda memilih foto baru
              </small>
            )}
            {isEdit && (
              <input
                type="file"
                name="photo"
                className="hidden"
                id="photo"
                required
                onChange={handleUpdateUserPhotoData}
              />
            )}
            <div className="mt-5 space-y-5">
              <button
                onClick={handleEditForm}
                className="ml-2 bg-transparent flex justify-center gap-2 hover:text-white transition hover:bg-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border border-textDefault rounded-full w-full"
              >
                {isEdit && 'Batal '}Edit Profile
                <span>
                  <BsPencil className="ml-2 text-sm" />
                </span>
              </button>
              {!user.isSeller && (
                <Link
                  className="block"
                  to={{
                    pathname: '/user-profile/toko',
                    search: '?from=user-profile',
                  }}
                >
                  <button
                    onClick={handleEditForm}
                    className="ml-2 bg-transparent flex justify-center gap-2 transition items-center text-sm font-medium text-green-400 border-green-400 hover:bg-green-400 border hover:text-white py-1.5 px-3 rounded-full w-full"
                  >
                    Buka Toko
                    <span>
                      <AiOutlineShop className="ml-2 text-sm" />
                    </span>
                  </button>
                </Link>
              )}
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
              <DashboardData title="Nama" value={userData.name} isEdit={isEdit} onChange={handleChange} name="name" />
              <DashboardData
                title="Email"
                value={userData.email}
                isEdit={isEdit}
                onChange={handleChange}
                name="email"
              />
              <DashboardData
                title="Telepon"
                value={userData.telephone}
                isEdit={isEdit}
                onChange={handleChange}
                name="telephone"
              />
            </DashboardDataContainer>
            <DashboardDataContainer title="Alamat" margin="mt-5">
              <DashboardData
                title="Provinsi"
                value={userData.province}
                isEdit={isEdit}
                onChange={handleChange}
                name="province"
              />
              <DashboardData
                title="Kota/Kab"
                value={userData.city}
                isEdit={isEdit}
                onChange={handleChange}
                name="city"
              />
              <DashboardData
                title="Kecamatan"
                value={userData.district}
                isEdit={isEdit}
                onChange={handleChange}
                name="district"
              />
              <DashboardData
                title="Detail"
                value={userData.detail}
                isEdit={isEdit}
                onChange={handleChange}
                isTextarea={true}
                name="detail"
              />
              {isEdit && (
                <button
                  className="bg-transparent mt-32 flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
                  onClick={handleUpdateUserData}
                >
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
