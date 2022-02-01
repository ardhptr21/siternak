import React from 'react';
import Carrousel from '../../components/Carousel';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <div className="__carrousel-bg-img pt-9 mb-14">
        <div className="mycontainer mobile:mycontainerfull">
          <Carrousel />
        </div>
      </div>
      <div className="bg-gray-50 pt-14">
        <div className="min-h-screen mycontainer mobile:mycontainerfull">
          <Header title="Today's Offer" subTitle="Get the best offer from us" />
          <div
            className="grid justify-between mt-12"
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
  );
};

export default LandingPage;
