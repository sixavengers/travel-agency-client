
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

            <div className='shadow-xl rounded-md p-2'>
                <div className='border-b border-gray-300 pb-3'>
                    <p className='font-semibold mb-2 font-poppins'>Price Range</p>

                    <p className='flex justify-between mb-1 text-sm font-semibold font-poppins'><span>BDT 5000</span> <span>BDT 15000</span></p>

                    {/* 
                        It is not complete yet. It will be a double range slider.
                    */}
                    <input type="range" min="0" max="100" value="40" className="range range-primary w-full" />
                </div>

                <div className='border-b border-gray-300 pb-3'>
                    <p className='font-semibold my-2 font-poppins'>Package Class</p>
                    <input type="checkbox" name="" id="luxury" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="luxury">Luxury</label>
                    <br />
                    <input type="checkbox" name="" id="midRange" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="midRange">Mid Range</label>
                    <br />
                    <input type="checkbox" name="" id="budget" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="budget">Budget</label>
                </div>

                <div className='border-b border-gray-300 pb-3'>
                    <p className='font-semibold my-2 font-poppins'>Package Type</p>
                    <input type="checkbox" name="" id="group" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="group">Group Tour</label>
                    <br />
                    <input type="checkbox" name="" id="private" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="private">Private Tour</label>
                </div>

                <div className='border-b border-gray-300 pb-3'>
                    <p className='font-semibold my-2 font-poppins'>Guest rating</p>
                    <input type="radio" name="guestRating" id="any" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="any">Any</label>
                    <br />
                    <input type="radio" name="guestRating" id="wonderful" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="wonderful">Wonderful 4.5+</label>
                    <br />
                    <input type="radio" name="guestRating" id="veryGood" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="veryGood">Very good 4+</label>
                    <br />
                    <input type="radio" name="guestRating" id="good" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="good">Good 3.5+</label>
                </div>

                <div className='border-b border-gray-300 pb-3'>
                    <p className='font-semibold my-2 font-poppins'>Meal plans available</p>
                    <input type="checkbox" name="" id="breakfast" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="breakfast">Breakfast included</label>
                    <br />
                    <input type="checkbox" name="" id="lunch" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="lunch">Lunch included</label>
                    <br />
                    <input type="checkbox" name="" id="dinner" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="dinner">Dinner included</label>
                </div>

                <div className='border-b border-gray-300 pb-3'>
                    <p className='font-semibold my-2 font-poppins'>Activities</p>
                    <input type="checkbox" name="" id="beach&island" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="beach&island">Beaches and Islands</label>
                    <br />
                    <input type="checkbox" name="" id="family" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="family">Family</label>
                    <br />
                    <input type="checkbox" name="" id="food&drink" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="food&drink">Food and Drink</label>
                    <br />
                    <input type="checkbox" name="" id="roadTrip" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="roadTrip">Road Trip</label>
                    <br />
                    <input type="checkbox" name="" id="shopping" className='mr-2' />
                    <label className='font-poppins cursor-pointer' htmlFor="shopping">Shopping</label>
                </div>

                <div>
                    <button className='bg-[#f9a51a] w-full font-poppins text-white py-1 rounded-sm mt-3 mb-1 shadow-lg'>Reset Filters</button>
                </div>
            </div>
        </div>
    );
};

export default SidebarFilter;