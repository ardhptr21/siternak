import DashboardPages from '../DashboardPages';
import Card from '../../../components/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteProduct } from '../../../actions/products/productsActions';
import { useDispatch } from 'react-redux';

const DashboardProduct = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const shop = useSelector((state) => state.shop);
  const [ownProducts, setOwnProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((product) => product._shopId === shop._id);
    setOwnProducts(data);
  }, [products, shop]);

  const onDeleteHandler = (product_id) => {
    const isDelete = window.confirm('Yakin ingin menghapus product ini?');

    if (isDelete) {
      dispatch(deleteProduct(product_id, user.token));
    }
  };

  return (
    <DashboardPages>
      <div className="mb-11">
        <div className="font-semibold">Semua Produk Saya</div>
        <div className="text-sm text-subtitle">Kelola semua produk yang anda punya disini</div>
      </div>
      <div className="grid justify-center grid-cols-3">
        {ownProducts.map((product) => (
          <Card
            key={product._id}
            product={product}
            className="mb-4"
            isAdmin={true}
            onDeleteEvent={() => onDeleteHandler(product._id)}
          />
        ))}
      </div>
    </DashboardPages>
  );
};

export default DashboardProduct;
