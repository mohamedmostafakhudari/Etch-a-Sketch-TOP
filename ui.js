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

export function fillSquare(square, fill) {
  square.style.setProperty("--fill-color", fill);
}

function renderCanvasOptions(state) {
  canvasSizeInputText.textContent = state.size;
}

function renderCanvas(state) {
  // clears the canvasContainer before adding a new one - useful with resetting
  canvasContainer.innerHTML = "";
  const canvas = createCanvas(state);
  canvasContainer.appendChild(canvas);
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