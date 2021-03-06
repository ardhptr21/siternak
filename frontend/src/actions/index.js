import store from '../store';
import { setProducts } from './products/productsActions';
import { getOneUser } from './user/userActions';
import { getUserStorage } from '../storage/userStorage';
import { getAllCategories } from './categories/categoriesActions';

const initAppAction = () => {
  store.dispatch(setProducts());
  store.dispatch(getAllCategories());
  const user = getUserStorage();
  if (user) {
    store.dispatch(getOneUser(user.user_id, user.token));
  }
};

export default initAppAction;
