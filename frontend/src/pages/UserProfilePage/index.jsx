import { useParams } from 'react-router-dom';
import UserPage from './UserPage';
import SideMenu from './SideMenu';
import TransactionList from './TransactionList';
import DeliveryList from './DeliveryList';
import StorePage from './StorePage';
import DashboardCreateProduct from './DashboardCreateProduct';
import DashboardProduct from './DashboardProduct';
import CategoryList from './CategoryList';
import CategoryCreate from './CategoryCreate';

const UserProfile = () => {
  let { type } = useParams();

  return (
    <div className="mt-3">
      <div
        className="grid mycontainer mobile:mycontainerfull py-7 gap-x-7"
        style={{ gridTemplateColumns: '1.2fr 5fr' }}
      >
        <div>
          <SideMenu />
        </div>
        {type === 'bio' && <UserPage />}
        {type === 'toko' && <StorePage />}
        {type === 'tambah-produk' && <DashboardCreateProduct />}
        {type === 'produk' && <DashboardProduct />}
        {type === 'pengiriman' && <DeliveryList />}
        {type === 'pesanan' && <TransactionList />}
        {type === 'kategori' && <CategoryList />}
        {type === 'tambah-kategori' && <CategoryCreate />}
      </div>
    </div>
  );
};

export default UserProfile;
