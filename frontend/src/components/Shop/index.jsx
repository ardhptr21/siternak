import { useEffect, useMemo, useState } from 'react';
import { BsCheckLg, BsPencil } from 'react-icons/bs';
import ImageDashboard from '../ImageDashboard';
import DashboardDataContainer from '../DashboardDataContainer';
import DashboardData from '../DashboardData';
import { useDispatch, useSelector } from 'react-redux';
import { shopImageUpdate, updateShop } from '../../actions/shops/shopActions';

const Shop = () => {
  const shop = useSelector((state) => state.shop);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);

  const defaultShopDataState = useMemo(() => {
    return {
      name: shop.name,
      description: shop.description,
    };
  }, [shop]);

  const [shopData, setShopData] = useState(defaultShopDataState);

  useEffect(() => {
    setShopData(defaultShopDataState);
  }, [isEdit, defaultShopDataState]);

  const handleEditForm = () => {
    setEdit(!isEdit);
  };

  const handleChange = (e) => {
    setShopData({ ...shopData, [e.target.name]: e.target.value });
  };

  const handleUpdateShopData = () => {
    dispatch(updateShop(shopData, shop._id, user.token));
    setEdit(false);
  };

  const handleUpdateShopPhotoData = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    dispatch(shopImageUpdate(formData, shop._id, user.token));
    setEdit(false);
  };

  return (
    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
      <div className="mb-11">
        <div className="font-semibold">Profile Toko</div>
        <div className="text-sm text-subtitle">Lihat status toko dan update profil toko Anda</div>
      </div>
      <div className="flex justify-between pb-16 border-b-8 border-gray-200">
        <div className="flex">
          <div>
            <div className="w-48">
              <ImageDashboard
                isEdit={isEdit}
                image={shop.image}
                name="photo"
                handleChange={handleUpdateShopPhotoData}
              />
            </div>
            <div className="mt-5 space-y-5">
              <button
                onClick={handleEditForm}
                className="ml-2 bg-transparent flex justify-center gap-2 hover:text-white transition hover:bg-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border border-textDefault rounded-full w-full"
              >
                {isEdit && 'Batal '}Edit Toko
                <span>
                  <BsPencil className="ml-2 text-sm" />
                </span>
              </button>
            </div>
          </div>
          <div className="ml-12">
            <DashboardDataContainer title="Info Toko" margin="mt-5">
              <DashboardData title="Nama" value={shopData.name} isEdit={isEdit} onChange={handleChange} name="name" />
              <DashboardData
                title="Deskripsi"
                value={shopData.description}
                isEdit={isEdit}
                onChange={handleChange}
                name="description"
                isTextarea={true}
              />

              {isEdit && (
                <button
                  className="bg-transparent mt-32 flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
                  onClick={handleUpdateShopData}
                >
                  SIMPAN
                  <span>
                    <BsCheckLg className="ml-2 text-sm" />
                  </span>
                </button>
              )}
            </DashboardDataContainer>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="max-w-screen-sm text-xs font-medium text-center text-gray-400">
          Pengguna terdaftar sesuai degan <span className="text-warning">syarat dan Kondisi</span> yang berlaku ITernak,
          apabila membutuhkan bantuan silahkan menghubungi <span className="text-warning">IternakCare</span>{' '}
        </div>
      </div>
    </div>
  );
};

export default Shop;
