import React from 'react';
/*import { Link } from 'react-router-dom';*/
import  heroImage from '../Assets/Hero.png'
const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800 text-left">
  <span className="block lg:block mb-2">Learn</span>
  <span className="block lg:block mb-2">Apply</span>
  <span className="block lg:block">Be Successful</span>
</h1>
        <p className="text-gray-600" style={{fontSize: '20px', opacity : '0.7'}}>
          Your trusted partner in mastering project management with a focused approach to PMP® certification.
        </p>
        <a
              href="https://exams.edzest.org/learn/PMP--exam-prep-March--25-batch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4748ac] hover:bg-[#37378c] text-white font-semibold py-3 px-6 rounded-lg transition text-decoration-none duration-300"
            >
              Enroll Now
            </a>
      </div>

      {/* Hero Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
