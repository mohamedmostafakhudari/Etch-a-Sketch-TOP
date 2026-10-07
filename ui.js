/* UI ----------------------------- */

const gridContainer = document.querySelector(".grid-container");
const gridInputText = document.querySelector("#grid-size-text");

function renderGridOptions(state) {
  gridInputText.textContent = state.size;
}

function renderGrid(state) {
  // clears the gridContainer before adding a new one - useful with resetting
  gridContainer.innerHTML = "";
  const grid = createGrid(state);
  gridContainer.appendChild(grid);
}

const onScreen = {
  size: null,
}

export function render(state) {
  renderGridOptions(state);
  
  if (state.size !== onScreen.size) {
    renderGrid(state);
    onScreen.size = state.size;
  }
}

function createSquare() {
  const divElem = document.createElement("div");
  divElem.classList.add("square");
  return divElem;
}

function createGrid(state) {
  const grid = document.createElement("div");
  grid.setAttribute("class", "squares-grid");
  grid.style.setProperty('--grid-size', state.size);
  grid.style.setProperty('--grid-width', state.width + 'px');
  grid.style.setProperty('--border-thickness', state.borderThickness + 'px');
  
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

  grid.appendChild(fragment);
  return grid;
}

export function fillSquare(square, fill) {
  square.style.setProperty("--fill-color", fill);
}