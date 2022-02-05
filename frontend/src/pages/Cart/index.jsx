import React from 'react';
import CardItemShop from '../../components/CardItemShop';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="text-gray-900 __montserat-text">
      <div className="mt-12">
        <div className="mycontainer-sm mobile:mycontainerfull gap-x-8">
          <h1 className="font-semibold">Keranjang</h1>
          <div className="grid mt-4 gap-x-4">
            {cart.map((data) => (
              <div className="mb-10 border rounded-md" key={data._id}>
                <CardItemShop data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
