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

const DeliveryList = () => {
  const [content, setContent] = useState(0);
  const shop = useSelector((state) => state.shop);
  const deliveries = useSelector((state) => state.transaction).filter(
    (transaction) => transaction._shopId === shop._id
  );

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useState(() => {
    dispatch(getAllTransactions(user.token));
  }, []);

  return (
    <div className="space-y-5">
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
        <div className="font-semibold">Daftar Pengiriman</div>
        <div className="text-sm text-subtitle">Lihat semua pengiriman anda</div>
      </div>
      <TabsDashboard setContent={setContent}>
        <div className="py-4">
          <Table head={<Head />} body={<Body deliveries={deliveries} />} />
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

const Body = ({ deliveries }) => {
  const products = useSelector((state) => state.products);

  const getProduct = (product_id) => {
    return products.find((product) => product._id === product_id);
  };

  return deliveries.map((delivery, idx) => (
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

export default DeliveryList;
