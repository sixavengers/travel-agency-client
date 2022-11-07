import { useEffect, useState } from "react";
import {
  BiArrowBack,
  BiGridAlt,
  BiHomeAlt,
  BiRocket,
  BiUser,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import "./styles/dashboard.scss";
type Props = {};

const Dashboard = (props: Props) => {
  const [isCollapse, setIsCollapse] = useState(false);

  /* handle collapse with localStorage */
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
    localStorage.setItem("isCollapse", JSON.stringify(!isCollapse));
  };
  useEffect(() => {
    const isCollapse = JSON.parse(
      localStorage.getItem("isCollapse") || "false"
    );
    setIsCollapse(isCollapse);
  }, []);

  return (
    <div className="dashboard font-poppins">
      {/* dashboard sidebar */}
      <div
        className={`dashboard__sidebar  ${isCollapse ? "active-sidebar" : ""}`}
      >
        {/* active-sidebar */}
        <div
          className={`dashboard__sidebar__logo flex items-center justify-between mb-7 ${
            isCollapse ? "p-2" : "p-10"
          }`}
        >
          {isCollapse ? (
            <div
              className="relative grid place-items-center text-white cursor-pointer w-[70px] h-[70px]"
              onClick={handleCollapse}
            >
              <div>
                <BiGridAlt size={24} />
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 text-2xl text-gray-300 font-bold">
                <BiRocket /> <span>Travel</span>
              </div>
              <span
                onClick={handleCollapse}
                className="back text-2xl text-white cursor-pointer "
              >
                <BiArrowBack size={25} />
              </span>
            </>
          )}
        </div>
        <div className="dashboard__sidebar__menu">
          <ul className="dashboard__sidebar__menu__list">
            <li className="dashboard__sidebar__menu__list__item">
              <Link to="/dashboard">
                <div className="dashboard__sidebar__menu__list__item__icon">
                  <BiHomeAlt />
                </div>
                <span className="dashboard__sidebar__menu__list__item__text">
                  Home
                </span>
              </Link>
            </li>
            <li className="dashboard__sidebar__menu__list__item">
              <Link to="/dashboard">
                <div className="dashboard__sidebar__menu__list__item__icon">
                  <BiUser />
                </div>
                <span className="dashboard__sidebar__menu__list__item__text">
                  Profile
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* dashboard main content */}
      <div className="dashboard__main">
        <div className="dashboard__main__header bg-slate-50 shadow-sm rounded-lg p-3">
          <div className="dashboard__main__header__left flex items-center justify-between">
            {isCollapse && (
              <div className="flex items-center gap-2 text-2xl  font-bold">
                <BiRocket /> <span>Travel</span>
              </div>
            )}

            <div className="dashboard__main__header__left__search">
              <input
                type="text"
                placeholder="Search"
                className="p-3 rounded-md outline-none border bg-[#F8F9FC] border-gray-300 sm:w-96"
              />
            </div>

            <div className="dashboard__main__header__left__user flex items-center gap-2 bg-white rounded-lg border px-2 py-1 cursor-pointer">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2-DHbjWwdCcYymoNzbsnaz8KeoXzVUaShnQF3-Qn&s"
                }
                alt="user"
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
              />
              <div className="flex flex-col items-start">
                <span className="dashboard__main__header__left__user__name font-medium text-sm">
                  John Doe
                </span>
                <span className="dashboard__main__header__left__user__role text-xs text-slate-400">
                  Admin
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* content goes here */}
        <div className="dashboard__main__content py-10">
          <div className="dashboard__main__content__header ">
            <h1 className="dashboard__main__content__header__title">
              Dashboard
            </h1>
          </div>
          <div className="dashboard__main__content__body">
            <h1 className="text-2xl font-bold">Welcome to the dashboard </h1>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default Dashboard;
