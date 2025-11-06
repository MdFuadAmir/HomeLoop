import { NavLink } from "react-router";

const MenuItems = ({ to, labal, icon: Icon, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        end
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "text-teal-900 bg-teal-600 rounded  font-semibold"
            : "text-white"
        }
      >
        {Icon && <Icon className="text-lg"/>} {labal}
      </NavLink>
    </li>
  );
};

export default MenuItems;
