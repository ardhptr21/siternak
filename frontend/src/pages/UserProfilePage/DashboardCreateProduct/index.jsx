import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';
import DashboardPages from '../DashboardPages';
import { BsImages } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategories } from '../../../actions/categories/categoriesActions';
import { addProduct, updateProduct } from '../../../actions/products/productsActions';

const DashboardCreateProduct = () => {
  const categories = useSelector((state) => state.categories);
  const shop = useSelector((state) => state.shop);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const product = useLocation()?.state?.product;

  const [imageData, setImageData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const initialProductDataState = {
    category_id: product?._categoryId || categories[0]?._id,
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    stock: product?.stock || 0,
  };

  const [productData, setProductData] = useState(initialProductDataState);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageDataChange = (e) => {
    const file = e.target.files[0];
    setImageData(file);
    changeImagePreview(file);
  };

  const changeImagePreview = (image) => {
    const blob = URL.createObjectURL(image);
    setImagePreview(blob);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    imageData && formData.append('image', imageData);
    Object.keys(productData).forEach((key) => {
      formData.append(key, productData[key]);
    });

    if (!Object.keys(product).length === 0) {
      formData.append('shop_id', shop._id);
      dispatch(addProduct(formData, user.token));
    } else {
      dispatch(updateProduct(product._id, formData, user.token));
    }

    setImageData(null);
    setImagePreview(null);
    navigation('/user-profile/produk', { replace: true });
  };

  const cancelImage = () => {
    setImageData(null);
    setImagePreview(null);
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <DashboardPages>
      <form className="mx-auto w-450" onSubmit={handleSubmit}>
        <div className="flex justify-center py-4">
          <div className="flex p-2 bg-gray-200 border-2 border-gray-300 rounded-full md:p-4">
            <FiPackage />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-xl font-bold text-gray-600 md:text-2xl">{product ? 'Perbarui' : 'Tambah'} Produk</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Nama Produk</label>
          <input
            className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Deskripsi Produk</label>
          <textarea
            className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            type="text"
            rows={8}
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-1">
          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Harga Produk</label>
            <input
              className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Stok Produk</label>
            <input
              className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              type="number"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="text-xs font-semibold text-gray-500 md:text-sm text-light">Kategori Produk</label>
          <select
            className="px-3 py-2 mt-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            onChange={handleChange}
            name="category_id"
            defaultValue={productData.category_id}
          >
            {categories.map((category, index) => (
              <option value={category._id} key={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="mb-1 text-xs font-semibold text-gray-500 md:text-sm text-light">Foto Toko</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 group">
              <div className="flex flex-col items-center justify-center pt-7">
                <BsImages className="w-10 h-10 text-gray-400 hover:text-gray-600" />
                <p className="pt-1 text-sm tracking-wider text-gray-400 lowercase group-hover:text-gray-600">
                  pilih foto
                </p>
              </div>
              <input type="file" onChange={handleImageDataChange} className="hidden" />
            </label>
          </div>
        </div>

        {(imagePreview || product?.image) && (
          <div className="mt-5 mx-7">
            <img src={imagePreview || product?.image} className="w-full p-2 border-2 border-black" alt="preview" />
            {product && imagePreview && (
              <button className="bg-subtitle mt-2 rounded px-3 py-1 text-white text-sm" onClick={cancelImage}>
                Batal
              </button>
            )}
          </div>
        )}

        <div className="mt-5 mx-7">
          <button
            className="w-full px-4 py-2 font-medium text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-700"
            type="submit"
          >
            {product ? 'Perbarui' : 'Tambah'}
          </button>
        </div>
      </form>
    </DashboardPages>
  );
};

export default DashboardCreateProduct;
