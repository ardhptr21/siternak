import DashboardPages from '../DashboardPages';
import { BiCategoryAlt } from 'react-icons/bi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../../actions/categories/categoriesActions';
import { useNavigate } from 'react-router-dom';

const CategoryCreate = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();

  const [categoryData, setCategoryData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(categoryData, user.token));
    setTimeout(() => {
      navigation('/user-profile/kategori', { replace: true });
    }, 1000);
  };

  return (
    <DashboardPages>
      <form className="mx-auto w-450" onSubmit={handleSubmit}>
        <div className="flex justify-center py-4">
          <div className="flex p-2 bg-gray-200 border-2 border-gray-300 rounded-full md:p-4">
            <BiCategoryAlt />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-xl font-bold text-gray-600 md:text-2xl">Tambah Kategori</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Nama Kategori</label>
          <input
            className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            type="text"
            name="name"
            value={categoryData.name}
            onChange={handleChange}
            placeholder="Pakan Ayam"
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Deskripsi Kategori</label>
          <textarea
            className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            type="text"
            rows={8}
            name="description"
            value={categoryData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mt-5 mx-7">
          <button
            className="w-full px-4 py-2 font-medium text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-700"
            type="submit"
          >
            Tambah
          </button>
        </div>
      </form>
    </DashboardPages>
  );
};

export default CategoryCreate;
