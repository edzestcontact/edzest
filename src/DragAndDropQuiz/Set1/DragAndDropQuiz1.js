// import InstructionPage from "../Components/InstructionPage";
// import DragItem from "../Components/DragItem";
// import DropZone from "../Components/DropZone";
// import Score from "../Components/Score";
// import Solution from "../Components/Solution";
// import quizData from "./quizData"; 
// import { useState, useEffect } from "react";
// import "../../Styles/DragAndDropQuiz.css"; // ✅ Ensure the correct path


// // Function to shuffle an array randomly (Fisher-Yates Algorithm)
// const shuffleArray = (array) => {
//   let shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const DragAndDropQuiz1 = () => {
//   const [showInstructions, setShowInstructions] = useState(true);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [userMatches, setUserMatches] = useState([]);
//   const [solutions, setSolutions] = useState(Array(quizData.length).fill([]));
//   const [showSolution, setShowSolution] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [placedItems, setPlacedItems] = useState({});
//   const [shuffledDefinitions, setShuffledDefinitions] = useState([]);

//   // Shuffle drop zones (definitions) when question changes
//   useEffect(() => {
//     if (quizData[currentQuestion]) {
//       setShuffledDefinitions(shuffleArray(quizData[currentQuestion].definitions));
//     }
//   }, [currentQuestion]);

//   const handleDragStart = (e, term) => {
//     e.dataTransfer.setData("term", term);
//   };

//   const handleDrop = (e, definition) => {
//     const draggedTerm = e.dataTransfer.getData("term");
//     const isCorrect = draggedTerm === definition.match;

//     if (!placedItems[definition.text]) {
//       setUserMatches((prev) => [...prev, { term: draggedTerm, correct: isCorrect, correctMatch: definition.match }]);
//       setPlacedItems((prev) => ({ ...prev, [definition.text]: draggedTerm }));
//     }
//   };

//   const nextQuestion = () => {
//     setSolutions((prevSolutions) => {
//       const updatedSolutions = [...prevSolutions];
//       updatedSolutions[currentQuestion] = [...userMatches];
//       return updatedSolutions;
//     });

//     const allCorrect =
//       userMatches.length === quizData[currentQuestion].terms.length &&
//       userMatches.every((match) => match.correct);

//     if (allCorrect) {
//       setScore((prev) => prev + 1);
//     }

//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//       setUserMatches([]);
//       setPlacedItems({});
//     }
//   };

//   const handleSubmit = () => {
//     setSolutions((prevSolutions) => {
//       const updatedSolutions = [...prevSolutions];
//       updatedSolutions[currentQuestion] = [...userMatches];
//       return updatedSolutions;
//     });

//     const allCorrect =
//       userMatches.length === quizData[currentQuestion].terms.length &&
//       userMatches.every((match) => match.correct);

//     if (allCorrect) {
//       setScore((prev) => prev + 1);
//     }

//     setQuizCompleted(true);
//   };

//   return (
//     <div className="quiz-container">
//      { showSolution ? (
//         <Solution
//           solutions={solutions}
//           totalQuestions={quizData.length}
//           closeSolution={() => setShowSolution(false)}
//           quizData={quizData}
//           quizCompleted={quizCompleted}
//         />
//       ) : (
//         <>
//           <h2 className="question-header">
//             Q{currentQuestion + 1}. {quizData[currentQuestion]?.question}
//           </h2>

//           <div className="quiz-content">
//             <div className="drag-container">
//               {quizData[currentQuestion].terms.map((term, index) => (
//                 !Object.values(placedItems).includes(term) && (
//                   <DragItem key={index} term={term} handleDragStart={handleDragStart} />
//                 )
//               ))}
//             </div>

//             <div className="drop-container">
//               {shuffledDefinitions.map((definition, index) => (
//                 <DropZone
//                   key={index}
//                   definition={definition}
//                   handleDrop={handleDrop}
//                   placedItem={placedItems[definition.text]}
//                 />
//               ))}
//             </div>
//           </div>

//           {!quizCompleted && (
//             <>
//               {currentQuestion > 0 && (
//                 <button onClick={() => setCurrentQuestion((prev) => prev - 1)} className="prev-btn">
//                   Previous Question
//                 </button>
//               )}

//               {currentQuestion < quizData.length - 1 ? (
//                 <button onClick={nextQuestion} className="next-btn">
//                   Next Question
//                 </button>
//               ) : (
//                 <button onClick={handleSubmit} className="btn btn-primary">
//                   Submit
//                 </button>
//               )}
//             </>
//           )}

//           {quizCompleted && (
//             <div className="score-container">
//               <Score score={score} totalQuestions={quizData.length} viewSolution={() => setShowSolution(true)} />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default DragAndDropQuiz1;



