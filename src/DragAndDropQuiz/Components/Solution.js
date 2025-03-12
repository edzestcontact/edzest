
import React, { useState } from "react";

const Solution = ({ solutions, closeSolution, totalQuestions, quizData, quizCompleted }) => {
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

  const nextSolution = () => {
    if (currentSolutionIndex < totalQuestions - 1) {
      setCurrentSolutionIndex((prev) => prev + 1);
    }
  };

  const prevSolution = () => {
    if (currentSolutionIndex > 0) {
      setCurrentSolutionIndex((prev) => prev - 1);
    }
  };

  // ✅ Ensure current question exists before rendering
  const currentQuestion = quizData?.[currentSolutionIndex];

  return (
    <div className="solution-container">
      {/* ✅ "Your Attempt" Section Inside a Separate Box */}
      <div className="your-attempt-box">
        {/* ✅ Added Question Serial Number */}
        <h2>Q{currentSolutionIndex + 1}. Your Attempt</h2>

        {Array.isArray(solutions[currentSolutionIndex]) && solutions[currentSolutionIndex].length > 0 ? (
          <div className="your-attempt-list">
            {solutions[currentSolutionIndex].map((sol, index) => {
              // ✅ Find the actual definition the user matched
              const matchedDefinition = currentQuestion.definitions.find(def => def.match === sol.correctMatch)?.text || "Unknown";

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

      {/* ✅ Wrap "Correct Matches" in a structured box */}
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

      {/* ✅ Wrapped buttons inside a container for proper spacing */}
      <div className="solution-buttons-container">
        <button onClick={prevSolution} disabled={currentSolutionIndex === 0}>Previous</button>
        <button onClick={nextSolution} disabled={currentSolutionIndex === totalQuestions - 1}>Next</button>
        <button onClick={closeSolution}>Close</button>
      </div>
    </div>
  );
};

export default Solution;








