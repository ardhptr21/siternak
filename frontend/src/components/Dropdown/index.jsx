import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Dropdown = ({
  noBorder,
  isLogin,
  loginData,
  dropdownOpts,
  title,
  viewMore,
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className={`${noBorder ? "" : "rounded-md shadow-sm"}`}>
              <Menu.Button
                className={`${
                  noBorder
                    ? "bg-transparent border-none focus:ring-0 focus:outline-none"
                    : "bg-white border border-gray-300 hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50"
                } inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md active:text-gray-800`}
              >
                <span>{title ? title : "Categories"}</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-50"
              >
                {isLogin && (
                  <div className="px-4 py-3">
                    <p className="text-sm leading-5">Signed in as</p>
                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                      {loginData?.name || "User"}
                    </p>
                  </div>
                )}

                <div className="py-1">
                  {dropdownOpts &&
                    dropdownOpts.map((el) => (
                      <Menu.Item key={el?._id}>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex items-center px-4 py-2 cursor-pointer`}
                          >
                            {el.icon && (
                              <el.icon className="text-xl mr-4 text-gray-600" />
                            )}
                            <p
                              className={`flex justify-between w-full text-sm leading-5 text-left`}
                            >
                              {el?.name}
                            </p>
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                </div>

                {!viewMore && (
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between items-center`}
                          onClick={() => navigate("/product_page")}
                        >
                          <p
                            className={`flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                          >
                            View More
                          </p>
                          <BsArrowRightShort className="text-xl mr-4 text-gray-400" />
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                )}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Dropdown;
