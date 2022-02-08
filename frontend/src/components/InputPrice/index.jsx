import React from 'react';

const InputPrice = ({ placeHolder, handleChange }) => {
  return (
    <div className="relative mt-3 rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 flex items-center px-3 bg-gray-200 pointer-events-none rounded-l-md">
        <span className="font-medium text-gray-500 sm:text-sm">Rp</span>
      </div>
      <input
        type="number"
        name="price"
        id="price"
        className="block w-full pr-12 font-medium border border-gray-200 rounded-md focus:ring-0 focus:border-gray-200 pl-14 sm:text-sm"
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputPrice;
