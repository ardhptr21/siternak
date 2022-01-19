import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Header = ({ title, subTitle, moreOff }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-subtitle">{subTitle}</p>
      </div>
      {!moreOff && (
        <button className="bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center font-medium text-subtitle py-1 px-4 border rounded-full">
          More{" "}
          <span>
            <BsArrowRightShort className="ml-2 text-xl" />
          </span>
        </button>
      )}
    </div>
  );
};

export default Header;
