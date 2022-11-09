import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import LOGO from "../images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathname = window.location.pathname;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav

      className={`w-full font-poppins z-50 sticky top-3 ${pathname !== '/' && 'bg-gray-900'}  h-20`}

  

    >
      <div className="container mx-auto h-full bg-transparent">
        <div className="flex justify-between items-center w-full lg:px-8  z-50 nav-area left-0">
          <div className="logo flex items-center">
            <img
              className="logo h-10 w-20 md:h-auto md:w-auto "
              src={LOGO}
              alt="app-logo"
            />
          </div>

          <div className="justify-between items-center border border-white p-2 rounded search-input w-96 hidden md:flex ">
            <BiSearch className="pr-2 text-white" size={25} />
            <input
              className="input bg-transparent text-white outline-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Search your Destination..."
            />
          </div>

          <ul className="hidden md:flex text-white items-center gap-5">
            <li className="p-4 cursor-pointer">
              <Link to="/news">News</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link to="/packages">Destination</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mt-4 mb-4 p-2 px-5 bg-[#F9A51A] rounded cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            <li className="mt-4 mb-4 p-2 px-5  rounded cursor-pointer">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <ul
            className={
              nav
                ? "fixed left-3 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <img className="logo" src={LOGO} alt="" />
            <li className="p-4 border-b border-gray-600 text-white">News</li>
            <li className="p-4 border-b border-gray-600 text-white">
              <Link to="/packages">Destination</Link>
            </li>
            <li className="p-4 border-b border-gray-600 text-white">Blog</li>
            <li className="p-4 border-b border-gray-600 text-white">Contact</li>
            <li className="p-4 text-white">Login</li>
            <div className="flex justify-between items-center border border-white p-2 rounded input-background">
              <BiSearch className="pr-2" style={{ color: "white" }} size={25} />
              <input
                className="input"
                style={{ outline: "none", background: "none" }}
                type="text"
                name=""
                id=""
                placeholder="Search your Destination..."
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
