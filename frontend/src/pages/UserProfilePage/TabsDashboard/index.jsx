import React from 'react';
import Tabel from '../../../components/Tabel';

const TabsDashboard = () => {
  const tabs = [
    {
      id: 'tabs-all-tab',
      href: 'tabs-all',
      title: 'SEMUA',
      content: <Tabel />,
    },
    {
      id: 'tabs-not-yet-paid-tab',
      href: 'tabs-not-yet-paid',
      title: 'BELUM BAYAR',
      content: 'Content 2',
    },
    {
      id: 'tabs-send-tab',
      href: 'tabs-send',
      title: 'DIKIRIM',
      content: 'Content 3',
    },
    {
      id: 'tabs-finished-tab',
      href: 'tabs-finished',
      title: 'SELESAI',
      content: 'Content 4',
    },
    {
      id: 'tabs-canceled-tab',
      href: 'tabs-canceled',
      title: 'PEMBATALAN',
      content: 'Content 5',
    },
  ];

  return (
    <div>
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
        <div className="mb-11">
          <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
            <ul
              className="flex flex-col flex-wrap pl-0 list-none border-b-0 nav nav-tabs md:flex-row"
              id="tabs-tab"
              role="tablist"
            >
              {tabs.map((el, idx) => (
                <li key={idx} className="nav-item" role="presentation">
                  <a
                    href={`#${el.href}`}
                    className={`
                      nav-link
                      block
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      px-6
                      py-3
                      my-2
                      ${
                        window.location.href.split('#')[1] === el.href
                          ? 'border-b-4 border-orange-800'
                          : 'hover:border-transparent hover:bg-gray-100 focus:border-transparent'
                      }
                    `}
                    id={el.id}
                    data-bs-toggle="pill"
                    data-bs-target={`#${el.href}`}
                    role="tab"
                    aria-controls={el.href}
                    aria-selected="true"
                  >
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-start">
            <div className="mt-4 mb-3 xl:w-96">
              <input
                type="search"
                className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleSearch"
                placeholder="Pencarian"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="tab-content" id="tabs-tabContent">
              {tabs.map(
                (el, idx) =>
                  window.location.href.split('#')[1] === el.href && (
                    <div
                      key={idx}
                      className="border-blue-600 tab-pane fade show active"
                      id={el.href}
                      role="tabpanel"
                      aria-labelledby={el.id}
                    >
                      {el.content}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabsDashboard;
