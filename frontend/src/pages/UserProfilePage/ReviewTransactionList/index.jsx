import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parseStatus from '../../../utils/parseStatus';
import Table from '../../../components/Table';
import Th from '../../../components/Th';
import Td from '../../../components/Td';
import TabsDashboard from '../TabsDashboard';
import { getAllTransactions } from '../../../actions/transaction/transactionActions';
import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Admin from '../../../middlewares/Admin';
import { useEffect } from 'react';

const ReviewTransactionList = () => {
  const [content, setContent] = useState(0);

  const initialTransactions = useSelector((state) => state.transaction).sort((a, b) => {
    if (a.status === 1) return -1;
    if (b.status === 1) return 1;
    return 0;
  });
  const [transactions, setTransactions] = useState(initialTransactions);

  useEffect(() => {
    if (content === 0) {
      setTransactions(initialTransactions);
    } else {
      const filtering = initialTransactions.filter((transaction) => transaction.status + 1 === content);
      setTransactions(filtering);
    }
  }, [content, initialTransactions]);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useState(() => {
    dispatch(getAllTransactions(user.token));
  }, []);

  return (
    <Admin>
      <div className="space-y-5">
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
          <div className="font-semibold">Review Transaksi</div>
          <div className="text-sm text-subtitle">Disini anda sebagai admin dapat melihat semua transaksi yang ada</div>
        </div>
        <TabsDashboard setContent={setContent} content={content}>
          <div className="py-4">
            <Table head={<Head />} body={<Body transactions={transactions} />} />
          </div>
        </TabsDashboard>
      </div>
    </Admin>
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

const Body = ({ transactions }) => {
  const products = useSelector((state) => state.products);

  const getProduct = (product_id) => {
    return products.find((product) => product._id === product_id);
  };

  return transactions.map((delivery, idx) => (
    <tr>
      <Td>{idx + 1}</Td>
      <Td>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-16 h-16">
            <img
              className="w-16 h-16 rounded-full"
              src={getProduct(delivery._productId).image}
              alt={getProduct(delivery._productId).name}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 max-w-px __text-elipsis-one-line">
              {getProduct(delivery._productId).name}
            </div>
          </div>
        </div>
      </Td>
      <Td>{parseStatus(delivery.status)}</Td>
      <Td>Rp {Intl.NumberFormat('en-US').format(delivery.total_price)}</Td>
      <Td>{delivery.quantity}</Td>
      <Td>
        <Link to={`/checkout/${delivery._id}`}>
          <BsBoxArrowUpRight className="hover:text-info" />
        </Link>
      </Td>
    </tr>
  ));
};

export default ReviewTransactionList;
