import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const handleToDetailPage = () => {
    navigate("/detail_product/12", { replace: true });
  };

  return (
    <div
      className="shadow-lg w-48 h-80 rounded-xl bg-white __montserat-text cursor-pointer"
      onClick={handleToDetailPage}
    >
      <img
        src="/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg"
        alt="gambar sapi slurd"
        className="w-48 h-44 object-cover rounded-t-xl"
      />
      <div className="p-3">
        <p className="text-textDefault text-sm font-semibold __text-elipsis-one-line">
          {data?.product_name || "no data"}
        </p>
        <p className="text-subtitle text-xs __text-elipsis-two-line mt-1">
          {data?.product_desc || "no data"}
        </p>
        {data?.discount_price && (
          <div className="mt-2 flex items-center">
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 bg-red-500 rounded-full mr-2">
              {((data?.price - data?.discount_price) * 100) / data?.price + "%"}
            </span>
            <p className="text-xs line-through text-subtitle">
              Rp {Intl.NumberFormat("en-US").format(data?.price)}
            </p>
          </div>
        )}
        <p className="text-textDefault text-sm font-semibold mt-1.5">
          Rp{" "}
          {Intl.NumberFormat("en-US").format(
            data?.discount_price || data?.price
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
