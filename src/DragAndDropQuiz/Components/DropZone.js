
import React from "react";

const DropZone = ({ definition, handleDrop, placedItem, isAllDropped }) => {
  return (
    <div
      className={`drop-zone ${isAllDropped ? "center-drop" : ""}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, definition)}
    >
      <span className="drop-text">{placedItem || definition.text}</span>
    </div>
  );
};

export default DropZone;


