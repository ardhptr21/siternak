import { useParams } from 'react-router-dom';
import UserPage from './UserPage';
import SideMenu from './SideMenu';
import TransactionList from './TransactionList';
import TabsDashboard from './TabsDashboard';
import StorePage from './StorePage';
import DashboarSeller from './DashboardSeller';
import DashboardPages from './DashboardPages';
import DashboardCreateProduct from './DashboardCreateProduct';
import DashboardProduct from './DashboardProduct';

// status 1 = user biasa, selain itu seller

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
        {type === 'pengiriman' && <TabsDashboard />}
        {type === 'dashboard_seller' && <DashboarSeller />}
        {type === 'pesanan' && <TransactionList />}
        {type === 'dashboard_content' && <DashboardPages />}
      </div>
    </div>
  );
};

export default UserProfile;
