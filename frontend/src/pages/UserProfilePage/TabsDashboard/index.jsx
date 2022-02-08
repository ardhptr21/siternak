import React from 'react';

const TabsDashboard = ({ children, setContent, content }) => {
  const tabs = [
    {
      title: 'SEMUA',
      status: 0,
    },
    {
      title: 'BELUM DIBAYAR',
      status: 1,
    },
    {
      title: 'SELESAI DIBAYAR',
      status: 2,
    },
    {
      title: 'TERVERIFIKASI',
      status: 3,
    },
    {
      title: 'DIKIRIM',
      status: 4,
    },
    {
      title: 'SELESAI',
      status: 5,
    },
    {
      title: 'DIBATALKAN',
      status: 6,
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
                  <p
                    className={`nav-link block font-medium text-xs leading-tight uppercase px-6 py-3 my-2 hover:bg-gray-100 cursor-pointer ${
                      el.status === content ? 'border-b-4 border-orange-600' : ''
                    }`}
                    onClick={() => setContent(el.status)}
                  >
                    {el.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default TabsDashboard;
