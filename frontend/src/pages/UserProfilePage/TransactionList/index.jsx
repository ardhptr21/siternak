import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Table from '../../../components/Table';
import Th from '../../../components/Th';
import Td from '../../../components/Td';
import TabsDashboard from '../TabsDashboard';
import { getAllTransactions } from '../../../actions/transaction/transactionActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parseStatus from '../../../utils/parseStatus';

const TransactionList = () => {
  const user = useSelector((state) => state.user);
  const transactions = useSelector((state) => state.transaction);
  const [orders, setOrders] = useState([]);

  const [content, setContent] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedTransactions = transactions.filter((transaction) => transaction._buyerId === user._id);
    setOrders(selectedTransactions);
  }, [transactions, user]);

  useEffect(() => {
    dispatch(getAllTransactions(user.token));
  }, [user, dispatch]);

  return (
    <div className="space-y-5">
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
        <div className="font-semibold">Daftar Pesanan</div>
        <div className="text-sm text-subtitle">Lihat semua pesanan anda</div>
      </div>
      <TabsDashboard setContent={setContent}>
        <div className="py-4">
          <Table head={<Head />} body={<Body orders={orders} />} />
        </div>
      </TabsDashboard>
    </div>
  );
};

const Head = () => {
  return (
    <tr>
      <Th>NO</Th>
      <Th>PRODUK</Th>
      <Th>STATUS</Th>
      <Th>TOTAL HARGA</Th>
      <Th>JUMLAH</Th>
      <Th>DETAIL</Th>
    </tr>
  );
};

const Body = ({ orders }) => {
  const products = useSelector((state) => state.products);

  const getProduct = (product_id) => {
    return products.find((product) => product._id === product_id);
  };

  return orders.map((order, idx) => (
    <tr key={idx}>
      <Td>{idx + 1}</Td>
      <Td>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-16 h-16">
            <img
              className="w-16 h-16 rounded-full"
              src={getProduct(order._productId).image}
              alt={getProduct(order._productId).name}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 max-w-px __text-elipsis-one-line">
              {getProduct(order._productId).name}
            </div>
          </div>
        </div>
      </Td>
      <Td>{parseStatus(order.status)}</Td>
      <Td>Rp {Intl.NumberFormat('en-US').format(order.total_price)}</Td>
      <Td>{order.quantity}</Td>
      <Td>
        <Link to={`/checkout/${order._id}`}>
          <BsBoxArrowUpRight className="hover:text-info" />
        </Link>
      </Td>
    </tr>
  ));
};

export default TransactionList;
