import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';

const CardSlider = ({ category_id, product_id }) => {
  const products = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    const data = products.filter((product) => product._categoryId === category_id && product._id !== product_id);
    setProductsData(data);
  }, [products, category_id, product_id]);

  return (
    <div className="w-full my-28">
      <p className="px-2 py-2 text-xl font-bold border-gray-100 ">Produk Serupa</p>
      <div className="overflow-x-scroll overflow-y-hidden __styled-border-x">
        <div
          className="grid py-5 min-w-max gap-x-3"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 12rem))' }}
        >
          {productsData?.length ? (
            productsData.map((product, index) => (
              <div key={index}>
                <Card product={product} />
              </div>
            ))
          ) : (
            <p>Maaf sepertinya tidak ada produk serupa</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
