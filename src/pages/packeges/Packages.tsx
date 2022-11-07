import React from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import PackagesCard from './PackagesCard';
import SidebarFilter from './SidebarFilter';
import { FiFilter } from "react-icons/fi";
type Props = {}

const Packages = (props: Props) => {


    return (
        <div className='my-5 px-3'>
            <button className='bg-[#f9a51a] font-poppins text-white py-1.5 px-4 text-md rounded-md shadow-md fixed bottom-5 left-[50%] -translate-x-2/4 z-10 flex items-center lg:hidden'>
                <FiFilter className='font-bold mr-1'/>
                Filter
            </button>
            {/*============================== 
                *Top search bar section start
            ===============================*/}

            <section className='py-5'>
                <form action="" className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                    <div className=''>
                        <p className='font-semibold text-center font-poppins'>Origin</p>
                        <input type="text" name="origin" id="" placeholder='Origin' className='outline-none border border-gray-400 py-2 px-3 rounded-full shadow-md w-full sm:max-w-xs lg:max-w-full font-poppins' />
                    </div>
                    <div className='relative'>
                        <span className='hidden sm:block absolute border border-gray-300 top-7 sm:left-[-35px] md:left-[-27px] bg-white z-20 cursor-pointer p-2 rounded-full '><AiOutlineSwap /></span>
                        <p className='font-semibold text-center font-poppins'>Destination</p>
                        <input type="text" name="destination" id="" placeholder='Destination' className='outline-none border border-gray-400 py-2 px-3 rounded-full shadow-md w-full sm:max-w-xs lg:max-w-full font-poppins' />
                    </div>
                    <div className=''>
                        <p className='font-semibold text-center font-poppins'>Journey Date</p>
                        <input type="date" name="journeyDate" id="" placeholder='Destination' className='outline-none border border-gray-400 py-2 px-3 rounded-full shadow-md w-full sm:max-w-xs lg:max-w-full' />
                    </div>
                    <div className=''>
                        <p className='font-semibold text-center font-poppins'>Return Date</p>
                        <input type="date" name="returnDate" id="" className='outline-none border border-gray-400 py-2 px-3 rounded-full shadow-md w-full sm:max-w-xs lg:max-w-full' />
                    </div>
                    <div className=''>
                        <input type="submit" value="Search" name="returnDate" id="" className='outline-none border border-gray-400 py-2 px-3 rounded-full shadow-md mt-6 bg-[#1e88e5] text-white font-semibold cursor-pointer w-full sm:max-w-xs font-poppins' />
                    </div>
                </form>
            </section>

            {/*============================== 
                *Sidebar Filter section start
            ===============================*/}

            <section className='flex'>
                <div className='w-[300px] mr-3 hidden lg:block'>
                    <SidebarFilter />
                </div>

                {/*============================== 
                *Packages card section start
                ===============================*/}

                <div className=' w-full md:w-[82%] mx-auto'>
                    <PackagesCard />
                </div>
            </section>

        </div>
    )
}

export default Packages