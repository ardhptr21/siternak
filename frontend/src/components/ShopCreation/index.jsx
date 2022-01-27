import { useState } from 'react';
import { createShop } from '../../actions/user/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ShopCreation = ({ isRenderForm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [renderForm, setRenderForm] = useState(isRenderForm);
  const [shopData, setShopData] = useState({ name: '', description: '' });
  const [shopFoto, setShopFoto] = useState(null);
  const [shopFotoPreview, setShopFotoPreview] = useState(null);

  useEffect(() => {
    if (renderForm === false) {
      setShopData({});
      setShopFoto(null);
      setShopFotoPreview(null);
    }
  }, [renderForm]);

  const handleChange = (e) => {
    setShopData({ ...shopData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', shopFoto);
    formData.append('user_id', user._id);
    formData.append('name', shopData.name);
    formData.append('description', shopData.description);
    dispatch(createShop(formData, user.token));
  };

  const setPreview = (file) => {
    const blob = URL.createObjectURL(file);
    setShopFotoPreview(blob);
  };

  const handleShopFotoChange = (e) => {
    const file = e.target.files[0];
    setShopFoto(file);
    setPreview(file);
  };

  return (
    <>
      {!renderForm ? (
        <div className="flex flex-col items-center justify-start mt-14">
          <p>Uups! sepertinya anda belum membuka toko</p>
          <button className="px-5 py-2 mt-3 text-white rounded bg-primary" onClick={() => setRenderForm(true)}>
            Buka Sekarang!
          </button>
        </div>
      ) : (
        <form className="mx-auto w-433" onSubmit={handleSubmit}>
          <div className="flex justify-center py-4">
            <div className="flex p-2 bg-gray-200 border-2 border-gray-300 rounded-full md:p-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex">
              <h1 className="text-xl font-bold text-gray-600 md:text-2xl">Buka Toko</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Nama Toko</label>
            <input
              className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              type="text"
              name="name"
              value={shopData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Deskripsi Toko</label>
            <textarea
              className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              type="text"
              rows={8}
              name="description"
              value={shopData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="mb-1 text-xs font-semibold text-gray-500 md:text-sm text-light">Foto Toko</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 group">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    className="w-10 h-10 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 lowercase group-hover:text-gray-600">
                    pilih foto
                  </p>
                </div>
                <input type="file" className="hidden" onChange={handleShopFotoChange} required />
              </label>
            </div>
          </div>

          {/* image preview */}
          {shopFotoPreview && (
            <div className="grid grid-cols-1 mt-5 mx-7">
              <img src={shopFotoPreview} className="w-full p-2 border-2 border-black" alt="preview" />
            </div>
          )}

          <div className="flex items-center justify-center gap-4 pt-5 pb-5 md:gap-8">
            <button
              className="w-auto px-4 py-2 font-medium text-white bg-gray-500 rounded-lg shadow-xl hover:bg-gray-700"
              onClick={() => setRenderForm(false)}
            >
              Cancel
            </button>
            <button
              className="w-auto px-4 py-2 font-medium text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-700"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ShopCreation;
