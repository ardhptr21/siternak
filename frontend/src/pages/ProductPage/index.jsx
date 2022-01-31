import React, { useState } from 'react';
import Card from '../../components/Card';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Dropdown from '../../components/Dropdown';
import { staticConst } from '../../static/staticConst';
import InputPrice from '../../components/InputPrice';
import Radio from '@material-tailwind/react/radio';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../actions/products/productsActions';

const ProductPage = () => {
  const [filterDefault, setFilterDefault] = useState(['All Product']);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  const handleChange = (e, name) => {
    if (filterDefault.includes('All Product')) {
      setFilterDefault([]);
    }

    if (!filterDefault.includes(name === 'lowerPrice' ? 'Lower Price' : 'Higher Price')) {
      setFilterDefault((old) => [...old, name === 'lowerPrice' ? 'Lower Price' : 'Higher Price']);
    }
  };

  const handleRadioChange = (e, name) => {
    if (filterDefault.includes('All Product')) {
      setFilterDefault([]);
    }
    if (!filterDefault.includes(name)) {
      setFilterDefault((old) => [...old, name]);
    }
  };

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
              <InputPrice placeHolder="Lower Price" handleChange={(e) => handleChange(e, 'lowerPrice')} />
              <InputPrice placeHolder="Higher Price" handleChange={(e) => handleChange(e, 'higherPrice')} />
            </div>
            <div>
              <p className="mt-5 font-semibold text-subtitle">Location :</p>
              <div className="mt-2 form-control">
                <form onChange={(e) => handleRadioChange(e, 'location')}>
                  <div className="mt-2">
                    <Radio color="lightBlue" text="all" id="semua" name="location" />
                  </div>
                  <div className="mt-2">
                    <Radio color="lightBlue" text="Jabodetabek" id="jabodetabek" name="location" />
                  </div>
                  <div className="mt-2">
                    <Radio color="lightBlue" text="Surabaya" id="surabaya" name="location" />
                  </div>
                  <div className="mt-2">
                    <Radio color="lightBlue" text="Bandung" id="bandung" name="location" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-h-screen mycontainer mobile:mycontainerfull">
            <div className="grid" style={{ gridTemplateColumns: '1fr 120px' }}>
              <div className="flex text-sm __montserat-text text-subtitle item-center">
                {filterDefault.map((el, ind) => (
                  <button
                    key={ind}
                    className="font-medium mr-1 py-1.5 px-4 rounded-full hover:text-textDefault border flex items-center"
                  >
                    {el} {el !== 'All Product' && <AiOutlineCloseCircle className="ml-5 text-xl" />}
                  </button>
                ))}
              </div>
              <Dropdown title="Sort by" viewMore={true} dropdownOpts={staticConst.sortOptions} />
            </div>
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
