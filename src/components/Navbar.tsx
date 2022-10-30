import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import LOGO from "../images/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 w-full px-4 absolute z-10'>
            {/* <h1 className='w-full text-3xl font-bold text-[#F9A51A]'>Travel.</h1> */}
            <img className='logo' src={LOGO} alt="" />

            <div className='flex justify-between items-center border border-gray-600 p-2 rounded input-background'>
                <BiSearch className='pr-2' size={25} />
                <input className='input' style={{outline:"none"}} type="text" name="" id="" placeholder='Seasch your Destination...' />
            </div>

            <ul className='hidden md:flex'>
                <li className='p-4 text-white'>News</li>
                <li className='p-4 text-white'>Destination</li>
                <li className='p-4 text-white'>Blog</li>
                <li className='p-4 text-white'>Contact</li>
                <li className='mt-4 mb-4 pl-2 pr-2 bg-[#F9A51A] rounded'>Login</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#F9A51A] m-4'>Travel.</h1>
                <li className='p-4 border-b border-gray-600 text-white'>News</li>
                <li className='p-4 border-b border-gray-600 text-white'>Destination</li>
                <li className='p-4 border-b border-gray-600 text-white'>Blog</li>
                <li className='p-4 border-b border-gray-600 text-white'>Contact</li>
                <li className='p-4 text-white'>Login</li>
            </ul>
        </div>
    );
};

export default Navbar;