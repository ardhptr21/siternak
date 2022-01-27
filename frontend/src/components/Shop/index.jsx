import { useState } from 'react';
import { BsCheckLg, BsPencil } from 'react-icons/bs';

const Shop = () => {
  const [isEdit, setEdit] = useState(false);
  const handleEditForm = () => {
    setEdit(!isEdit);
  };

  return (
    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
      <div className="mb-11">
        <div className="font-semibold">Profile Toko</div>
        <div className="text-sm text-subtitle">Lihat status toko dan update profil toko Anda</div>
      </div>
      <div className="flex justify-between pb-16 border-b-8 border-gray-200">
        <div className="flex">
          <div>
            <img
              src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
              alt="profile_pict"
              className="object-cover w-48 h-48 rounded-md"
            />
            <div className="mt-5">
              <button
                onClick={handleEditForm}
                className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
              >
                Edit Profile
                <span>
                  <BsPencil className="ml-2 text-sm" />
                </span>
              </button>
            </div>
          </div>
          <div className="ml-12">
            <div>
              <div className="font-semibold">Nama Toko</div>
              {isEdit ? (
                <input
                  value={'GENTON SHOP'}
                  type="search"
                  className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  mt-2 mb-5
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                  id="exampleSearch"
                  placeholder="Pencarian"
                />
              ) : (
                <div className="mt-2 mb-5">GENTON SHOP</div>
              )}
            </div>
            <div>
              <div className="font-semibold">Deskripsi Gambar</div>
              {isEdit ? (
                <div className="flex items-center justify-center w-full mt-2 mb-5 bg-grey-lighter">
                  <label className="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-white border rounded-lg shadow-lg cursor-pointer text-blue border-blue">
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              ) : (
                <img
                  src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
                  alt="profile_picture"
                  className="object-cover w-64 h-32 mt-2 mb-5"
                />
              )}
            </div>
            <div>
              <div className="font-semibold">Deskripsi Toko</div>
              {isEdit ? (
                <input
                  value={'GENTON SHOP'}
                  type="search"
                  className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  mt-2 mb-5
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                  id="exampleSearch"
                  placeholder="Pencarian"
                />
              ) : (
                <div className="mt-2 mb-5">GENTON SHOP</div>
              )}
            </div>

            {isEdit && (
              <button className="bg-transparent mt-32 flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full">
                SIMPAN
                <span>
                  <BsCheckLg className="ml-2 text-sm" />
                </span>
              </button>
            )}
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

export default Shop;
