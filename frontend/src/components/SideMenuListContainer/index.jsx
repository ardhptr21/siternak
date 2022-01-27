const SideMenuListContainer = ({ children, icon, title }) => {
  return (
    <>
      <div className="flex items-center px-5 py-2 text-sm font-semibold">
        {icon && <span className="mr-2">{icon}</span>}
        <span>{title}</span>
      </div>
      {children}
    </>
  );
};

export default SideMenuListContainer;
