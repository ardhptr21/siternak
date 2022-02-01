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
  },
  {
    name: 'Product Page',
    path: '/product_page',
    exact: true,
    component: <ProductPage />,
  },
  {
    name: 'Detail Page',
    path: '/detail-product/:slug',
    exact: true,
    component: <DetailProduct />,
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
  },
];

export default routeList;
