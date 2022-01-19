import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Input = ({ placeholder, onChange, customStyles, isSearch }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <input
        type="text"
        placeholder={placeholder}
        className={`${
          customStyles ? customStyles : ""
        } px-4 py-1.5 placeholder-gray-400 text-gray-600 rounded outline-none focus:outline-none border-none focus:ring-0`}
        onChange={(e) => onChange(e)}
        style={{ width: "60vw" }}
      />
      {isSearch && <BiSearchAlt className="text-xl mr-4 text-gray-400" />}
    </div>
  );
};

export default Input;
