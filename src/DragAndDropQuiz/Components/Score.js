// import React from "react";

// const Score = ({ score, totalQuestions, viewSolution }) => {
//   return (
//     <div className="score-container">
//       <h2>Score: {score} / {totalQuestions}</h2>
//       <button onClick={viewSolution}>View Solution</button>
//     </div>
//   );
// };

// export default Score;


import React from "react";

const Score = ({ score, totalQuestions, viewSolution }) => {
  const handleViewSolution = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top
    viewSolution(); // ✅ Call the original function
  };

  return (
    <div className="score-container">
      <h2>Score: {score} / {totalQuestions}</h2>
      <button onClick={handleViewSolution}>View Solution</button>
    </div>
  );
};

export default Score;
