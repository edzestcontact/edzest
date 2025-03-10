import React from "react";

export default function PreparationOptions() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-black mb-6 text-center">Learning Options</h1>
      <p className="text-lg text-gray-700 mb-12 text-center">
        Empower your certification journey with our comprehensive preparation options.
        Choose from expert-led training, and real exam-like mock tests to achieve exam
        success confidently.
      </p>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 justify-items-center">
        {/* Card 1 */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-8 w-96 text-center">
          <h2 className="text-xl font-bold text-[#4748ac] mb-4">Training</h2>
          <p className="text-gray-800 font-semibold mb-4">
            Master PMP® with Expert-Led Training & Free Mock Exam Access
          </p>
          <ul className="text-gray-700 list-disc list-inside mb-8 space-y-2">
            <li>Certification exam prep- PMP®, ACP, CAPM, RMP, PSM</li>
            <li>Tools mastery- MSP, JIRA</li>
            <li>Frameworks and Approach- DevOps, Scrum, SAFe</li>
          </ul>
          <a
            href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 px-6 rounded">
              Enroll Now
            </button>
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-purple-50 rounded-lg shadow-lg p-8 w-96 text-center">
          <h2 className="text-xl font-bold text-[#4748ac] mb-4">Workshops</h2>
          <p className="text-gray-800 font-semibold mb-4">
            Ace the PMP® Exam with Realistic Mock Tests
          </p>
          <ul className="text-gray-700 list-disc list-inside mb-8 space-y-2">
            <li>Practical learning different aspects of Project Management- 
            Managing Risks, Leading a Team, Managing conflict.</li>
           
          </ul>
          <a
            href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#4748ac] hover:bg- text-white font-semibold mt-16 py-2 px-6 rounded">
              Enroll Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}