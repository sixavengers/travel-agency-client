import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import ModalVideo from "react-modal-video";
import "./../../utilities/modal-video.min.css";
const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="JxCDg3qZBOE"
        onClose={() => setOpen(false)}
      />
      <div className="w-full h-screen relative  grid place-items-center font-poppins">
        <div className="absolute top-0 left-0 bg-[#000300] opacity-50 z-40 w-screen h-screen"></div>

        {/* Video area */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src={
              "https://res.cloudinary.com/drnjkysvv/video/upload/v1667133020/maldivesVideo_uxildc.mp4"
            }
            type="video/mp4"
          />
        </video>

        <div className="container mx-auto z-50 mt-10 px-5 2xl:px-0">
          <div className="flex items-center justify-between 2xl:gap-80 gap-28 ">
            <div className="left-content 2xl:flex-1">
              <h1 className="2xl:text-5xl text-5xl font-bold  text-white font-poppins leading-snug">
                Find Your Perfect <br />
                <span className="text-theme-secondary">Vacation Place</span>
              </h1>
              <p className="text-white mt-4 2xl:leading-7 leading-7 text-justify">
                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </p>

              <div className="flex items-center gap-3 mt-4">
                <span
                  onClick={() => setOpen(true)}
                  className="w-12 h-12 bg-white grid place-items-center text-4xl cursor-pointer rounded-full text-black absolute left-14 bottom-6 2xl:bottom-8"
                >
                  <BiPlay />
                </span>

                <button className="bg-[#F9A51A] text-black 2xl:px-6 px-5  rounded mt-2 2xl:h-16 h-12">
                  Explore Now
                </button>
              </div>
            </div>
            <div className="right-content 2xl:flex-1 ">
              <form action="" className="bg-white shadow rounded 2xl:p-20 p-10">
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

                  <div className="input-flex flex items-center gap-4 mt-4">
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
    </>
  );
};

export default Home;
