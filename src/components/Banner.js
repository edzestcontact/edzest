import React from "react";
// import { useNavigate } from "react-router-dom";
import pmiLogo from "../Assets/pmilogo.png"; // Make sure the path to your image is correct
import './Banner.css';

const Announcement = () => {
  // const navigate = useNavigate(); // Hook to navigate to a route

  return (
    <section className="bg-green-100 py-8 px-4 md:px-16 flex flex-col md:flex-col items-center justify-center text-center md:text-center">
      {/* Logo */}
      <div className="mb-4 md:mb-0 md:mr-6">
        <img
          src={pmiLogo}
          alt="PMI Logo"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
          
        />
      </div>

      {/* Content */}
      <div >
        <h2 className="sm-text-2xl md:text-3xl font-bold text-pink-600 mb-4">
          Next PMP® training batch starting from{" "}
          <span className="text-[#4748ac]">8th March</span>
        </h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Learn from an Authorized Training Partner, <br />
          <span className="font-semibold text-gray-800">
            ATP of Project Management Institute (PMI)
          </span>
        </p>

        {/* Button */}
        <a
  href="https://exams.edzest.org/learn/PMP--exam-prep-March--25-batch"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#4748ac] hover:bg-[4748ac] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
>
  Join Now
</a>
      </div>
    </section>
  );
};

export default Announcement;