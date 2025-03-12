
import React from "react";
import DragItem from "./DragItem";
import DropZone from "./DropZone";

const Question = ({ questionData, handleDragStart, handleDrop }) => {
  return (
    <div className="question-container">
      {/* ✅ Added Serial Number Before Each Question */}
      <h3 className="question-text">Q{questionData.id}. {questionData.question}</h3>

      <div className="drag-drop-area">
        {questionData.terms.map((term, index) => (
          <div className="drag-drop-row" key={index}>
            {/* ✅ Added Serial Number to Drag and Drop Items */}
            <span className="serial-number">{index + 1}.</span>
            <DragItem term={term} handleDragStart={handleDragStart} />
            <DropZone definition={questionData.definitions[index]} handleDrop={handleDrop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
