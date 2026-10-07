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

const gridSizeRange = document.querySelector("input[name=grid-size]");

gridSizeRange.addEventListener("input", () => {  
  state.updateGridSize(Number(gridSizeRange.value));
});

const showGridCheckbox = document.querySelector("input[name=hide-grid]");

showGridCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    state.hideGrid();
  } else {
    state.showGrid();
  }
});

