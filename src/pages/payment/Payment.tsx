import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0gMADuiIiaFlXNz9N5k6HXIPhnvURpmXcZeRZKvElE1vRaWTc2jUCiZQo6KHnurxrTpsvhinpjyKGlXZRDVFwg00cdBRF6R2');


const Payment = () => {
    return (
        <div className='bg-[#EBF0F4] pb-12'>
            <div className='text-center text-lg font-roboto py-5'>
                <h3>PAY FOR YOUR DESTINATION - <span className='text-[#1E88E5]'>Packege Name</span></h3>
                <p className=''>Please Pay : <span className='text-red-600'>$120</span></p>
            </div>
            <div className='bg-white rounded-2xl shadow-2xl w-96 mx-auto p-8 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;