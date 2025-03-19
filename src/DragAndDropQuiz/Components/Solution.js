
// import React, { useState } from "react";

// const Solution = ({ solutions, closeSolution, totalQuestions, quizData, quizCompleted }) => {
//   const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

//   const nextSolution = () => {
//     if (currentSolutionIndex < totalQuestions - 1) {
//       setCurrentSolutionIndex((prev) => prev + 1);
//     }
//   };

//   const prevSolution = () => {
//     if (currentSolutionIndex > 0) {
//       setCurrentSolutionIndex((prev) => prev - 1);
//     }
//   };

//   // ✅ Ensure current question exists before rendering
//   const currentQuestion = quizData?.[currentSolutionIndex];

//   return (
//     <div className="solution-container">
//       {/* ✅ "Your Attempt" Section Inside a Separate Box */}
//       <div className="your-attempt-box">
//         {/* ✅ Added Question Serial Number */}
//         <h2>Q{currentSolutionIndex + 1}. Your Attempt</h2>

//         {Array.isArray(solutions[currentSolutionIndex]) && solutions[currentSolutionIndex].length > 0 ? (
//           <div className="your-attempt-list">
//             {solutions[currentSolutionIndex].map((sol, index) => {
//               // ✅ Find the actual definition the user matched
//               const matchedDefinition = currentQuestion.definitions.find(def => def.match === sol.correctMatch)?.text || "Unknown";

//               return (
//                 <div 
//                   key={index} 
//                   className={`your-attempt-row ${sol.correct ? "correct-attempt" : "incorrect-attempt"}`}
//                 >
//                   <span className="serial-number">{index + 1}.</span> 
//                   <div className="term-box">{sol.term}</div> 
//                   <div className="arrow">→</div>
//                   <div className="definition-box">
//                     {matchedDefinition} 
//                     <span className="match-symbol">{sol.correct ? " ✅" : " ❌"}</span>
//                   </div> 
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p>❌ Not Attempted</p>
//         )}
//       </div>

//       {/* ✅ Wrap "Correct Matches" in a structured box */}
//       {quizCompleted && currentQuestion && (
//         <div className="correct-matches-box">
//           <h3>Correct Matches:</h3>
//           <div className="correct-matches-list">
//             {currentQuestion.definitions.map((definition, index) => (
//               <div key={index} className="correct-match-row">
//                 <div className="term-box">{definition.match}</div> 
//                 <div className="arrow">→</div>
//                 <div className="definition-box">{definition.text}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ✅ Wrapped buttons inside a container for proper spacing */}
//       <div className="solution-buttons-container">
//         <button onClick={prevSolution} disabled={currentSolutionIndex === 0}>Previous</button>
//         <button onClick={nextSolution} disabled={currentSolutionIndex === totalQuestions - 1}>Next</button>
//         <button onClick={closeSolution}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Solution;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Solution = ({ solutions, closeSolution, totalQuestions, quizData, quizCompleted }) => {
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const navigate = useNavigate();

  const nextSolution = () => {
    if (currentSolutionIndex < totalQuestions - 1) {
      setCurrentSolutionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top on "Next"
    }
  };

  const prevSolution = () => {
    if (currentSolutionIndex > 0) {
      setCurrentSolutionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top on "Previous"
    }
  };

  // ✅ Scroll to top when View Solution is clicked
  const handleViewSolution = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentQuestion = quizData?.[currentSolutionIndex];

  return (
    <div className="solution-container">
      <div className="your-attempt-box">
        <h2>Q{currentSolutionIndex + 1}. Your Attempt</h2>
        {Array.isArray(solutions[currentSolutionIndex]) && solutions[currentSolutionIndex].length > 0 ? (
          <div className="your-attempt-list">
            {solutions[currentSolutionIndex].map((sol, index) => {
              const matchedDefinition =
                currentQuestion.definitions.find((def) => def.match === sol.correctMatch)?.text || "Unknown";

              return (
                <div
                  key={index}
                  className={`your-attempt-row ${sol.correct ? "correct-attempt" : "incorrect-attempt"}`}
                >
                  <span className="serial-number">{index + 1}.</span>
                  <div className="term-box">{sol.term}</div>
                  <div className="arrow">→</div>
                  <div className="definition-box">
                    {matchedDefinition}
                    <span className="match-symbol">{sol.correct ? " ✅" : " ❌"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>❌ Not Attempted</p>
        )}
      </div>

      {quizCompleted && currentQuestion && (
        <div className="correct-matches-box">
          <h3>Correct Matches:</h3>
          <div className="correct-matches-list">
            {currentQuestion.definitions.map((definition, index) => (
              <div key={index} className="correct-match-row">
                <div className="term-box">{definition.match}</div>
                <div className="arrow">→</div>
                <div className="definition-box">{definition.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      
<div className="solution-buttons-container">
        <button onClick={prevSolution} disabled={currentSolutionIndex === 0}>
          Previous
        </button>
        <button onClick={nextSolution} disabled={currentSolutionIndex === totalQuestions - 1}>
          Next
        </button>
        {/* <button onClick={closeSolution}>Close</button> */}
        <button  onClick={() => navigate("/drag-and-drop")}>Close</button>
      </div>
      <a
        href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-center text-[#4748ac] text-decoration-none font-semibold py-2 px-6 rounded mt-6 inline-block"
      >
        Practice more exam-like questions
      </a>
    </div>
  );
};

export default Solution;



