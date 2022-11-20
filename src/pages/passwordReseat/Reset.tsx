import React from 'react';
import card1 from '../../images/cards/card1.png'

const Reset = () => {
    return (
        <div className='bg-gray-200 p-10'>
            <div className='bg-white md:w-1/2 mx-auto my-10 pt-5 pb-2 rounded-2xl'>
                <h2 className='text-2xl font-roboto px-8'>Reset Your Password</h2>
                <div className='border-b-2 border-gray-200 mt-3'></div>

                <div className='md:flex lg:flex px-8 gap-x-2 my-8 justify-between font-roboto'>
                    <div className='text-xl'>
                        <p>How do you want to receive the code to reset your password?</p>
                        <div className='mt-12'>
                            <p>Send code via email</p>
                            <p className='text-blue-500'>mdrabbi.asm@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <img className='w-32 h-32 rounded-full ml-4' src={card1} alt="" />
                        <p>mdrabbi.asm@gmail.com</p>
                        <p>Facebook User</p>
                    </div>
                </div>
                
                <div className='border-b-2 border-gray-200 mt-3'></div>
                <div className='text-right px-8'>
                    <button className="mt-4 mb-4 p-2 px-5 bg-gray-200 rounded cursor-pointer">Not You?</button>
                    <button className="mt-4 mb-4 p-2 px-5 bg-[#F9A51A] rounded cursor-pointer ml-3">Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Reset;