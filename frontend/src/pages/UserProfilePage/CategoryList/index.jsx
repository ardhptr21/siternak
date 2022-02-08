import Table from '../../../components/Table';
import Th from '../../../components/Th';
import Td from '../../../components/Td';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import DashboardPages from '../DashboardPages';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../../../actions/categories/categoriesActions';
import { getAllCategories } from '../../../actions/categories/categoriesActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <DashboardPages>
      <div className="mb-11">
        <div className="font-semibold">Kategori Produk</div>
        <div className="text-sm text-subtitle">Kelola semua kategori untuk setiap produk</div>
      </div>
      <Table head={<Head />} body={<Body />} />
    </DashboardPages>
  );
};

const Head = () => {
  return (
    <tr>
      <Th>NO</Th>
      <Th>NAME</Th>
      <Th>DESCRIPTION</Th>
      <Th>ACTION</Th>
    </tr>
  );
};

const Body = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleDelete = (category_id) => {
    const isDelete = window.confirm('Are you sure want to delete this category?');
    if (!isDelete) return false;
    dispatch(deleteCategory(category_id, user.token));
  };

  return categories.map((category, idx) => (
    <tr key={idx}>
      <Td>{idx + 1}</Td>
      <Td>{category.name}</Td>
      <Td className="text-xs">{category.description}</Td>
      <Td className="flex items-center gap-5">
        <Link to="/user-profile/tambah-kategori" state={{ category }}>
          <FaEdit
            className="text-yellow-500 transition duration-300 transform cursor-pointer hover:scale-150"
            title="Edit"
          />
        </Link>
        <AiFillDelete
          className="text-red-500 transition duration-300 transform cursor-pointer hover:scale-150"
          title="Hapus"
          onClick={() => handleDelete(category._id)}
        />
      </Td>
    </tr>
  ));
};

export default CategoryList;
