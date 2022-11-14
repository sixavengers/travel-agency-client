import React from 'react';
import { MdLocationOn } from "react-icons/md";
import card1 from '../../../images/cards/card1.png';
import card2 from '../../../images/cards/card2.png';
import card3 from '../../../images/cards/card3.png';

const PackagesHome = () => {
    return (
        <div className='bg-[#EBF0F4] p-5 mb-6'>
            <h2 className='text-2xl text-center'>OUR MOST DEMANDED PACKEGES</h2>
            <hr className='w-24 rounded-lg bg-indigo-600 mx-auto' />

            {/* CARDS-AREA****************************** */}
            <div className='grid md:grid-cols-3 lg:gap-3 justify-items-start mt-10 mb-10 md:pl-12'>


                {/* SINGLE-CARD1************************* */}
                <div className='md:flex gap-4 bg-white md:p-4 p-4 rounded-br-xl rounded-tl-xl shadow-xl hover:bg-gray-900 hover:text-white transition duration-300 ease-in pb-3 mb-4 '>
                    <div>
                        <img className='md:h-24 md:w-24 sm:w-56 mt-2 md:rounded rounded-lg md:hover:scale-110 ease-in duration-200' src={card1} alt="" />
                    </div>
                    <div className=''>
                        <h3 className='text-xl font-poppins md:ml-1'>St. Martin's Island</h3>
                        <div className='flex items-center'>
                            <p> <MdLocationOn /></p>
                            <p>Cox's Bazar</p>
                        </div>
                        <p className='md:ml-1'>Discover two of South America...</p>
                        <button className='text-white bg-indigo-600 px-2 md:ml-1 rounded-xl mt-1 hover:bg-white  hover:text-gray-900'>view details</button>
                    </div>
                </div>


                {/* SINGLE-CARD2************************* */}
                <div className='md:flex gap-4 bg-white md:py-4 md:px-4 md:p-6 rounded-br-xl rounded-tl-xl shadow-xl hover:bg-gray-900 hover:text-white transition duration-300 ease-in px-1 pb-3 mb-4 '>
                    <div>
                        <img className='md:h-24 md:w-24 sm:w-56 mt-2 rounded md:hover:scale-110 ease-in duration-200' src={card2} alt="" />
                    </div>
                    <div className=''>
                        <h3 className='text-xl font-poppins md:ml-1'>St. Martin's Island</h3>
                        <div className='flex items-center'>
                            <p> <MdLocationOn /></p>
                            <p>Cox's Bazar</p>
                        </div>
                        <p className='md:ml-1'>Discover two of South America...</p>
                        <button className='text-white bg-indigo-600 px-2 md:ml-1 rounded-xl mt-1 hover:bg-white  hover:text-gray-900'>view details</button>
                    </div>
                </div>


                {/* SINGLE-CARD3************************* */}
                <div className='md:flex gap-4 bg-white md:py-4 md:px-4 md:p-6 rounded-br-xl rounded-tl-xl shadow-xl hover:bg-gray-900 hover:text-white transition duration-300 ease-in px-1 pb-3 mb-4 '>
                    <div>
                        <img className='md:h-24 md:w-24 sm:w-56 mt-2 rounded md:hover:scale-110 ease-in duration-200' src={card3} alt="" />
                    </div>
                    <div className=''>
                        <h3 className='text-xl font-poppins md:ml-1'>St. Martin's Island</h3>
                        <div className='flex items-center'>
                            <p> <MdLocationOn /></p>
                            <p>Cox's Bazar</p>
                        </div>
                        <p className='md:ml-1'>Discover two of South America...</p>
                        <button className='text-white bg-indigo-600 px-2 md:ml-1 rounded-xl mt-1 hover:bg-white  hover:text-gray-900'>view details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesHome;