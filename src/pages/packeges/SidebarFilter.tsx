
import React from 'react';
import { FaSearch } from 'react-icons/fa';
type Props = {}

const SidebarFilter = (prop: Props) => {
    return (
        <div>
            <div className=' mb-3'>
                <p className='rounded-t-md flex items-center p-2 bg-theme-primary'>
                    <span className='mr-2 text-lg font-extrabold text-white '><FaSearch /></span>
                    <span className='text-white font-semibold font-poppins'>35 RESULTS FOUND</span>
                </p>
                <p className='text-theme-primary rounded-b-md text-center p-2 border border-[#1e88e5] font-poppins'>Book now! before sold out</p>
            </div>
            <div className='shadow-xl h-[600px] rounded-md p-2'>
                <div className='border-b border-gray-300 pb-3'>
                    <p className='font-semibold mb-3 font-poppins'>Price Range</p>

                    <p className='flex justify-between mb-1 text-sm font-semibold font-poppins'><span>BDT 5000</span> <span>BDT 15000</span></p>

                    {/* 
                            It is not complete yet. It will be a double range slider.
                            */}
                    <input type="range" min="0" max="100" value="40" className="range range-primary w-full" />
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;