// import InstructionPage from "../Components/InstructionPage";
// import DragItem from "../Components/DragItem";
// import DropZone from "../Components/DropZone";
// import Score from "../Components/Score";
// import Solution from "../Components/Solution";
// import quizData from "./quizData"; 
// import { useState, useEffect } from "react";
// import "../../Styles/DragAndDropQuiz.css"; // ✅ Ensure the correct path

// const shuffleArray = (array) => {
//   let shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const DragAndDropQuiz1 = () => {
//   const [showInstructions, setShowInstructions] = useState(true);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [userMatches, setUserMatches] = useState({});
//   const [solutions, setSolutions] = useState(Array(quizData.length).fill([]));
//   const [showSolution, setShowSolution] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [placedItems, setPlacedItems] = useState({});
//   const [shuffledDefinitions, setShuffledDefinitions] = useState([]);

//   useEffect(() => {
//     if (quizData[currentQuestion]) {
//       setShuffledDefinitions(shuffleArray(quizData[currentQuestion].definitions));
//     }
//   }, [currentQuestion]);

//   const handleDragStart = (e, term) => {
//     e.dataTransfer.setData("term", term);
//   };

//   const handleDrop = (e, definition) => {
//     const draggedTerm = e.dataTransfer.getData("term");
//     const isCorrect = draggedTerm === definition.match;

//     if (!placedItems[currentQuestion]?.[definition.text]) {
//       setUserMatches((prev) => ({
//         ...prev,
//         [currentQuestion]: [...(prev[currentQuestion] || []), { term: draggedTerm, correct: isCorrect, correctMatch: definition.match }]
//       }));

//       setPlacedItems((prev) => ({
//         ...prev,
//         [currentQuestion]: {
//           ...prev[currentQuestion],
//           [definition.text]: draggedTerm
//         }
//       }));
//     }
//   };

//   const checkAndIncreaseScore = (questionIndex) => {
//     const matches = userMatches[questionIndex] || [];
//     if (matches.length === quizData[questionIndex].terms.length && matches.every((match) => match.correct)) {
//       setScore((prev) => prev + 1);
//     }
//   };

//   const nextQuestion = () => {
//     setSolutions((prevSolutions) => {
//       const updatedSolutions = [...prevSolutions];
//       updatedSolutions[currentQuestion] = [...(userMatches[currentQuestion] || [])];
//       return updatedSolutions;
//     });

//     checkAndIncreaseScore(currentQuestion);

//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     }
//   };

//   const handleSubmit = () => {
//     setSolutions((prevSolutions) => {
//       const updatedSolutions = [...prevSolutions];
//       updatedSolutions[currentQuestion] = [...(userMatches[currentQuestion] || [])];
//       return updatedSolutions;
//     });

//     checkAndIncreaseScore(currentQuestion);
//     setQuizCompleted(true);
//   };

//   return (
//     <div className="quiz-container">
//      { showSolution ? (
//         <Solution
//           solutions={solutions}
//           totalQuestions={quizData.length}
//           closeSolution={() => setShowSolution(false)}
//           quizData={quizData}
//           quizCompleted={quizCompleted}
//         />
//       ) : (
//         <>
//           <h2 className="question-header">
//             Q{currentQuestion + 1}. {quizData[currentQuestion]?.question}
//           </h2>

//           <div className="quiz-content">
//             <div className="drag-container">
//               {quizData[currentQuestion].terms.map((term, index) => (
//                 !(placedItems[currentQuestion] && Object.values(placedItems[currentQuestion]).includes(term)) && (
//                   <DragItem key={index} term={term} handleDragStart={handleDragStart} />
//                 )
//               ))}
//             </div>

//             <div className="drop-container">
//               {shuffledDefinitions.map((definition, index) => (
//                 <DropZone
//                   key={index}
//                   definition={definition}
//                   handleDrop={handleDrop}
//                   placedItem={placedItems[currentQuestion]?.[definition.text]}
//                 />
//               ))}
//             </div>
//           </div>

//           {!quizCompleted && (
//             <>
//               {currentQuestion > 0 && (
//                 <button onClick={() => setCurrentQuestion((prev) => prev - 1)} className="prev-btn">
//                   Previous Question
//                 </button>
//               )}

//               {currentQuestion < quizData.length - 1 ? (
//                 <button onClick={nextQuestion} className="next-btn">
//                   Next Question
//                 </button>
//               ) : (
//                 <button onClick={handleSubmit} className="btn btn-primary">
//                   Submit
//                 </button>
//               )}
//             </>
//           )}

//           {quizCompleted && (
//             <div className="score-container">
//               <Score score={score} totalQuestions={quizData.length} viewSolution={() => setShowSolution(true)} />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default DragAndDropQuiz1;



