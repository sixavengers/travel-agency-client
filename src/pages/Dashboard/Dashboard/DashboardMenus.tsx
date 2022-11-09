import { BiHomeAlt, BiPackage, BiPlus, BiUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const DashboardMenus = (props: Props) => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  /* All Menus */
  const menus = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <BiHomeAlt />,
    },
    {
      name: "Add Package",
      path: "/dashboard/package/add",
      icon: <BiPlus />,
    },
    {
      name: "Packages",
      path: "/dashboard/package/list",
      icon: <BiPackage />,
    },

    {
      name: "Users",
      path: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <BiUser />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <IoMdSettings />,
    },
  ];

  return (
    <ul className="dashboard__sidebar__menu__list font-montserrat">
      {menus.map((menu, index) => (
        <Link
          to={menu.path}
          key={index + menu?.name}
          className={`dashboard__sidebar__menu__list__item ${
            isActive(menu?.path) && "bg-[#5a8dfa6c]"
          }`}
          data-tip="Home"
        >
          <Link to={menu?.path}>
            <div className="dashboard__sidebar__menu__list__item__icon">
              {menu?.icon}
            </div>
            <span className="dashboard__sidebar__menu__list__item__text">
              {menu?.name}
            </span>
          </Link>
        </Link>
      ))}
    </ul>
  );
};

export default DashboardMenus;
