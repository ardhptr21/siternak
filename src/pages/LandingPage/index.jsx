import React from "react";
import Carrousel from "../../components/Carousel";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { staticConst } from "../../static/staticConst";

const LandingPage = () => {
  return (
    <div>
      <div className="__carrousel-bg-img pt-9 mb-14">
        <div className="mycontainer mobile:mycontainerfull">
          <Carrousel />
        </div>
      </div>
      <div className="bg-gray-50 pt-14">
        <div className="mycontainer mobile:mycontainerfull min-h-screen">
          <Header title="Today's Offer" subTitle="Get the best offer from us" />
          <div
            className="mt-12 grid justify-between"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 12rem))",
              gap: "25px 15px",
            }}
          >
            {staticConst.stasticCardData.map((el, indx) => (
              <div key={indx}>
                <Card data={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
