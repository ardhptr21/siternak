import React from "react";
import CardItemShop from "../../../components/CardItemShop";
import { staticConst } from "../../../static/staticConst";
const data = staticConst.stasticCardData[11];

const TransactionList = () => {
  return (
    <div>
      <div className="rounded-lg shadow border __montserat-text border-gray-200 bg-white p-5">
        <div className="mb-11">
          <div className="border-b-2 border-gray-200 pb-4">
            <div className="font-semibold">Daftar transaksi</div>
            <div className="text-sm text-subtitle">
              Lihat semua transaksi anda
            </div>
          </div>
          <div className="py-4">
            <CardItemShop
              data={data}
              onCheckout={true}
              onTransactionList={true}
            />
            <CardItemShop
              data={data}
              onCheckout={true}
              onTransactionList={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
