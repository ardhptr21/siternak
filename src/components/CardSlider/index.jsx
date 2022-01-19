import React from "react";
import Card from "../Card";
import { staticConst } from "../../static/staticConst";

const CardSlider = () => {
  return (
    <div className="w-full my-28">
      <p className=" border-gray-100 px-2 py-2 font-bold text-xl">
        Produk Serupa
      </p>
      <div className="overflow-y-hidden overflow-x-scroll __styled-border-x">
        <div className="min-w-max grid grid-flow-col gap-x-3 py-5">
          {staticConst?.stasticCardData?.map((el, i) => (
            <div key={i}>
              <Card data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
