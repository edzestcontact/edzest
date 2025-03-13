


import React from "react";

export default function PreparationOptions() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Learning Options</h1>
      <p className="text-lg text-gray-700 mb-12 text-center" style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
        Empower your certification journey with our comprehensive preparation options.
        Choose from expert-led training, and real exam-like mock tests to achieve exam
        success confidently.
      </p>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Card 1 */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-6 w-80 text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-black mb-4">Live Online Training</h2>
          <ul className="text-gray-700 text-left   mb-6 space-y-2">
            <li>Interactive, Instructor-led training sessions to prepare you for the certification exam</li>
          </ul>
          <a href="https://exams.edzest.org/learn/PMP-training-Apr-25-batch" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 px-6 rounded "style={{marginTop:"10px"}}>
              Learn More
            </button>
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-6 w-80 text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-black mb-4">Recorded Videos Training</h2>
          <ul className="text-gray-700 text-left  list-inside mb-6 space-y-2">
            <li>Learn at your own pace through recorded videos and quizzes.</li>
          </ul>
          <a href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 px-6 rounded " style={{marginTop:"35px"}}>
              Learn More
            </button>
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-6 w-80 text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-black mb-4">Mock Exams</h2>
          <ul className="text-gray-700 text-left  list-inside mb-6 space-y-2">
            <li>Test your preparation with more than 1,200 exam-like questions with detailed explanations.</li>
          </ul>
          <a href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 px-6 rounded " style={{marginTop:"10px"}}>
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
