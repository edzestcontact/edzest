import React from "react";
import { Draggable } from "@hello-pangea/dnd";

const DraggableItem = ({ state, index }) => {
  return (
    <Draggable draggableId={state} index={index} >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-40 md:w-48 min-h-[50px] flex items-center justify-center 
                      border border-green-00 bg--100 text-black-800 rounded-lg 
                      shadow-md text-center font-medium p-2 break-words 
                      transition-all duration-200 ease-in-out cursor-pointer
                      active:scale-95 hover:bg-{#4748ac}-200"
        >
          {state}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
