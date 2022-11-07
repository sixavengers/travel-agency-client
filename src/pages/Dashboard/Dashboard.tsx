import { BiArrowBack, BiHomeAlt, BiRocket, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./styles/dashboard.scss";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="dashboard font-poppins">
      {/* dashboard sidebar */}
      <div className="dashboard__sidebar ">
        <div className="dashboard__sidebar__logo flex items-center justify-between mb-7 p-10">
          <div className="flex items-center gap-2 text-2xl text-gray-300 font-bold">
            <BiRocket /> <span>Travel</span>
          </div>
          <span className="back text-2xl text-white cursor-pointer ">
            <BiArrowBack size={25} />
          </span>
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
        <div className="dashboard__main__header">
          <div className="dashboard__main__header__left">
            <div className="dashboard__main__header__left__search">
              <input type="text" placeholder="Search" />
            </div>

            <div className="dashboard__main__header__left__user">
              <img src={""} alt="user" />
              <span className="dashboard__main__header__left__user__name">
                John Doe
              </span>
            </div>
          </div>
        </div>
        {/* content goes here */}
        <div className="dashboard__main__content">
          <div className="dashboard__main__content__header">
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
