import React, { useState } from 'react';
import CardItemShop from '../../../components/CardItemShop';
import TabsDashboard from '../TabsDashboard';
import { getTheBuyer } from '../../../actions/transaction/transactionActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TransactionList = () => {
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.transaction).orders;
  const [content, setContent] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheBuyer(user._id, user.token));
  }, [user, dispatch]);

  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <div className="space-y-5">
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
        <div className="font-semibold">Daftar transaksi</div>
        <div className="text-sm text-subtitle">Lihat semua transaksi anda</div>
      </div>
      <TabsDashboard setContent={setContent}>
        <div className="py-4">
          {orders.map((data) => (
            <CardItemShop data={data} key={data._id} isInTransaction={true} />
          ))}
        </div>
      </TabsDashboard>
    </div>
  );
};

export default TransactionList;
