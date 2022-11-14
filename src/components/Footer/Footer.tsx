import React from 'react';
import visa from '../../images/footer-img/footer-visa.svg'
import amex from '../../images/footer-img/footer-amex.svg'
import mastercard from '../../images/footer-img/mastercard.svg'
import dbal from '../../images/footer-img/payment-dbbl.svg'
import bkash from '../../images/footer-img/bkash.svg'
import nogod from '../../images/footer-img/nagad.svg'
import upay from '../../images/footer-img/upay.svg'
import union from '../../images/footer-img/union.svg'
import tap from '../../images/footer-img/payment-tap.svg'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import logo from '../../images/footer-img/logo.png'




const Footer = () => {
    return (
    
<footer className="container bg-gray-900 font-poppins">
  <div className=' grid gap-8 py-8 px-6 md:grid-cols-5 text-white'>
      <div>
        <h1 className='mb-2 font-bold'>Discover</h1>
        <h4 className='text-sm mb-2 text-gray-200'>Home</h4>
        <h4 className='text-sm mb-2 text-gray-200'>Terms</h4>
        <h4 className='text-sm text-gray-200'>Talent & Culture</h4>
      </div>

      <div>
        <h4 className='pt-8 text-sm text-gray-200'>Refund Policy</h4>
        <h4 className='text-sm my-2 text-gray-200'>EMI Policy</h4>
        <h4 className='text-sm text-gray-200'>Privacy Policy</h4>
      </div>

      <div>
        <h1 className='mb-2 font-bold pl-5'>Payment Methods</h1>
        <div className='grid gap-y-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-2 p-4'>
          <img src={visa} alt=''></img>
          <img src={amex} alt=''></img>
          <img src={mastercard} alt=''></img>
          <img src={dbal} alt=''></img>

          <img src={bkash} alt=''></img>
          <img src={nogod} alt=''></img>
          <img src={upay} alt=''></img>
          <img src={union} alt=''></img>
        
        
        <img className='pt-1' src={tap} alt=''></img>
        </div>
      </div>

      <div>
        <h1 className='mb-2 font-bold'>Need Help ?</h1>
        <p className='text-sm text-gray-200'>We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).</p>
      </div>

      <div className='lg:ml-5 lg:pl-5'>
        <h1 className='mb-2 font-bold'>Contact</h1>
        <p className='pb-3 text-sm text-gray-200'>info@gozayaan.com</p>
        <h1 className='pb-2 text-sm text-gray-200'>+88 09678 332211</h1>
        <div className='flex mt-4'>
          <a className='mr-3 text-2xl p-2 bg-gray-500 rounded-full' href='https://www.facebook.com'>
            <FaFacebookF/>
          </a>
          <a className='mr-3 text-2xl p-2 bg-gray-500 rounded-full' href='https://www.youtube.com'>
            <AiFillYoutube/>
          </a>
          <a className='text-2xl p-2 bg-gray-500 rounded-full' href='https://www.instagram.com'>
            <AiFillInstagram/>
          </a>
        </div>
      </div>
     </div>
     <hr className='mx-8'/>
     <div className='flex justify-between py-5'>
      <img className='pl-8 w-25' src={logo} alt="" />
      <p className='text-gray-100 text-sm pr-8'>© Copyright Travel Guru Ltd.</p>
     </div>
    
</footer>

       
    );
};

export default Footer;