/* State & Logic --------------------------------------- */
const drawingGridState = {
  width: '600px',
  size: 16,
  borderThickness: '1px',
  fillColor: "#000",
}

/* Controller [ entry point / orchestrator] ------------------------------------ */
const gridContainer = document.querySelector(".grid-container");

gridContainer.addEventListener("mouseover", (e) => {
  // console.log()
  const square = e.target.closest(".square");
  if (!square) return;
  fillSquare(square);
});

/* UI ----------------------------- */
const gridContainerEl = document.querySelector(".grid-container");

function appendGrid() {
  // clears the gridContainre before adding a new one - useful with resetting
  gridContainerEl.innerHTML = "";
  const grid = createGrid(drawingGridState.size);
  gridContainerEl.appendChild(grid);
}

function createSquare() {
  const divElem = document.createElement("div");
  divElem.classList.add("square");
  return divElem;
}

function createGrid(size = drawingGridState.size) {
  const grid = document.createElement("div");
  grid.setAttribute("class", "squares-grid");
  grid.style.setProperty('--grid-size', size);
  grid.style.setProperty('--grid-width', drawingGridState.width);
  grid.style.setProperty('--border-thickness', drawingGridState.borderThickness);
  
  /*
  in this case appending to document fragment doesn't matter but in other cases
  if we were appending to an element already existing in the DOM it would improve
  performance ( prevent browser reflows and recalculations with every iteration/appending)
  */
  const fragment = document.createDocumentFragment();
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = createSquare();
    fragment.appendChild(square);
  }

  grid.appendChild(fragment);
  return grid;
}

function fillSquare(square, fill = drawingGridState.fillColor) {
  square.style.setProperty("--fill-color", fill);
}

appendGrid();