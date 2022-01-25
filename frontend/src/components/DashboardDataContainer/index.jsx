const DashboardDataContainer = ({ margin, children, title }) => {
  return (
    <div className={margin}>
      <div className="font-semibold">{title}</div>
      <div className="grid grid-cols-2 mt-3 text-sm gap-x-11 gap-y-4 text-subtitle">{children}</div>
    </div>
  );
};

export default DashboardDataContainer;
