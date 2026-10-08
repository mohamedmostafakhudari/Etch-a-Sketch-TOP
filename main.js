import * as state from "./state.js";
import * as ui from "./ui.js";
import * as utils from "./utils.js";

/* Controller [ entry point / orchestrator] ------------------------------------ */
const canvasContainer = document.querySelector(".canvas-container");

ui.render(state.getCurrentState());
state.subscribe(currentState => ui.render(currentState));

canvasContainer.addEventListener("mouseover", (e) => {
  const square = e.target.closest(".square");
  if (!square) return;

  const { fillColor, fillMode } = state.getCurrentState();
  
  if (fillMode === "normal") {
    ui.fillSquare(square, fillColor);
  } else if (fillMode === "random") {
    ui.fillSquare(square, utils.generateRandRGBClr());
  } else if (fillMode === "darkening") {
    ui.darkenSquare(square);
  }
});

const canvasSizeRange = document.querySelector("input[name=canvas-size]");

canvasSizeRange.addEventListener("input", () => {  
  state.setCanvasSize(Number(canvasSizeRange.value));
});

const hideGridCheckbox = document.querySelector("input[name=hide-grid]");

hideGridCheckbox.addEventListener("change", (e) => {
  state.setShowGrid(!e.target.checked);
});


const colorPicker = document.querySelector("input[name=color-picker]");

colorPicker.addEventListener("change", () => {
  state.setFillMode("normal");
  state.setFillColor(colorPicker.value);
  ui.uncheckRandomMode();
  ui.uncheckDarkeningMode();
});

const randomColorModeCheckbox = document.querySelector("input[name=random-color-mode]");

randomColorModeCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    state.setFillMode("random");
    ui.uncheckDarkeningMode();
  } else {
    state.setFillMode("normal");
  }
});

const darkeningModeCheckbox = document.querySelector("input[name=darkening-mode]");

darkeningModeCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    state.setFillMode("darkening");
    ui.uncheckRandomMode();
  } else {
    state.setFillMode("normal");
  }
});