import React from "react";
import handshakeImg from "../Assets/handshake.png"; 
import introImg from "../Assets/Introduction.png"; 
import visionMissionImg from "../Assets/VisionMission.png"; 
import servicesImg from "../Assets/Services.png";
import Footer from "./Footer";

const AboutEdzest = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white mt-2 overflow-x-hidden w-full">
        
        {/* About Edzest Section */}
        <div className="relative w-full max-w-screen-xl flex flex-col md:flex-row mb-16 mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={handshakeImg}
              alt="Instructor presenting online"
              className="w-full max-w-md md:max-w-lg lg:max-w-full object-cover rounded-md shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">About Edzest</h2>
            <hr className="w-20 border-2 border-blue-900 mb-4" />
            <p className="text-gray-700 text-base md:text-lg">
              Edzest Education Services is a Bengaluru-based company specializing in Project Management Professional (PMP) certification.
            </p>
            <p className="text-gray-700 text-base md:text-lg mt-4">
              Their mission is to empower individuals to excel in project management by offering comprehensive training programs and resources.
            </p>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="relative w-full max-w-screen-xl flex flex-col md:flex-row mb-16 mx-auto">
  <div className="w-full md:w-1/2 p-6 md:p-10">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Introduction</h2>
    <p className="text-gray-700 text-base md:text-lg mt-4">
      At Edzest, we are committed to empowering professionals through industry-relevant training, certifications, and career development services. Since our inception in 2021, we have been transforming careers by providing hands-on learning experiences that help individuals gain the skills needed to excel in competitive job markets.
      
      Our diverse training programs cover the latest trends and technologies, ensuring participants are always at the forefront of their industries. In addition to certification, we offer workshops and career development services that help bridge the gap between education and employment, guiding professionals at all stages of their careers.
      
      Based in Bengaluru, Edzest continues to grow as a leader in professional education, creating a supportive community for learners. Whether you’re looking to gain certifications, enhance your expertise, or take the next step in your career, Edzest is here to help you succeed.
    </p>
  </div>
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={introImg}
      alt="Instructor presenting online"
      className="w-full max-w-md md:max-w-lg lg:max-w-full object-cover rounded-md shadow-md"
    />
  </div>
</div>



        {/* Our History Section */}
<div className="w-full max-w-screen-xl text-center my-16 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our History</h2>
  <p className="text-gray-700 text-base md:text-lg mt-4 max-w-3xl mx-auto">
    Edzest has evolved through a series of significant milestones, from its inception to becoming a trusted name in professional certification and career development.
  </p>
  <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-10">
    {["2021", "2022", "2023", "2024", "2025"].map((year, index) => (
      <div
        key={index}
        className="bg-blue-900 text-white p-6 rounded-lg w-full sm:w-80 md:w-64 shadow-lg"
      >
        <h3 className="text-xl font-bold">{year}</h3>
        {year === "2021" && (
          <p className="text-sm mt-2">
            Edzest was officially incorporated with the vision of empowering professionals through top-notch training and certification programs. The foundation was laid for building a trusted brand in the education and career development space.
          </p>
        )}
        {year === "2022" && (
          <p className="text-sm mt-2">
            As the training programs gained traction, Edzest’s first cohort of participants earned their certifications, marking a key milestone. The growing community of certified professionals fueled the company's reputation for delivering high-quality educational experiences.
          </p>
        )}
        {year === "2023" && (
          <p className="text-sm mt-2">
            Edzest expanded its operations by setting up a new office in Bengaluru, a key tech hub in India. This move enabled better support for clients and the growing team, while strengthening partnerships with industry leaders in the region.
          </p>
        )}
        {year === "2024" && (
          <p className="text-sm mt-2">
            By 2024, over 200 professionals had been certified through Edzest's comprehensive training programs. This achievement reflected the trust in the programs and the success of the rigorous curricula in developing highly skilled professionals.
          </p>
        )}
        {year === "2025" && (
          <p className="text-sm mt-2">
            Edzest diversified its offerings by launching workshops and career development services. These additions aimed to bridge the gap between education and employment, providing participants with hands-on learning and personalized career guidance.
          </p>
        )}
      </div>
    ))}
  </div>
</div>




        </div>

        {/* Vision & Mission Section */}
        <div className="relative w-full max-w-screen-xl flex flex-col md:flex-row mb-16 mx-auto">
          <div className="w-full md:w-1/2 flex justify-center items-center p-6">
            <img src={visionMissionImg} alt="Vision & Mission" className="max-w-xs md:max-w-md w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Vision & Mission</h2>
            <h3 className="text-xl font-bold text-blue-900 mt-4">Vision</h3>
            <p className="text-gray-700 text-base md:text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ipsum vitae lacus lobortis lacinia.
            </p>
            <h3 className="text-xl font-bold text-blue-900 mt-6">Mission</h3>
            <p className="text-gray-700 text-base md:text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ipsum vitae lacus lobortis lacinia.
            </p>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="relative w-full max-w-screen-xl flex flex-col md:flex-row mb-16 mx-auto">
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Services</h2>
            <p className="text-gray-700 text-base md:text-lg mt-4">
              We offer a range of training programs and resources to help professionals achieve PMP certification and excel in project management.
            </p>
            <ul className="list-disc text-gray-700 text-base md:text-lg mt-4 ml-6">
              <li>Comprehensive PMP Training</li>
              <li>Mock Exams & Practice Questions</li>
              <li>One-on-One Coaching</li>
              <li>Corporate Training Solutions</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={servicesImg}
              alt="Instructor presenting online"
              className="w-full max-w-md md:max-w-lg lg:max-w-full object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      
      
      <Footer />
    </>
  );
};

export default AboutEdzest;
