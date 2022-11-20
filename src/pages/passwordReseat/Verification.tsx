import React from 'react';

const Verification = () => {
    return (
        <div className='bg-gray-200 p-10'>
            <div className='bg-white md:w-1/2 mx-auto my-10 pt-5 pb-2 rounded-2xl'>
                <h2 className='text-2xl font-roboto px-8'>Code Verification</h2>

                <div className='border-b-2 border-gray-200 mt-3'></div>
                <p className='mt-5 font-roboto text-lg px-8'>Please enter code that has been sent to your email.</p>

                <div className='md:w-[75%] w-[80%] mx-auto'>
                    <input className='border border-gray-300 outline-none mt-3 mb-6 p-3 rounded-lg w-full' type="email" name="" id="" placeholder='Code' />
                </div>

                <div className='border-b-2 border-gray-200 mt-3'></div>
                <div className='text-right px-8'>
                    <button className="mt-4 mb-4 p-2 px-5 bg-gray-200 rounded cursor-pointer">Cancel</button>
                    <button className="mt-4 mb-4 p-2 px-5 bg-[#F9A51A] rounded cursor-pointer ml-3">Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Verification;