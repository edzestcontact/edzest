import React from "react";

const Question = ({ question, handleDrop, userAnswers, setDraggedItem, draggedItem }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Match the state to its capital:</h2>
      <h3 className="text-lg font-bold">{question.state}</h3>
      <div className="flex gap-4">
        <div
          className="w-1/2 p-4 border border-dashed border-gray-500 min-h-12 flex items-center justify-center text-gray-600 bg-gray-100"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(question.id)}
        >
          {userAnswers[question.id] || "Drop Here"}
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          {question.capitals.map((capital, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => setDraggedItem(capital)}
              className={`p-2 bg-gray-200 cursor-pointer text-center rounded hover:bg-gray-300 transition ${draggedItem === capital ? "opacity-50" : ""}`}
            >
              {capital}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
