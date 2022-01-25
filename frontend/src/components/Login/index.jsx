import Register from '../Register';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user/userActions';
import { useState } from 'react';

const Login = ({ setModalComponent, setHandleModal }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    setHandleModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="px-10 py-6 bg-white rounded-md max-w-max __montserat-text">
      <h1 className="pt-4 text-2xl font-bold text-center">Login</h1>
      <p className="text-xs text-center text-subtitle">
        Belum Punya Akun?{' '}
        <span
          className="cursor-pointer text-warning"
          onClick={() =>
            setModalComponent(<Register setModalComponent={setModalComponent} setHandleModal={setHandleModal} />)
          }
        >
          Register
        </span>
      </p>
      <div className="mt-4 mb-7">
        <div className="flex flex-col pt-0 mb-3">
          <label className="text-sm font-medium text-subtitle">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-3 py-3 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
            style={{ width: 330 }}
          />
          <p className="mt-1 text-xs text-gray-400">Contoh: email@tokopedia.com</p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Password</label>
          <div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 ">
          <span></span>
          <span className="mt-1 text-xs cursor-pointer text-warning">Lupa Kata Sandi ?</span>
        </div>

        <div className="flex flex-col items-center justify-center mt-9">
          <button className="ml-2 w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Masuk
          </button>
        </div>
        <p className="mt-5 text-xs text-center text-subtitle">
          Butuh bantuan? <span className="cursor-pointer text-warning">Hubungi ITernak Care</span>
        </p>
      </div>
    </form>
  );
};

export default Login;
