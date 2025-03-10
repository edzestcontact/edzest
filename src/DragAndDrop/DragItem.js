import React from "react";

const DragItem = ({ term, handleDragStart }) => {
  return (
    <div
      className="drag-item"
      draggable
      onDragStart={(e) => handleDragStart(e, term)}
    >
      {term}
    </div>
  );
};

export default DragItem;