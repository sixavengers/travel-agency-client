import { BiHomeAlt, BiPackage, BiPlus, BiUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
type Props = {};

const DashboardMenus = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <ul className="dashboard__sidebar__menu__list font-montserrat">
      <li
        className={`dashboard__sidebar__menu__list__item ${
          pathname === "/dashboard" && "bg-[#5a8dfa6c]"
        }`}
        data-tip="Home"
      >
        <Link to="/dashboard">
          <div className="dashboard__sidebar__menu__list__item__icon">
            <BiHomeAlt />
          </div>
          <span className="dashboard__sidebar__menu__list__item__text">
            Dashboard
          </span>
        </Link>
      </li>

      <li
        className={`dashboard__sidebar__menu__list__item ${
          pathname === "/dashboard/package/add" && "bg-[#5a8dfa6c]"
        }`}
        data-tip="Add Package"
      >
        <Link to="/dashboard/package/add">
          <div className="dashboard__sidebar__menu__list__item__icon">
            <BiPlus />
          </div>
          <span className="dashboard__sidebar__menu__list__item__text">
            Add Package
          </span>
        </Link>
      </li>

      <li
        className={`dashboard__sidebar__menu__list__item ${
          pathname === "/dashboard/package/list" && "bg-[#5a8dfa6c]"
        }`}
        data-tip="Manage Package"
      >
        <Link to="/dashboard/package/list">
          <div className="dashboard__sidebar__menu__list__item__icon">
            <BiPackage />
          </div>
          <span className="dashboard__sidebar__menu__list__item__text">
            Manage Package
          </span>
        </Link>
      </li>

      <li
        className={`dashboard__sidebar__menu__list__item ${
          pathname === "/dashboard/users" && "bg-[#5a8dfa6c]"
        }`}
        data-tip="Users"
      >
        <Link to="/dashboard/users">
          <div className="dashboard__sidebar__menu__list__item__icon">
            <FaUsers />
          </div>
          <span className="dashboard__sidebar__menu__list__item__text">
            Users
          </span>
        </Link>
      </li>
      <li
        className={`dashboard__sidebar__menu__list__item ${
          pathname === "/dashboard/profile" && "bg-[#5a8dfa6c]"
        }`}
        data-tip="Profile"
      >
        <Link to="/dashboard/profile">
          <div className="dashboard__sidebar__menu__list__item__icon">
            <BiUser />
          </div>
          <span className="dashboard__sidebar__menu__list__item__text">
            Profile
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default DashboardMenus;
