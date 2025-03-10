
// import React, { useState, useEffect } from "react";
// import quizData from "../data/quizData";
// import "./DragAndDropQuiz.css";
// import "bootstrap/dist/css/bootstrap.min.css";


// import DragItem from "./DragItem";
// import DropZone from "./DropZone";
// import Score from "./Score";
// import Solution from "./Solution";

// const DragAndDropQuiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [userMatches, setUserMatches] = useState([]);
//   const [solutions, setSolutions] = useState(Array(quizData.length).fill([]));
//   const [showSolution, setShowSolution] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [placedItems, setPlacedItems] = useState({});
//   const [shuffledTerms, setShuffledTerms] = useState([]);

//   useEffect(() => {
//     // ✅ Shuffle terms whenever the question changes
//     const shuffled = [...quizData[currentQuestion].terms].sort(() => Math.random() - 0.5);
//     setShuffledTerms(shuffled);
//   }, [currentQuestion]);

//   const handleDragStart = (e, term) => {
//     e.dataTransfer.setData("term", term);
//   };

//   const handleDrop = (e, definition) => {
//     const draggedTerm = e.dataTransfer.getData("term");
//     const isCorrect = draggedTerm === definition.match;

//     const newMatch = { term: draggedTerm, correct: isCorrect, correctMatch: definition.match };

//     setUserMatches((prev) => [...prev, newMatch]);

//     setPlacedItems((prev) => ({
//       ...prev,
//       [definition.text]: draggedTerm,
//     }));
//   };

//   const nextQuestion = () => {
//     setSolutions((prevSolutions) => {
//       const updatedSolutions = [...prevSolutions];
//       updatedSolutions[currentQuestion] = [...userMatches];
//       return updatedSolutions;
//     });

//     const allCorrect = userMatches.length === quizData[currentQuestion].terms.length &&
//       userMatches.every(match => match.correct);

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

//     const allCorrect = userMatches.length === quizData[currentQuestion].terms.length &&
//       userMatches.every(match => match.correct);

//     if (allCorrect) {
//       setScore((prev) => prev + 1);
//     }

//     setQuizCompleted(true);
//   };

//   return (
//     <div className="quiz-container">
//       {showSolution ? (
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
//             Q{currentQuestion + 1}. {quizData[currentQuestion].question}
//           </h2>

//           <div className="quiz-content">
//             <div className="drag-container">
//               {/* ✅ Now Drag Items Appear in Random Order */}
//               {shuffledTerms.map((term, index) => (
//                 !Object.values(placedItems).includes(term) && (
//                   <DragItem key={index} term={term} handleDragStart={handleDragStart} />
//                 )
//               ))}
//             </div>

//             <div className="drop-container">
//               {quizData[currentQuestion].definitions.map((definition, index) => (
//                 <DropZone key={index} definition={definition} handleDrop={handleDrop} placedItem={placedItems[definition.text]} />
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

// export default DragAndDropQuiz;
import React, { useState } from "react";
import quizData from "../data/quizData";
import "./DragAndDropQuiz.css";
import "bootstrap/dist/css/bootstrap.min.css";

import InstructionPage from "./InstructionPage"; // ✅ Import Instruction Page
import DragItem from "./DragItem";
import DropZone from "./DropZone";
import Score from "./Score";
import Solution from "./Solution";

const DragAndDropQuiz = () => {
  const [showInstructions, setShowInstructions] = useState(true); // ✅ Show instructions first
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userMatches, setUserMatches] = useState([]);
  const [solutions, setSolutions] = useState(Array(quizData.length).fill([]));
  const [showSolution, setShowSolution] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [placedItems, setPlacedItems] = useState({});

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

    setQuizCompleted(true);
  };

  return (
    <div className="quiz-container">
      {/* ✅ Show Instructions Page First */}
      {showInstructions ? (
        <InstructionPage startQuiz={() => setShowInstructions(false)} />
      ) : showSolution ? (
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
              {quizData[currentQuestion].definitions.map((definition, index) => (
                <DropZone key={index} definition={definition} handleDrop={handleDrop} placedItem={placedItems[definition.text]} />
              ))}
            </div>
          </div>

          {!quizCompleted && (
            <>
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

export default DragAndDropQuiz;