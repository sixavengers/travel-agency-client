import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdLocationOn } from "react-icons/md";
import card1 from '../../../images/cards/card1.png'

const PackegeDetails = () => {
    return (
        <div className='md:mx-32'>
            <div className='md:mt-4 md:flex lg-flex justify-around items-center'>
                <div>
                    <img className='md:h-96 shadow-xl' src={card1} alt="" />
                </div>


                <div className='md:ml-12 px-4 p-1 shadow-xl border-solid md:border-2 border-gray-300 md:mt-0 mt-5'>
                    <div className='flex items-center text-xl font-roboto'>
                        <h1>St. Martin's Island</h1>
                        <p className='md:ml-72 ml-32 mt-1 bg-gray-900 text-white px-1 inline-block rounded'>$120</p>
                    </div>

                    <hr className=' mt-2 mb-2' />

                    <p className='flex'>
                        <span className='mr-2 text-gray-500'><MdLocationOn /></span>
                        <span className='font-poppins text-xs font-bold text-gray-500'>Cox's Bazar</span>
                    </p>

                    <p className='flex items-center mt-1'>
                        <span className='mr-2 text-sm ml-0.5 text-gray-500'><BiTimeFive /></span>
                        <span className='font-poppins text-xs font-bold text-gray-500'>08 NOV 2022 - 16 NOV 2022</span>
                    </p>


                    <div className="flex items-center mt-1">
                        <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 font-poppins">4.90 out of 5</p>
                    </div>

                    <hr className='mt-2' />

                    <ul>
                        <h2 className='text-blue-500 font-bold mt-2'>Menu</h2>
                        <li>
                            <p className='text-gray-500 font-bold'>Breakfast:</p>
                            <p>slice bread, jelly, butter, tow eggs, bannana, fruit juice, mineral water, tea or coffee.</p>
                        </li>
                        <li>
                            <p className='text-gray-500 font-bold'>Lunch:</p>
                            <p>Rice, Bharta, Mutton, Beef, Dal, Salad, Vegetables, soft drinks.</p>
                        </li>
                        <li>
                            <p className='text-gray-500 font-bold'>Dinner:</p>
                            <p>Plain rice, Fish curry, Chicken curry, Vegetables, Mineral water.</p>
                        </li>
                    </ul>
                    <button className='bg-[#f9a51a]/90 hover:bg-[#f9a51a] transition-all duration-150 text-white font-poppins px-3 py-2 my-2 rounded-md font-semibold text-sm shadow-lg whitespace-nowrap'>BOOK NOW</button>
                </div>
            </div>

            <div className='mb-5 md:mt-2 mt-5 md:px-0 px-4'>
                <h2 className='text-xl text-blue-500 font-roboto'>Read more about the place</h2>
                <p className='font-roboto'>Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to. Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to.Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to.Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to.</p>
            </div>
        </div>
    );
};

export default PackegeDetails;