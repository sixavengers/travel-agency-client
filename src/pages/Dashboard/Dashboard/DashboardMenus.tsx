import { BiHomeAlt, BiPackage, BiPlus, BiUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
type Props = {};

const DashboardMenus = (props: Props) => {
  return (
    <ul className="dashboard__sidebar__menu__list font-montserrat">
      <li className="dashboard__sidebar__menu__list__item" data-tip="Home">
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
        className="dashboard__sidebar__menu__list__item "
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
        className="dashboard__sidebar__menu__list__item "
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

      <li className="dashboard__sidebar__menu__list__item" data-tip="Profile">
        <Link to="/dashboard/users">
          <div className="dashboard__sidebar__menu__list__item__icon">
            <FaUsers />
          </div>
          <span className="dashboard__sidebar__menu__list__item__text">
            Users
          </span>
        </Link>
      </li>
      <li className="dashboard__sidebar__menu__list__item" data-tip="Profile">
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
