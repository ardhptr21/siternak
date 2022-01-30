import DashboardPages from '../DashboardPages';
import Card from '../../../components/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const DashboardProduct = () => {
  const products = useSelector((state) => state.products);
  const shop = useSelector((state) => state.shop);
  const [ownProducts, setOwnProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((product) => product._shopId === shop._id);
    setOwnProducts(data);
  }, [products, shop]);

  return (
    <DashboardPages>
      <div className="mb-11">
        <div className="font-semibold">Semua Produk Saya</div>
        <div className="text-sm text-subtitle">Kelola semua produk yang anda punya disini</div>
      </div>
      <div className="grid justify-center grid-cols-3">
        {ownProducts.map((product) => (
          <Card key={product._id} product={product} className="mb-4" isAdmin={true} />
        ))}
      </div>
    </DashboardPages>
  );
};

export default DashboardProduct;
