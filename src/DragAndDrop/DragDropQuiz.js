import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";
import quizData from "../data/quizData";
import Score from "./Score";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const DragDropQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [states, setStates] = useState(shuffleArray(quizData[currentQuestion].states));
  const [capitals, setCapitals] = useState(shuffleArray(quizData[currentQuestion].capitals));
  const [matches, setMatches] = useState({});
  const [finalSubmit, setFinalSubmit] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [allUserMatches, setAllUserMatches] = useState([]);
  const [allCorrectAnswers, setAllCorrectAnswers] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Ensure dragging happens ONLY from "states" (left) to "capitals" (right)
    if (source.droppableId !== "states" || !destination.droppableId.startsWith("capital-")) {
      return;
    }

    const capitalName = destination.droppableId.replace("capital-", "");

    // Prevent overwriting if already matched
    if (matches[capitalName]) return;

    const newMatches = { ...matches, [capitalName]: states[source.index] };
    setMatches(newMatches);

    // Remove dragged item from states list
    setStates(states.filter((_, idx) => idx !== source.index));
  };

  const handleSubmit = () => {
    if (finalSubmit) return;

    let correct = 0;
    const totalPairs = Object.keys(quizData[currentQuestion].answers).length;
    const userMatchesCopy = { ...matches };
    const correctAnswersCopy = { ...quizData[currentQuestion].answers };

    Object.keys(correctAnswersCopy).forEach((capital) => {
      if (matches[capital] === correctAnswersCopy[capital]) {
        correct++;
      }
    });

    if (correct === totalPairs) {
      setTotalScore((prevScore) => prevScore + 1);
    }

    setAllUserMatches((prev) => [...prev, userMatchesCopy]);
    setAllCorrectAnswers((prev) => [...prev, correctAnswersCopy]);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setStates(shuffleArray(quizData[currentQuestion + 1].states));
      setCapitals(shuffleArray(quizData[currentQuestion + 1].capitals));
      setMatches({});
    } else {
      setFinalSubmit(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 border border-blue-500">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-xl border border-blue-500">
        <h2 className="text-xl text-center mb-4 text-black-600">
          {currentQuestion + 1}. {quizData[currentQuestion].question}
        </h2>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            
            {/* Draggable States (LEFT SIDE) */}
            {states.length > 0 && (
              <Droppable droppableId="states">
                {(provided) => (
                  <div 
                    ref={provided.innerRef} 
                    {...provided.droppableProps} 
                    className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md flex flex-wrap gap-2 justify-center"
                  >
                    {states.map((state, index) => (
                      <DraggableItem key={state} state={state} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}

            {/* Droppable Capitals (RIGHT SIDE) */}
            <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md flex flex-wrap gap-2 justify-center">
              {capitals.map((capital) => (
                <DroppableArea key={capital} capital={capital} matches={matches} />
              ))}
            </div>
          </div>
        </DragDropContext>

        {!finalSubmit ? (
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="mt-6 w-1/4 bg-[#4748ac] hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md"
            >
              Next Question
            </button>
          </div>
        ) : (
          <Score 
            totalScore={totalScore} 
            totalQuestions={quizData.length} 
            allUserMatches={allUserMatches} 
            allCorrectAnswers={allCorrectAnswers}
          />
        )}
      </div>
    </div>
  );
};

export default DragDropQuiz;
