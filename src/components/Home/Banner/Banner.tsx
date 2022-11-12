import React from 'react';
import Bannerimg from "../../../images/banner.png"

const Banner = () => {
    return (
        <div>
            <img className='md:mt-2 px-20 mb-5 bannerimg mt-8' src={Bannerimg} alt="" />
        </div>
    );
};

export default Banner;