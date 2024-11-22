import "./App.css";
import { DndContext } from "@dnd-kit/core";

// import Canvas from "./Canvas";
import Droppable from "./Droppable";
import Draggable from "./Draggable";
import { useState } from "react";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const handleDragEnd = (event) => {
    // if (event.over && event.over.id === "droppable") {
    //   setIsDropped(true);
    // }
    console.log(event);
  };
  const handleDragStart = (event) => {
    console.log(`handleDragStart = ${JSON.stringify(event)}`);
  };
  const handleDragMove = (event) => {
    // console.log(event);
  };
  return (
    <div className="App">
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
      >
        {/* <Canvas></Canvas> */}
        {!isDropped ? <Draggable /> : null}
        <Droppable>{isDropped ? <Droppable /> : null}</Droppable>
      </DndContext>
    </div>
  );
}

export default App;
