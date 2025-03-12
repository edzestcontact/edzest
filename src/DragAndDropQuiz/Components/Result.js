import React from "react";
import { Button } from "react-bootstrap";

const Result = ({ score, total, allMatches, showSolution, setShowSolution }) => {
  return (
    <div className="text-center">
      <h2 className="text-success">Quiz Completed!</h2>
      <h4 className="text-primary">Your Score: {score} / {total}</h4>

      <Button
        variant="info"
        className="mt-3"
        onClick={() => setShowSolution(!showSolution)}
      >
        {showSolution ? "Hide Solution" : "View Solution"}
      </Button>

      <div className="mt-4">
        {allMatches.map((question, index) => (
          <div key={index} className="card p-3 mt-3 shadow">
            <h5 className="text-dark">{question.question}</h5>
            {Object.keys(question.answers).map((definition) => {
              const userAnswer = question.userMatches?.[definition] || ""; 
              const correctAnswer = question.answers[definition];
              const isCorrect = userAnswer === correctAnswer;
              const isAttempted = userAnswer !== "";

              return (
               <p
  key={definition}
  className={`p-2 rounded ${
    showSolution
      ? isCorrect
        ? "bg-success text-white"  // ✅ Green if correct
        : "bg-danger text-white"  // ❌ Red if incorrect
      : "bg-light text-dark" // Normal before View Solution
  }`}
>
  <strong>{definition}:</strong> {userAnswer || "Not Attempted"}  
  {showSolution && !isCorrect && isAttempted && (
    <>
      <br />
      <span className="text-warning">
        ✅ Correct Answer: {correctAnswer}
      </span>
    </>
  )}
</p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
