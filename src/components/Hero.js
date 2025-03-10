import React from 'react';
import hero from '../Assets/Hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative  h-[80vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})`, opacity:"0.4" }}
      >
        {/* Overlay to Reduce Background Opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center lg:text-left p-6">
        <h1 className="text-4xl lg:text-5xl font-openSansBold font-extrabold leading-tight text-gray-800">
          <span className="block lg:-translate-x-[399px] leading-[1.2]"style={{fontSize:"70px"}}>Learn.</span>
          <span className="block lg:-translate-x-[399px] leading-[1.2] mx-2"style={{fontSize:"70px"}}>Apply.</span>
          <span className="block lg:-translate-x-[39px] leading-[1.2]"style={{fontSize:"70px"}}>
            Deliver Successful Projects.
          </span>
        </h1>

        <p className="text-black lg:transform lg:-translate-x-[123px] text-lg lg:text-xl  mt-4">
          Training programs and workshops that help you master the skills of managing projects.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 lg:ml-[-34px]">
  <Link 
    to="/training" 
    className="bg-[#4748ac] hover:bg-[#37378c] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center sm:text-left"
    style={{ textDecoration: "none" }}                    
  >
    Training
  </Link>
</div>

      </div>
    </section>
  );
};

export default Hero;