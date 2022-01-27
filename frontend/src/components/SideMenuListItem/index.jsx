import { Link } from 'react-router-dom';
const SideMenuListItem = ({ path, name }) => {
  return (
    <div className="py-1 text-sm text-gray-600 cursor-pointer hover:bg-gray-100">
      <Link className="block px-7" to={path}>
        {name}
      </Link>
    </div>
  );
};

export default SideMenuListItem;
