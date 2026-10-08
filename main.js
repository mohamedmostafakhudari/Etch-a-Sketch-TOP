import * as state from "./state.js";
import * as ui from "./ui.js";

/* Controller [ entry point / orchestrator] ------------------------------------ */
const canvasContainer = document.querySelector(".canvas-container");

ui.render(state.getCurrentState());
state.subscribe(currentState => ui.render(currentState));

canvasContainer.addEventListener("mouseover", (e) => {
  const square = e.target.closest(".square");
  if (!square) return;
  ui.fillSquare(square, state.getCurrentState().fillColor);
});

const canvasSizeRange = document.querySelector("input[name=canvas-size]");

canvasSizeRange.addEventListener("input", () => {  
  state.setCanvasSize(Number(canvasSizeRange.value));
});

const hideGridCheckbox = document.querySelector("input[name=hide-grid]");

hideGridCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    state.hideGrid();
  } else {
    state.showGrid();
  }
});


const colorPicker = document.querySelector("input[name=color-picker]");
colorPicker.addEventListener("change", () => {
  console.log(colorPicker.value);
  state.setFillColor(colorPicker.value);
})