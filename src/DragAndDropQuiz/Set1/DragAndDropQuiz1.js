



import { FaSyncAlt } from "react-icons/fa"; // Import refresh icon from react-icons
// import InstructionPage from "../Components/InstructionPage"; // Import the InstructionPage component
import DragItem from "../Components/DragItem"; // Import the DragItem component, which represents draggable items
import DropZone from "../Components/DropZone"; // Import the DropZone component, which represents areas where items can be dropped
import Score from "../Components/Score"; // Import the Score component to display the user's score
import Solution from "../Components/Solution"; // Import the Solution component to show correct answers
import quizData from "./quizData"; // Import quiz data (questions, terms, and definitions)
import { useState, useEffect } from "react"; // Import React hooks for managing state and side effects
import "../../Styles/DragAndDropQuiz.css"; // Import the CSS file for styling

// Function to shuffle an array using the Fisher-Yates algorithm
const shuffleArray = (array) => {
  let shuffled = [...array]; // Create a copy of the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled; // Return the shuffled array
};

// Main component for the drag-and-drop quiz
const DragAndDropQuiz1 = () => {
  // State variables to manage quiz behavior
  // const [showInstructions, setShowInstructions] = useState(true); // Show/hide instructions
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question index
  const [score, setScore] = useState(0); // Track the user's score
  const [userMatches, setUserMatches] = useState({}); // Store user's matched answers
  const [solutions, setSolutions] = useState(Array(quizData.length).fill([])); // Store solutions for each question
  const [showSolution, setShowSolution] = useState(false); // Show/hide the solution modal
  const [quizCompleted, setQuizCompleted] = useState(false); // Track if the quiz is completed
  const [placedItems, setPlacedItems] = useState({}); // Track placed draggable items
  const [shuffledDefinitions, setShuffledDefinitions] = useState([]); // Store shuffled definitions for the current question

  // Effect to shuffle definitions whenever the question changes
  useEffect(() => {
    if (quizData[currentQuestion]) {
      setShuffledDefinitions(shuffleArray(quizData[currentQuestion].definitions));
    }
  }, [currentQuestion]); // Runs whenever `currentQuestion` changes

  // Function to handle the start of a drag event
  const handleDragStart = (e, term) => {
    // e.dataTransfer.setData("term", term); // Store the dragged term in the event data
    e.dataTransfer.setData("text/plain", term);
  };

  // Function to handle when an item is dropped into a drop zone
  const handleDrop = (e, definition) => {
    const draggedTerm = e.dataTransfer.getData("term"); // Retrieve the dragged term
    const isCorrect = draggedTerm === definition.match; // Check if the match is correct

    // Prevent overriding an already placed item
    if (!placedItems[currentQuestion]?.[definition.text]) {
      // Update user matches
      setUserMatches((prev) => ({
        ...prev,
        [currentQuestion]: [
          ...(prev[currentQuestion] || []),
          {
            term: draggedTerm,
            correct: isCorrect,
            correctMatch: definition.match,
          },
        ],
      }));

      // Store placed items to prevent reusing them
      setPlacedItems((prev) => ({
        ...prev,
        [currentQuestion]: {
          ...prev[currentQuestion],
          [definition.text]: draggedTerm,
        },
      }));
    }
  };

  // Function to check and increase the score if all answers are correct
  const checkAndIncreaseScore = (questionIndex) => {
    const matches = userMatches[questionIndex] || [];
    if (
      matches.length === quizData[questionIndex].terms.length && // Check if all terms are matched
      matches.every((match) => match.correct) // Ensure all matches are correct
    ) {
      setScore((prev) => prev + 1); // Increment score
    }
  };

  // Function to proceed to the next question
  const nextQuestion = () => {
    // Save the user's answers before moving to the next question
    setSolutions((prevSolutions) => {
      const updatedSolutions = [...prevSolutions];
      updatedSolutions[currentQuestion] = [...(userMatches[currentQuestion] || [])];
      return updatedSolutions;
    });

    checkAndIncreaseScore(currentQuestion); // Check if the answer is correct and update the score

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1); // Move to the next question
    }
  };

  // Function to submit the quiz
  const handleSubmit = () => {
    setSolutions((prevSolutions) => {
      const updatedSolutions = [...prevSolutions];
      updatedSolutions[currentQuestion] = [...(userMatches[currentQuestion] || [])];
      return updatedSolutions;
    });

    checkAndIncreaseScore(currentQuestion); // Update score
    setQuizCompleted(true); // Mark quiz as completed
  };

  // Function to refresh the current question
  const handleRefresh = () => {
    // Prevent refresh if no attempt was made
    if (!userMatches[currentQuestion] || userMatches[currentQuestion].length === 0) {
      return;
    }

    // Reset matches and placed items for the current question
    setUserMatches((prev) => ({
      ...prev,
      [currentQuestion]: [],
    }));
    setPlacedItems((prev) => ({
      ...prev,
      [currentQuestion]: {},
    }));

    // Reshuffle definitions
    setShuffledDefinitions(shuffleArray(quizData[currentQuestion].definitions));
  };

  return (
    <div className="quiz-container">
      {showSolution ? ( // If the solution is being viewed
        <Solution
          solutions={solutions}
          totalQuestions={quizData.length}
          closeSolution={() => setShowSolution(false)}
          quizData={quizData}
          quizCompleted={quizCompleted}
        />
      ) : (
        <>
          {/* Display the current question */}
          <div className="question-header">
            <h2>
              Q{currentQuestion + 1}. {quizData[currentQuestion]?.question}
            </h2>
          </div>

          <div className="quiz-content">
            {/* Container for draggable terms */}
            <div className="drag-container">
              {quizData[currentQuestion].terms.map(
                (term, index) =>
                  !(
                    placedItems[currentQuestion] &&
                    Object.values(placedItems[currentQuestion]).includes(term)
                  ) && (
                    <DragItem
                      key={index}
                      term={term}
                      handleDragStart={handleDragStart}
                    />
                  )
              )}
            </div>

            {/* Container for drop zones */}
            <div className="drop-container">
              {shuffledDefinitions.map((definition, index) => (
                <DropZone
                  key={index}
                  definition={definition}
                  handleDrop={handleDrop}
                  placedItem={placedItems[currentQuestion]?.[definition.text]}
                />
              ))}
            </div>
          </div>

          {!quizCompleted && (
            <>
              {/* Show "Next" button if there are more questions, otherwise show "Submit" */}
              {currentQuestion < quizData.length - 1 ? (
                <button onClick={nextQuestion} className="next-btn">
                  Next
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn btn-primary">
                  Submit
                </button>
              )}
            </>
          )}

          {/* Display score after completing the quiz */}
          {quizCompleted && (
            <div className="score-container">
              <Score
                score={score}
                totalQuestions={quizData.length}
                viewSolution={() => setShowSolution(true)}
              />
            </div>
          )}
          
          {/* Refresh button */}
          <div className="refresh-container">
            <FaSyncAlt className="refresh-icon" onClick={handleRefresh} />
          </div>
        </>
      )}
    </div>
  );
};

export default DragAndDropQuiz1;
