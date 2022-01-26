import LandingPage from '../pages/LandingPage';
import ProductPage from '../pages/ProductPage';
import Cart from '../pages/Cart';
import DetailProduct from '../pages/DetailProduct';
import Checkout from '../pages/Checkout';
import UserProfile from '../pages/UserProfilePage';
import Auth from '../middlewares/Auth';

const routeList = [
  {
    name: 'Landing Page',
    path: '/',
    exact: true,
    component: <LandingPage />,
    permission: false,
  },
  {
    name: 'Product Page',
    path: '/product_page',
    exact: true,
    component: <ProductPage />,
    permission: false,
  },
  {
    name: 'Detail Page',
    path: '/detail_product/:id',
    exact: true,
    component: <DetailProduct />,
    permission: false,
  },
  {
    name: 'Cart Page',
    path: '/my-cart',
    exact: true,
    component: (
      <Auth>
        <Cart />
      </Auth>
    ),
    permission: true,
  },
  {
    name: 'Checkout Page',
    path: '/checkout',
    exact: true,
    component: (
      <Auth>
        <Checkout />
      </Auth>
    ),
    permission: true,
  },
  {
    name: 'Dashboard User',
    path: '/user-profile/:type',
    exact: true,
    component: (
      <Auth>
        <UserProfile />
      </Auth>
    ),
    permission: true,
  },
];

export default routeList;