import InstructionPage from "../Components/InstructionPage";
import DragItem from "../Components/DragItem";
import DropZone from "../Components/DropZone";
import Score from "../Components/Score";
import Solution from "../Components/Solution";
import quizData from "./quizData"; 
import { useState, useEffect } from "react";
import "../../Styles/DragAndDropQuiz.css"; // ✅ Ensure the correct path

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const DragAndDropQuiz1 = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userMatches, setUserMatches] = useState({});
  const [solutions, setSolutions] = useState(Array(quizData.length).fill([]));
  const [showSolution, setShowSolution] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [placedItems, setPlacedItems] = useState({});
  const [shuffledDefinitions, setShuffledDefinitions] = useState([]);
  const [lastMove, setLastMove] = useState(null); // ✅ Stores last move for Undo

  useEffect(() => {
    if (quizData[currentQuestion]) {
      setShuffledDefinitions(shuffleArray(quizData[currentQuestion].definitions));
    }
  }, [currentQuestion]);

  const handleDragStart = (e, term) => {
    e.dataTransfer.setData("term", term);
  };

  const handleDrop = (e, definition) => {
    const draggedTerm = e.dataTransfer.getData("term");
    const isCorrect = draggedTerm === definition.match;

    // ✅ Store last move for Undo functionality
    setLastMove({
      questionIndex: currentQuestion,
      definitionText: definition.text,
      previousTerm: placedItems[currentQuestion]?.[definition.text] || null,
    });

    // ✅ Swap Mechanism: If a term already exists in this slot, remove it first
    setPlacedItems((prev) => {
      const updatedItems = { ...prev };
      
      if (!updatedItems[currentQuestion]) {
        updatedItems[currentQuestion] = {};
      }
      
      // Remove previously placed term
      const previousTerm = updatedItems[currentQuestion][definition.text];
      if (previousTerm) {
        setUserMatches((prev) => ({
          ...prev,
          [currentQuestion]: prev[currentQuestion].filter((match) => match.term !== previousTerm),
        }));
      }

      updatedItems[currentQuestion][definition.text] = draggedTerm;
      return updatedItems;
    });

    // ✅ Add the new term to user matches
    setUserMatches((prev) => ({
      ...prev,
      [currentQuestion]: [
        ...(prev[currentQuestion] || []).filter((match) => match.term !== draggedTerm),
        { term: draggedTerm, correct: isCorrect, correctMatch: definition.match },
      ],
    }));
  };

  const undoLastMove = () => {
    if (!lastMove) return;

    const { questionIndex, definitionText, previousTerm } = lastMove;

    setPlacedItems((prev) => {
      const updatedItems = { ...prev };
      if (previousTerm) {
        updatedItems[questionIndex][definitionText] = previousTerm;
      } else {
        delete updatedItems[questionIndex][definitionText]; // Remove if no previous term
      }
      return updatedItems;
    });

    setUserMatches((prev) => {
      return {
        ...prev,
        [questionIndex]: prev[questionIndex].filter(
          (match) => match.term !== placedItems[questionIndex][definitionText]
        ),
      };
    });

    setLastMove(null); // ✅ Reset last move after undo
  };

  const checkAndIncreaseScore = (questionIndex) => {
    const matches = userMatches[questionIndex] || [];
    if (matches.length === quizData[questionIndex].terms.length && matches.every((match) => match.correct)) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSolutions((prevSolutions) => {
      const updatedSolutions = [...prevSolutions];
      updatedSolutions[currentQuestion] = [...(userMatches[currentQuestion] || [])];
      return updatedSolutions;
    });

    checkAndIncreaseScore(currentQuestion);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    setSolutions((prevSolutions) => {
      const updatedSolutions = [...prevSolutions];
      updatedSolutions[currentQuestion] = [...(userMatches[currentQuestion] || [])];
      return updatedSolutions;
    });

    checkAndIncreaseScore(currentQuestion);
    setQuizCompleted(true);
  };

  return (
    <div className="quiz-container">
      {showSolution ? (
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
            Q{currentQuestion + 1}. {quizData[currentQuestion]?.question}
          </h2>

          <div className="quiz-content">
            <div className="drag-container">
              {quizData[currentQuestion].terms.map((term, index) => (
                !(placedItems[currentQuestion] && Object.values(placedItems[currentQuestion]).includes(term)) && (
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
                  placedItem={placedItems[currentQuestion]?.[definition.text]}
                />
              ))}
            </div>
          </div>

          {!quizCompleted && (
            <>
              {lastMove && (
                <button onClick={undoLastMove} className="undo-btn">
                  Undo Last Move
                </button>
              )}

              {currentQuestion > 0 && (
                <button onClick={() => setCurrentQuestion((prev) => prev - 1)} className="prev-btn">
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
              <Score score={score} totalQuestions={quizData.length} viewSolution={() => setShowSolution(true)} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DragAndDropQuiz1;

