import React from "react";
import { Droppable } from "@hello-pangea/dnd";

const DroppableArea = ({ capital, matches }) => {
  return (
    <Droppable droppableId={`capital-${capital}`} isDropDisabled={!!matches[capital]}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`w-100 md:w-48 min-h-[80px] flex items-center justify-center 
            border border-gray-500 bg-gray-200 text-gray-900 rounded-lg 
            shadow-md text-center font-medium p-2 break-words 
            transition-all duration-200 ease-in-out 
            ${snapshot.isDraggingOver ? "" : ""}`}
        >
          {matches[capital] ? (
            <span className="text-base text-black-700">{matches[capital]}</span>
          ) : (
            <span className="text-base text-gray-700">{capital}</span>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableArea;
