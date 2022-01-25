import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/user/userActions';
import Login from '../Login';

const Register = ({ setModalComponent, setHandleModal }) => {
  const dispatch = useDispatch();

  const [dataRegister, setDataRegister] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    telephone: '',
    province: '',
    city: '',
    district: '',
    detail: '',
  });

  const handleRegister = (e) => {
    dispatch(registerUser(dataRegister));
    setModalComponent(<Login setModalComponent={setModalComponent} setHandleModal={setHandleModal} />);
    e.preventDefault();
  };

  const handleRegisterChange = (e) => {
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
  };

  return (
    <form className="px-10 py-6 bg-white rounded-md max-w-max __montserat-text" onSubmit={handleRegister}>
      <h1 className="pt-4 text-2xl font-bold text-center">Register</h1>
      <p className="text-xs text-center text-subtitle">
        Sudah Punya Akun?{' '}
        <span
          className="cursor-pointer text-warning"
          onClick={() =>
            setModalComponent(<Login setModalComponent={setModalComponent} setHandleModal={setHandleModal} />)
          }
        >
          Masuk
        </span>
      </p>
      <div className="mb-7 mt-7">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Nama</label>
          <div>
            <input
              type="text"
              name="name"
              value={dataRegister.name}
              onChange={handleRegisterChange}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Username</label>
          <div>
            <input
              type="text"
              name="username"
              value={dataRegister.username}
              onChange={handleRegisterChange}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">No Telephone</label>
          <div>
            <input
              type="tel"
              name="telephone"
              value={dataRegister.telephone}
              onChange={handleRegisterChange}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Province</label>
          <div>
            <input
              type="text"
              name="province"
              value={dataRegister.province}
              onChange={handleRegisterChange}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">City</label>
          <div>
            <input
              type="text"
              name="city"
              value={dataRegister.city}
              onChange={handleRegisterChange}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">District</label>
          <div>
            <input
              type="text"
              name="district"
              value={dataRegister.district}
              onChange={handleRegisterChange}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">Detail</label>
          <div>
            <textarea
              type="text"
              name="detail"
              value={dataRegister.detail}
              onChange={handleRegisterChange}
              className="relative h-40 px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col pt-0 mb-3">
          <label className="text-sm font-medium text-subtitle">Email</label>
          <input
            type="email"
            name="email"
            value={dataRegister.email}
            onChange={handleRegisterChange}
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
              name="password"
              value={dataRegister.password}
              onChange={handleRegisterChange}
              className="relative px-3 py-3 pl-20 mt-2 text-sm bg-white border border-gray-200 rounded outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring-0 focus:border-gray-400"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-9">
          <button
            className="ml-2 w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded"
            type="submit"
          >
            Daftar
          </button>
        </div>
        <p className="mt-5 text-xs text-center text-subtitle">
          Butuh bantuan? <span className="cursor-pointer text-warning">Hubungi ITernak Care</span>
        </p>
      </div>
    </form>
  );
};

export default Register;
