/* State & Logic --------------------------------------- */
const drawingGridState = {
  width: '600px',
  size: 16,
  borderThickness: '1px',
}

/* Controller [ entry point / orchestrator] ------------------------------------ */

/* UI ----------------------------- */
const gridContainer = document.querySelector(".grid-container");

function appendGrid() {
  // clears the gridContainre before adding a new one - useful with resetting
  gridContainer.innerHTML = "";
  const grid = createGrid(drawingGridState.size);
  gridContainer.appendChild(grid);
}

function createSquare() {
  const divElem = document.createElement("div");
  divElem.classList.add("square");
  return divElem;
}

function createGrid(gridSize) {
  const grid = document.createElement("div");
  grid.setAttribute("class", "squares-grid");
  grid.style.setProperty('--grid-size', drawingGridState.size);
  grid.style.setProperty('--grid-width', drawingGridState.width);
  grid.style.setProperty('--borderThickness', drawingGridState.borderThickness);
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = createSquare();
    grid.appendChild(square);
  }

  return grid;
}

appendGrid();