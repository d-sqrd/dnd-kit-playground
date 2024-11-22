import React from "react";
import { useDraggable } from "@dnd-kit/core";
const Draggable = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  //   console.log(`attributes = ${JSON.stringify(attributes)}`);
  //   console.log(`listeners = ${JSON.stringify(listeners)}`);
  //   console.log(`transform = ${JSON.stringify(transform)}`);
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={{
        width: "200px",
        height: "100px",
        border: "1px solid black",
        display: "flex",

        ...style,
      }}
    >
      <button {...attributes} {...listeners}>
        Drag Handle
      </button>
    </div>
  );
};

export default Draggable;
