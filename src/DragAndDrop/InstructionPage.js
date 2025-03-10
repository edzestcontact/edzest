import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Import icon for instructions
import "./InstructionPage.css";

const InstructionPage = ({ startQuiz }) => {
  return (
    <div className="instruction-container">
      {/* ✅ Introductory Text - Left Aligned & No Bold */}
      <h2 className="instruction-title">📘 Drag and Drop Questions</h2>
      <p className="instruction-text">
        Practice the drag and drop questions for your upcoming PMP® certification exam.  
        There are 3 sets of 20 questions for your practice that cover almost all combinations for the exam.
      </p>
      <p className="instruction-text">
        Every set of 20 questions is followed by your score and solution to show the correct match.
      </p>
      <p className="instruction-text">
        If you would like to discuss any question, please note down the set and question number and send us your doubts.
      </p>
      <p className="instruction-text">Go ahead and practice now.</p>

      <hr className="divider" /> {/* ✅ Divider for better visual separation */}

      {/* ✅ Instruction List */}
      <h3 className="instruction-subtitle">Quiz Instructions</h3>
      <p className="instruction-subtitle">Please read these instructions before starting the quiz:</p>

      <div className="instruction-list">
        <div className="instruction-item">
          <FaCheckCircle className="icon" />
          <span>Drag the correct term to its matching definition.</span>
        </div>
        <div className="instruction-item">
          <FaCheckCircle className="icon" />
          <span>You can move to the next question only after placing all terms.</span>
        </div>
        <div className="instruction-item">
          <FaCheckCircle className="icon" />
          <span>Your score will increase <strong>only if all matches are correct.</strong></span>
        </div>
        <div className="instruction-item">
          <FaCheckCircle className="icon" />
          <span>Use the <strong>Previous</strong> button to go back to previous questions.</span>
        </div>
        <div className="instruction-item">
          <FaCheckCircle className="icon" />
          <span>Click <strong>Submit</strong> at the end to finish the quiz.</span>
        </div>
      </div>

      <button className="start-btn" onClick={startQuiz}>Start Quiz 🚀</button>
    </div>
  );
};

export default InstructionPage;
