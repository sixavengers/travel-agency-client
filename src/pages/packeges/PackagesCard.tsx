import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
type Props = {}

const PackagesCard = (props: Props) => {

    const text = "Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to Iguassu Falls in between your two city stays."

    return (
        <div className='grid sm:grid-cols-2 xl:grid-cols-1 gap-3 lg:gap-2'>
            <div className='mx-auto lg:mx-0'>
                <div className='mt-3 border border-gray-200 bg-white rounded-lg shadow-lg max-w-xs xl:max-w-full h-[535px] overflow-y-auto xl:h-auto xl:flex items-center justify-between mx-auto'>
                    <div className='p-3 xl:flex'>
                        <div className='flex items-center overflow-hidden '>
                            <img className='w-[100%] lg:w-80 object-cover h-48 rounded-md cursor-pointer' src="https://www.bangladeshpost.net/webroot/uploads/uploads/2021-09/614092421ed73.jpg" alt="" />
                        </div>
                        <div className='lg:ml-3'>
                            <h2 className='font-poppins text-xl mt-2 mb-1 font-semibold cursor-pointer inline-block'>St. Martin’s Island</h2>
                            <p className='flex items-center'>
                                <span className='mr-2 text-gray-500'><MdLocationOn /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>Cox's Bazar</span>
                            </p>
                            <p className='flex items-center mt-1'>
                                <span className='mr-2 text-sm ml-0.5 text-gray-500'><BiTimeFive /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>08 NOV 2022 - 16 NOV 2022</span>
                            </p>
                            {text.length > 150 ? <p className='max-w-[600px]  font-poppins mt-2'>{text.slice(0, 150)}...</p> : <p className='max-w-[600px]  font-poppins mt-2'>{text}</p>}

                            <p className='font-poppins mt-2 bg-[#1e88e5]/90 inline-block text-white px-2 rounded-full shadow-md'>Available Tickets: 16</p>

                            <div className="flex items-center mt-1">
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 font-poppins">4.90 out of 5</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center xl:flex-col justify-between px-3'>
                        <p className='font-poppins hidden xl:block text-sm xl:mb-2'>Starting From</p>
                        <p className='hidden xl:flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-md font-semibold text-gray-500 line-through'>4500</span>
                        </p>
                        <p className='flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-xl font-bold text-gray-600 '>4499</span>
                        </p>
                        <button className='bg-[#f9a51a]/90 hover:bg-[#f9a51a] transition-all duration-150 text-white font-poppins px-3 py-2 rounded-md font-semibold text-sm shadow-lg whitespace-nowrap'>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:mx-0'>
                <div className='mt-3 border border-gray-200 bg-white rounded-lg shadow-lg max-w-xs xl:max-w-full h-[535px] overflow-y-auto xl:h-auto xl:flex items-center justify-between mx-auto'>
                    <div className='p-3 xl:flex'>
                        <div className='flex items-center overflow-hidden '>
                            <img className='w-[100%] lg:w-80 object-cover h-48 rounded-md cursor-pointer' src="https://businesshaunt.com/wp-content/uploads/2020/10/Top-10-Places-to-visit-in-Bangladesh.jpg" alt="" />
                        </div>
                        <div className='lg:ml-3'>
                            <h2 className='font-poppins text-xl mt-2 mb-1 font-semibold cursor-pointer inline-block'>Rangamati and Kaptai Lake</h2>
                            <p className='flex items-center'>
                                <span className='mr-2 text-gray-500'><MdLocationOn /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>Cox's Bazar</span>
                            </p>
                            <p className='flex items-center mt-1'>
                                <span className='mr-2 text-sm ml-0.5 text-gray-500'><BiTimeFive /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>08 NOV 2022 - 16 NOV 2022</span>
                            </p>
                            {text.length > 150 ? <p className='max-w-[600px]  font-poppins mt-2'>{text.slice(0, 150)}...</p> : <p className='max-w-[600px]  font-poppins mt-2'>{text}</p>}


                            <p className='font-poppins mt-2 bg-[#1e88e5]/90 inline-block text-white px-2 rounded-full shadow-md'>Available Tickets: 12</p>

                            <div className="flex items-center mt-1">
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 font-poppins">4.90 out of 5</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center xl:flex-col justify-between px-3'>
                        <p className='font-poppins hidden xl:block text-sm xl:mb-2'>Starting From</p>
                        <p className='hidden xl:flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-md font-semibold text-gray-500 line-through'>4500</span>
                        </p>
                        <p className='flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-xl font-bold text-gray-600 '>4499</span>
                        </p>
                        <button className='bg-[#f9a51a]/90 hover:bg-[#f9a51a] transition-all duration-150 text-white font-poppins px-3 py-2 rounded-md font-semibold text-sm shadow-lg whitespace-nowrap'>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:mx-0'>
                <div className='mt-3 border border-gray-200 bg-white rounded-lg shadow-lg max-w-xs xl:max-w-full h-[535px] overflow-y-auto xl:h-auto xl:flex items-center justify-between mx-auto'>
                    <div className='p-3 xl:flex'>
                        <div className='flex items-center overflow-hidden '>
                            <img className='w-[100%] lg:w-80 object-cover h-48 rounded-md cursor-pointer' src="https://time-tips.com/wp-content/uploads/2022/03/cover22.jpg" alt="" />
                        </div>
                        <div className='lg:ml-3'>
                            <h2 className='font-poppins text-xl mt-2 mb-1 font-semibold cursor-pointer inline-block'>Sajek Valley</h2>
                            <p className='flex items-center'>
                                <span className='mr-2 text-gray-500'><MdLocationOn /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>Cox's Bazar</span>
                            </p>
                            <p className='flex items-center mt-1'>
                                <span className='mr-2 text-sm ml-0.5 text-gray-500'><BiTimeFive /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>08 NOV 2022 - 16 NOV 2022</span>
                            </p>
                            {text.length > 150 ? <p className='max-w-[600px]  font-poppins mt-2'>{text.slice(0, 150)}...</p> : <p className='max-w-[600px]  font-poppins mt-2'>{text}</p>}


                            <p className='font-poppins mt-2 bg-[#1e88e5]/90 inline-block text-white px-2 rounded-full shadow-md'>Available Tickets: 5</p>

                            <div className="flex items-center mt-1">
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 font-poppins">4.90 out of 5</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center xl:flex-col justify-between px-3'>
                        <p className='font-poppins hidden xl:block text-sm xl:mb-2'>Starting From</p>
                        <p className='hidden xl:flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-md font-semibold text-gray-500 line-through'>4500</span>
                        </p>
                        <p className='flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-xl font-bold text-gray-600 '>4499</span>
                        </p>
                        <button className='bg-[#f9a51a]/90 hover:bg-[#f9a51a] transition-all duration-150 text-white font-poppins px-3 py-2 rounded-md font-semibold text-sm shadow-lg whitespace-nowrap'>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:mx-0'>
                <div className='mt-3 border border-gray-200 bg-white rounded-lg shadow-lg max-w-xs xl:max-w-full h-[535px] overflow-y-auto xl:h-auto xl:flex items-center justify-between mx-auto'>
                    <div className='p-3 xl:flex'>
                        <div className='flex items-center overflow-hidden '>
                            <img className='w-[100%] lg:w-80 object-cover h-48 rounded-md cursor-pointer' src="https://travel.discoverybangladesh.com/images/sylhet-sidebar.jpg" alt="" />
                        </div>
                        <div className='lg:ml-3'>
                            <h2 className='font-poppins text-xl mt-2 mb-1 font-semibold cursor-pointer inline-block'>Srimangal</h2>
                            <p className='flex items-center'>
                                <span className='mr-2 text-gray-500'><MdLocationOn /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>Cox's Bazar</span>
                            </p>
                            <p className='flex items-center mt-1'>
                                <span className='mr-2 text-sm ml-0.5 text-gray-500'><BiTimeFive /></span>
                                <span className='font-poppins text-xs font-bold text-gray-500'>08 NOV 2022 - 16 NOV 2022</span>
                            </p>
                            {text.length > 150 ? <p className='max-w-[600px]  font-poppins mt-2'>{text.slice(0, 150)}...</p> : <p className='max-w-[600px]  font-poppins mt-2'>{text}</p>}


                            <p className='font-poppins mt-2 bg-[#1e88e5]/90 inline-block text-white px-2 rounded-full shadow-md'>Available Tickets: 46</p>

                            <div className="flex items-center mt-1">
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-theme-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 font-poppins">4.90 out of 5</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center xl:flex-col justify-between px-3'>
                        <p className='font-poppins hidden xl:block text-sm xl:mb-2'>Starting From</p>
                        <p className='hidden xl:flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-md font-semibold text-gray-500 line-through'>4500</span>
                        </p>
                        <p className='flex items-center xl:mb-2'>
                            <span className=' text-2xl text-gray-700'><TbCurrencyTaka /></span>
                            <span className='font-poppins text-xl font-bold text-gray-600 '>4499</span>
                        </p>
                        <button className='bg-[#f9a51a]/90 hover:bg-[#f9a51a] transition-all duration-150 text-white font-poppins px-3 py-2 rounded-md font-semibold text-sm shadow-lg whitespace-nowrap'>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesCard;