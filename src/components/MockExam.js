import mockphotoImg from "../Assets/mockphoto.png"; // Importing an image for use in the hero section.
import fulllengthImg from "../Assets/fulllength.png"; // Importing an image for full-length mock exams.
import minimockImg from "../Assets/minimock.png"; // Importing an image for mini mock exams.
import PersonalizedImg from "../Assets/personalized.png"; // Importing an image for personalized support.
import Contact from "./Contact"; // Importing the Contact component for the contact section.
import Footer from "./Footer"; // Importing the Footer component for the footer section.

const PMPPracticeMockExams = () => { // Defining a functional React component named PMPPracticeMockExams.
  return (
    <div> {/* Wrapper div for the entire component content */}
    
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between h-[70vh] px-6 md:px-16" style={{fontFamily:"sans-serif", fontSize:"17px"}}>
        {/* Hero section: Styling for layout and responsiveness */}
        <div className="max-w-lg"> {/* Container for text content in the hero section */}
          <h1 className="text-4xl md:text-5xl font-bold text-black-600">
            PMP® Practice <br />
            Mock Exams by{" "}
            <span className="text-[#4748ac]">Edzest</span> {/* Highlighting the brand name */}
          </h1>
          <p className="text-gray-500 mt-4">
            Get Real Exam-Like Questions and Expert Insight {/* Hero description */}
          </p>
          <a href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#4748ac] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#3737ac] transition">
    Buy Now {/* Call-to-action button */}
  </button>
</a>
        </div>
        <div className="mt-8 ml: md:mt-0"> {/* Container for the image in the hero section */}
          <img
            src={mockphotoImg} // Displaying the imported hero image.
            alt="PMP Training" // Alternative text for accessibility.
            className="rounded-lg  max-h-96" // Styling for the image.
          />
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-purple-100 py-12" style={{fontFamily:"sans-serif", fontSize:"17px"}}> {/* Background and padding for the section */}
        <div className="max-w-7xl mx-auto px-6"> {/* Container with maximum width */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
            What's Included: {/* Section heading */}
          </h1>

          {/* Section 1: Mini Mock Exams */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="flex-1"> {/* Text content for Mini Mock Exams */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Mini Mock Exams {/* Subheading */}
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  Shorter, targeted exams to evaluate your understanding of
                  specific topics. {/* Feature description */}
                </li>
                <li>Perfect for pinpointing areas that need further revision.</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center mt-4 md:mt-0"> {/* Image container */}
              <img
                src={minimockImg} // Displaying the Mini Mock Exams image.
                alt="Mini Mock Exams" // Alternative text for accessibility.
                className="max-w-[250px]" // Styling for the image.
              />
            </div>
          </div>

          {/* Section 2: Full-Length Mock Exams */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="flex-1"> {/* Text content for Full-Length Mock Exams */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Full-Length Mock Exams {/* Subheading */}
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  A complete, real exam-like simulation with 1200+ questions
                  covering all PMP® domains. {/* Feature description */}
                </li>
                <li>
                  Experience the pressure of the actual exam and refine your
                  time management skills. {/* Benefit description */}
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center mt-4 md:mt-0"> {/* Image container */}
              <img
                src={fulllengthImg} // Displaying the Full-Length Mock Exams image.
                alt="Full-Length Mock Exams" // Alternative text for accessibility.
                className="max-w-[250px]" // Styling for the image.
              />
            </div>
          </div>

          {/* Section 3: Personalized Support */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1"> {/* Text content for Personalized Support */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                1:1 Personalized Support {/* Subheading */}
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  After each mock exam, you’ll receive one-on-one support from
                  our expert trainers. {/* Feature description */}
                </li>
                <li>
                  Get tailored feedback and strategies to improve your
                  performance and tackle areas of difficulty. {/* Benefit description */}
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center mt-4 md:mt-0"> {/* Image container */}
              <img
                src={PersonalizedImg} // Displaying the Personalized Support image.
                alt="Personalized Support" // Alternative text for accessibility.
                className="max-w-[250px]" // Styling for the image.
              />
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="text-center mt-10"> {/* Container for the Buy Now button */}
            <button className="bg-[#4748ac] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#4748ac]transition">
              Buy Now {/* Call-to-action button */}
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact /> {/* Rendering the imported Contact component */}

      {/* Footer Section */}
      <Footer /> {/* Rendering the imported Footer component */}

    </div>
  );
};

export default PMPPracticeMockExams; // Exporting the component for use in other parts of the application.
