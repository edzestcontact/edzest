

import React from 'react';
import hero from '../Assets/Hero.png';
import { Link } from 'react-router-dom';
import AdBanner from './AdBanner';

const Hero = () => {
  return (
    <>

     {/* Dynamic Ad Banner */}
     <AdBanner />

    <section className="relative h-[80vh] flex items-center justify-center px-4 sm:px-6">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})`, opacity: "0.4" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center lg:text-left p-4 sm:p-6">
        <h1 className="font-openSansBold font-extrabold leading-tight text-gray-800">
          <span className="block lg:-translate-x-[399px] leading-[1.2] text-[40px] sm:text-[50px] lg:text-[70px]">
            Learn.
          </span>
          <span className="block lg:-translate-x-[399px] leading-[1.2] mx-2 text-[40px] sm:text-[50px] lg:text-[70px]">
            Apply.
          </span>
          <span className="block lg:-translate-x-[40px] leading-[1.2] text-[40px] sm:text-[50px] lg:text-[70px]">
            Deliver Successful Projects.
          </span>
        </h1>

        <p className="text-black  sm:text-lg lg:text-xl mt-3 sm:mt-4 lg:-translate-x-[180px]" style={{fontFamily:"sans-serif", fontSize:"18px"}}>
          Training programs and workshops that help you master the skills of managing projects.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-6 mt-3 sm:mt-10 lg:ml-[-34px]">

        <div className="flex justify-center sm:justify-start">
          <Link
            to="/training"
            className="bg-[#4748ac] hover:bg-[#37378c] text-white font-semibold 
                      py-2 px-3 text-sm sm:text-base lg:text-lg 
                      sm:py-3 sm:px-6 lg:py-4 lg:px-8 
                      w-[120px] sm:w-[150px] lg:w-[180px] 
                      rounded-lg transition duration-300 text-center"
            style={{ textDecoration: "none" }}
          >
            Explore
          </Link>
        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
