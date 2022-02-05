import React from 'react';
import CardItemShop from '../../../components/CardItemShop';

const TransactionList = () => {
  return (
    <div>
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
        <div className="mb-11">
          <div className="pb-4 border-b-2 border-gray-200">
            <div className="font-semibold">Daftar transaksi</div>
            <div className="text-sm text-subtitle">Lihat semua transaksi anda</div>
          </div>
          <div className="py-4">
            {[].map((data) => (
              <CardItemShop data={data} key={data._id} isInTransaction={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
