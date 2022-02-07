import Table from '../../../components/Table';
import Th from '../../../components/Th';
import Td from '../../../components/Td';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import DashboardPages from '../DashboardPages';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../actions/categories/categoriesActions';
import { useEffect } from 'react';

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

  return categories.map((category, idx) => (
    <tr>
      <Td>{idx + 1}</Td>
      <Td>{category.name}</Td>
      <Td className="text-xs">{category.description}</Td>
      <Td className="flex items-center gap-5">
        <FaEdit
          className="text-yellow-500 transition duration-300 transform cursor-pointer hover:scale-150"
          title="Edit"
        />
        <AiFillDelete
          className="text-red-500 transition duration-300 transform cursor-pointer hover:scale-150"
          title="Hapus"
        />
      </Td>
    </tr>
  ));
};

export default CategoryList;
