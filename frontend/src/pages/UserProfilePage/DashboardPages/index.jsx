import React from 'react';

const DashboardPages = ({ children }) => {
  return (
    <div>
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow __montserat-text">
        <div className="mb-11">{children}</div>
      </div>
    </div>
  );
};
export default DashboardPages;
