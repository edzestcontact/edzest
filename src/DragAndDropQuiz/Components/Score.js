import React from "react";

const Score = ({ score, totalQuestions, viewSolution }) => {
  return (
    <div className="score-container">
      <h2>Score: {score} / {totalQuestions}</h2>
      <button onClick={viewSolution}>View Solution</button>
    </div>
  );
};

export default Score;
