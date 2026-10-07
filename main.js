import * as state from "./state.js";
import * as ui from "./ui.js";

/* Controller [ entry point / orchestrator] ------------------------------------ */
const gridContainer = document.querySelector(".grid-container");

ui.render(state.getCurrentState());
state.subscribe(currentState => ui.render(currentState));

gridContainer.addEventListener("mouseover", (e) => {
  const square = e.target.closest(".square");
  if (!square) return;
  ui.fillSquare(square, state.getCurrentState().fillColor);
});

const gridSize = document.querySelector("input[name=grid-size]");

gridSize.addEventListener("input", () => {  
  state.updateGridSize(Number(gridSize.value));
});
