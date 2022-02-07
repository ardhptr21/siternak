import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Admin = ({ children }) => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();

  useEffect(() => {
    if (!(user && user.isLoggedIn && user.token !== '' && user.role === 2)) {
      navigation('/');
    }
  }, [user, navigation]);

  return children;
};

export default Admin;
