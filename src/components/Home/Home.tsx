import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import ModalVideo from "react-modal-video";
import "./../../utilities/modal-video.min.css";
import React from 'react'
import Banner from "./Banner/Banner";


type Props = {}

const Home = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <div className="full-area">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="JxCDg3qZBOE"
        onClose={() => setOpen(false)}
      />
      <div className="w-full min-h-screen grid place-items-center font-poppins">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000300] opacity-30 z-40 w-full h-full"></div>

        {/* Video area */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 bottom-0 w-full object-cover h-full"
        >
          <source
            src={
              "https://res.cloudinary.com/drnjkysvv/video/upload/v1667133020/maldivesVideo_uxildc.mp4"
            }
            type="video/mp4"
          />
        </video>
        <div className="lg:container z-40 mx-auto px-5 2xl:px-0 ">
          <div className="md:flex items-center justify-between 2xl:gap-80 lg:gap-28 flex-col md:flex-row md:gap-x-8 md:gap-y-12 gap-14">
            <div className="left-content 2xl:flex-1 md:mt-6  mt-25 mx-auto sm:pr-8">
              <h1 className="md:text-4xl lg:font-5xl font-bold  text-white font-poppins leading-snug">
                Find Your Perfect <br />
                <span className="text-theme-secondary md:text-4xl lg:font-5xl">
                  Vacation Place
                </span>
              </h1>
              <p className="text-white mt-4 2xl:leading-7 md:leading-7 text-justify">
                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </p>
              
              <div className="flex items-center gap-4 sm:gap-0 mt-4 ">
                {/* ========================== */}
                <div>
                  <span
                    onClick={() => setOpen(true)}
                    className="w-12 h-12 bg-white grid place-items-center text-4xl cursor-pointer rounded-full text-black md:absolute md:left-[4%] bottom-[35%] md:bottom-[2%]"
                  >
                    <BiPlay />
                  </span>
                </div>

                <button className="bg-[#F9A51A] text-black 2xl:px-6 px-5 rounded mt-2 2xl:h-16 h-12">
                  Explore Now
                </button>
              </div>
            </div>
            <div className="right-content 2xl:flex-1 sm:pr-8">
              <form action="" className="bg-white shadow rounded 2xl:p-20 p-10 sm:pr-8 lg:pr-8 mt-5">

                <div className="inputs">
                  <div className="input-group">
                    <label htmlFor="origin">Origin</label>
                    <input
                      className="border 2xl:p-4 p-2  my-1 rounded outline-none w-full bg-[#F2F2F2]"
                      type="text"
                      name="origin"
                      id="origin"
                      placeholder="Origin"
                    />
                  </div>
                  <div className="input-group mt-4">
                    <label htmlFor="Destination">Destination</label>
                    <input
                      className="border 2xl:p-4 p-2  my-1 rounded outline-none w-full bg-[#F2F2F2]"
                      type="text"
                      name="Destination"
                      id="Destination"
                      placeholder="Destination"
                    />
                  </div>
                  {/* ================================================== */}
                  <div className="input-flex md:flex items-center gap-4 mt-4">
                    <div className="input-group flex-1">
                      <label htmlFor="from">From</label>
                      <input
                        className="border 2xl:p-4 p-2  my-1 rounded outline-none w-full bg-[#F2F2F2]"
                        type="date"
                        name="from"
                        id="from"
                        placeholder="From"
                      />
                    </div>
                    <div className="input-group flex-1">
                      <label htmlFor="to">To</label>
                      <input
                        className="border 2xl:p-4 p-2 my-1 rounded outline-none w-full bg-[#F2F2F2]"
                        type="date"
                        name="to"
                        id="to"
                        placeholder="To"
                      />
                    </div>
                  </div>
                  <div className="input-group mt-4">
                    <button className="bg-[#F9A51A] 2xl:h-16 h-12 w-full p-4 rounded hover:tracking-widest transition-all">
                      Start Booking
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Banner />
    </>
  );
}
export default Home


// type Props = {}

// const Home = ():Props => {

// };

// export default Home;
