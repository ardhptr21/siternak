import React, { useState } from 'react';
import { staticConst } from '../../static/staticConst';
import CardItemShop from '../../components/CardItemShop';
const data = staticConst.stasticCardData[11];

const Cart = () => {
  const [totalQty, setTotalQty] = useState(1);

  return (
    <div className="text-gray-900 __montserat-text">
      <div className="mt-12">
        <div className="mycontainer-sm mobile:mycontainerfull gap-x-8">
          <h1 className="font-semibold">Keranjang</h1>
          <div className="grid mt-4 gap-x-4">
            <div className="mb-10 border rounded-md">
              <CardItemShop
                qtyOn={totalQty}
                data={data}
                minQty={(val) => setTotalQty(val)}
                plusQty={(val) => setTotalQty(val)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
