import React from "react";

const InputPrice = ({ placeHolder, handleChange }) => {
  return (
    <div className="mt-3 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none rounded-l-md bg-gray-200">
        <span className="text-gray-500 sm:text-sm font-medium">Rp</span>
      </div>
      <input
        type="number"
        name="price"
        id="price"
        className="font-medium border border-gray-200 focus:ring-0 focus:border-gray-200 block w-full pl-14 pr-12 sm:text-sm rounded-md"
        placeholder={placeHolder}
        onChange={handleChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center bg-gray-200 rounded-r-md">
        <label htmlFor="currency" className="sr-only">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          className="focus:ring-0 font-medium focus:border-none h-full py-0 pl-2 pr-7 border-none bg-transparent text-gray-500 sm:text-sm rounded-md"
        >
          <option>IDR</option>
        </select>
      </div>
    </div>
  );
};

export default InputPrice;
