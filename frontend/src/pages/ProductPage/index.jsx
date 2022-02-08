import React, { useState } from 'react';
import Card from '../../components/Card';
import InputPrice from '../../components/InputPrice';
import Radio from '@material-tailwind/react/radio';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts as setProductsActions } from '../../actions/products/productsActions';
import axiosInstance from '../../axiosInstance';

const ProductPage = () => {
  const dispatch = useDispatch();

  const initialProducts = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const [products, setProducts] = useState(initialProducts);

  const [users, setUsers] = useState([]);
  const [shops, setShops] = useState([]);
  const [locations, setLocations] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState({ lower: 0, upper: 0 });

  useState(() => {
    axiosInstance
      .get('/users')
      .then((res) => {
        const users = res.data.data;
        setUsers(users);
        setLocations(users.map((user) => user.address.city));
      })
      .catch((err) => console.log(err));

    axiosInstance
      .get('/shops')
      .then((res) => {
        setShops(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // filtering
  useEffect(() => {
    let filtering = initialProducts;

    // by location
    if (locationFilter && locationFilter !== 'all_location') {
      const filteringByLocation = filtering.filter((product) => {
        const user_id = shops.find((shop) => shop._id === product._shopId)?._userId;
        const location = users.find((user) => user._id === user_id)?.address?.city;
        return location?.toLowerCase() === locationFilter;
      });

      filtering = filteringByLocation;
    }

    // by category
    if (categoryFilter && categoryFilter !== 'all_category') {
      const filteringByCategory = filtering.filter((product) => product._categoryId === categoryFilter);
      filtering = filteringByCategory;
    }

    // by price
    if (priceFilter.lower) {
      const filteringByPriceLower = filtering.filter((product) => {
        const price = product.price;
        return price >= priceFilter.lower;
      });
      filtering = filteringByPriceLower;
    }
    if (priceFilter.upper) {
      const filteringByPriceUpper = filtering.filter((product) => {
        const price = product.price;
        return price <= priceFilter.upper;
      });
      filtering = filteringByPriceUpper;
    }

    setProducts(filtering);
  }, [initialProducts, locationFilter, users, shops, categoryFilter, priceFilter]);

  useEffect(() => {
    dispatch(setProductsActions());
  }, [dispatch]);

  return (
    <div className="mt-3">
      <div
        className="grid mycontainer mobile:mycontainerfull py-7 gap-x-7"
        style={{ gridTemplateColumns: '1.2fr 5fr' }}
      >
        <div className="max-h-screen p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
          <div>
            <div>
              <p className="font-semibold text-subtitle">Price :</p>
              <InputPrice
                placeHolder="Min Price"
                handleChange={(e) => setPriceFilter({ ...priceFilter, lower: +e.target.value })}
              />
              <InputPrice
                placeHolder="Max Price"
                handleChange={(e) => setPriceFilter({ ...priceFilter, upper: +e.target.value })}
              />
            </div>
            <div>
              <p className="mt-5 font-semibold text-subtitle">Location :</p>
              <div className="mt-2 form-control">
                <form onChange={(e) => setLocationFilter(e.target?.id?.toLowerCase())}>
                  <div className="mt-2">
                    <Radio color="lightBlue" text="All" name="location" id="all_location" />
                  </div>
                  {locations.map((location, idx) => (
                    <div className="mt-2" key={idx}>
                      <Radio color="lightBlue" text={location} name="location" id={location.toLowerCase()} />
                    </div>
                  ))}
                </form>
              </div>
            </div>
            <div>
              <p className="mt-5 font-semibold text-subtitle">Category :</p>
              <div className="mt-2 form-control">
                <form onChange={(e) => setCategoryFilter(e.target.id)}>
                  <div className="mt-2">
                    <Radio color="lightBlue" text="All" name="category" id="all_category" />
                  </div>
                  {categories.map((category) => (
                    <div className="mt-2" key={category._id}>
                      <Radio color="lightBlue" text={category.name} name="category" id={category._id} />
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-h-screen mycontainer mobile:mycontainerfull">
            <div
              className="grid justify-between mt-5"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 12rem))',
                gap: '25px 15px',
              }}
            >
              {products.map((product, index) => (
                <Card product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
