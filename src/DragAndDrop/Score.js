import React, { useState } from "react"; // Importing React and useState hook

// Score component that displays the final score and allows viewing solutions
const Score = ({ totalScore, totalQuestions, allUserMatches, allCorrectAnswers }) => {
  // State to toggle the visibility of the solution section
  const [showSolution, setShowSolution] = useState(false);
  // State to track the currently viewed solution index
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

  // Function to move to the next solution in the list
  const handleNextSolution = () => {
    if (currentSolutionIndex < allUserMatches.length - 1) {
      setCurrentSolutionIndex(currentSolutionIndex + 1);
    }
  };

  // Function to move to the previous solution in the list
  const handlePreviousSolution = () => {
    if (currentSolutionIndex > 0) {
      setCurrentSolutionIndex(currentSolutionIndex - 1);
    }
  };

  return (
    <div className="mt-4 text-center">
      {/* Displaying the final score */}
      <p className="text-lg font-bold">
        Final Score: {totalScore} / {totalQuestions}
      </p>

      {/* Button to toggle the solution view */}
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
      >
        {showSolution ? "Hide Solution" : "View Solution"}
      </button>

      {/* Display solutions when showSolution is true */}
      {showSolution && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-md">
          {/* Displaying the current question explanation */}
          <h3 className="text-lg font-bold mb-2 text-blue-700">
            Explanation for Question {currentSolutionIndex + 1}:
          </h3>

          {/* Displaying user's matches and correct answers */}
          <ul className="text-left">
            {Object.keys(allCorrectAnswers[currentSolutionIndex]).map((state, idx) => {
              const userAnswer = allUserMatches[currentSolutionIndex][state] || "Not Matched";
              const correctAnswer = allCorrectAnswers[currentSolutionIndex][state];
              const isCorrect = userAnswer === correctAnswer;

              return (
                <li 
                  key={idx} 
                  className={`p-2 rounded mb-2 ${isCorrect ? "bg-green-200" : "bg-red-200"}`}
                >
                  <strong>{state}</strong> → <span className="font-semibold">{userAnswer}</span>
                  {isCorrect ? " ✅" : ` ❌ (Correct: ${correctAnswer})`}
                </li>
              );
            })}
          </ul>

          {/* Navigation Buttons to move between solutions */}
          <div className="flex justify-between mt-4">
            {/* Previous Button */}
            <button
              onClick={handlePreviousSolution}
              className={`px-4 py-2 rounded-lg shadow-md font-semibold ${
                currentSolutionIndex === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-blue-600 text-white"
              }`}
              disabled={currentSolutionIndex === 0}
            >
              Previous
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextSolution}
              className={`px-4 py-2 rounded-lg shadow-md font-semibold ${
                currentSolutionIndex === allUserMatches.length - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-blue-600 text-white"
              }`}
              disabled={currentSolutionIndex === allUserMatches.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Exporting the Score component for use in other files
export default Score;
