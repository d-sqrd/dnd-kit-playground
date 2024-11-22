import React from "react";
import { useDroppable } from "@dnd-kit/core";
const Droppable = ({ children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  //   console.log(`isOver = ${isOver}`);
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={{
        width: "400px",
        height: "400px",
        border: "1px solid red",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Droppable;
