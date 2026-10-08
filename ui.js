/* UI ----------------------------- */
const canvasContainer = document.querySelector(".canvas-container");
const canvasSizeInputText = document.querySelector("#canvas-size-text");

const onScreen = {
  size: null,
}

export function render(state) {
  renderCanvasOptions(state);
  applyCanvasAppearance(state);
  
  if (state.size !== onScreen.size) {
    renderCanvas(state);
    onScreen.size = state.size;
  }
}

export function renderCanvas(state) {
  // clears the canvasContainer before adding a new one - useful with resetting
  canvasContainer.innerHTML = "";
  const canvas = createCanvas(state);
  canvasContainer.appendChild(canvas);
}

export function fillSquare(square, fill) {
  square.style.setProperty("--fill-color", fill);
}

export function darkenSquare(square) {
  let darkOverlay = square.querySelector(".square-dark-overlay");
  if (!darkOverlay) {
    darkOverlay = createDarkOverlay();
    square.appendChild(darkOverlay);
  }
  const darkeningStrength = 0.1;
  const maxOpacity = 1;

  const newOpacity = Math.min(Number(getComputedStyle(darkOverlay).getPropertyValue('--square-overlay-opacity')) + darkeningStrength, maxOpacity);
  darkOverlay.style.setProperty('--square-overlay-opacity', newOpacity);

  
}

export function uncheckRandomMode() {
  document.querySelector("input[name=random-color-mode]").checked = false;
}

export function uncheckDarkeningMode() {
  document.querySelector("input[name=darkening-mode]").checked = false;
}

function createDarkOverlay() {
  const div = document.createElement("div");
  div.className = "square-dark-overlay";
  return div;
}

function renderCanvasOptions(state) {
  canvasSizeInputText.textContent = state.size;
}

function createSquare() {
  const divElem = document.createElement("div");
  divElem.classList.add("square");
  return divElem;
}

function createCanvas(state) {  
  const canvas = document.createElement("div");
  canvas.setAttribute("class", "canvas-board");
  canvas.style.setProperty('--canvas-size', state.size);
  canvas.style.setProperty('--canvas-width', state.width + 'px');
  canvas.style.setProperty('--border-thickness', state.borderThickness + 'px');
  /*
  in this case appending to document fragment doesn't matter but in other cases
  if we were appending to an element already existing in the DOM it would improve
  performance ( prevent browser reflows and recalculations with every iteration/appending)
  */
  const fragment = document.createDocumentFragment();
  const totalSquares = state.size * state.size;

  for (let i = 0; i < totalSquares; i++) {
    const square = createSquare();
    fragment.appendChild(square);
  }

  canvas.appendChild(fragment);
  return canvas;
}

function applyCanvasAppearance(state) {
  canvasContainer.classList.toggle("grid-hidden", !state.showGrid);
}