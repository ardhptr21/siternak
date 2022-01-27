import Shop from '../../../components/Shop';
import ShopCreation from '../../../components/ShopCreation';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const StorePage = () => {
  const user = useSelector((state) => state.user);
  const { search } = useLocation();
  const fromUserProfile = new URLSearchParams(search).get('from') === 'user-profile';

  return user.role === 0 && user.isSeller ? <Shop /> : <ShopCreation isRenderForm={fromUserProfile} />;
};

export default StorePage;
