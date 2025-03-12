import InstructionPage from "../Components/InstructionPage";
import { useState, useEffect } from "react";

import DragItem from "../Components/DragItem";
import DropZone from "../Components/DropZone";
import Score from "../Components/Score";
import Solution from "../Components/Solution";
import quizData from "./quizData"; 


// ✅ Function to shuffle an array randomly (Fisher-Yates Algorithm)
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const DragAndDropQuiz2 = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userMatches, setUserMatches] = useState([]);
  const [solutions, setSolutions] = useState(Array(quizData.length).fill([]));
  const [showSolution, setShowSolution] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [placedItems, setPlacedItems] = useState({});
  const [shuffledDefinitions, setShuffledDefinitions] = useState([]);

  // ✅ Shuffle drop zones (definitions) when question changes
  useEffect(() => {
    setShuffledDefinitions(shuffleArray(quizData[currentQuestion].definitions));
  }, [currentQuestion]);

  const handleDragStart = (e, term) => {
    e.dataTransfer.setData("term", term);
  };

  const handleDrop = (e, definition) => {
    const draggedTerm = e.dataTransfer.getData("term");
    const isCorrect = draggedTerm === definition.match;

    const newMatch = { term: draggedTerm, correct: isCorrect, correctMatch: definition.match };

    setUserMatches((prev) => [...prev, newMatch]);

    setPlacedItems((prev) => ({
      ...prev,
      [definition.text]: draggedTerm,
    }));
  };

  const nextQuestion = () => {
    setSolutions((prevSolutions) => {
      const updatedSolutions = [...prevSolutions];
      updatedSolutions[currentQuestion] = [...userMatches];
      return updatedSolutions;
    });

    const allCorrect =
      userMatches.length === quizData[currentQuestion].terms.length &&
      userMatches.every((match) => match.correct);

    if (allCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserMatches([]);
      setPlacedItems({});
    }
  };

  const handleSubmit = () => {
    setSolutions((prevSolutions) => {
      const updatedSolutions = [...prevSolutions];
      updatedSolutions[currentQuestion] = [...userMatches];
      return updatedSolutions;
    });

    const allCorrect =
      userMatches.length === quizData[currentQuestion].terms.length &&
      userMatches.every((match) => match.correct);

    if (allCorrect) {
      setScore((prev) => prev + 1);
    }

    setQuizCompleted(true);
  };

  return (
    <div className="quiz-container">
     { showSolution ? (
        <Solution
          solutions={solutions}
          totalQuestions={quizData.length}
          closeSolution={() => setShowSolution(false)}
          quizData={quizData}
          quizCompleted={quizCompleted}
        />
      ) : (
        <>
          <h2 className="question-header">
            Q{currentQuestion + 1}. {quizData[currentQuestion].question}
          </h2>

          <div className="quiz-content">
            <div className="drag-container">
              {quizData[currentQuestion].terms.map((term, index) => (
                !Object.values(placedItems).includes(term) && (
                  <DragItem key={index} term={term} handleDragStart={handleDragStart} />
                )
              ))}
            </div>

            <div className="drop-container">
              {shuffledDefinitions.map((definition, index) => (
                <DropZone
                  key={index}
                  definition={definition}
                  handleDrop={handleDrop}
                  placedItem={placedItems[definition.text]}
                />
              ))}
            </div>
          </div>

          {!quizCompleted && (
            <>
              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion((prev) => prev - 1)}
                  className="prev-btn"
                >
                  Previous Question
                </button>
              )}

              {currentQuestion < quizData.length - 1 ? (
                <button onClick={nextQuestion} className="next-btn">
                  Next Question
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn btn-primary">
                  Submit
                </button>
              )}
            </>
          )}

          {quizCompleted && (
            <div className="score-container">
              <Score
                score={score}
                totalQuestions={quizData.length}
                viewSolution={() => setShowSolution(true)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DragAndDropQuiz2;
