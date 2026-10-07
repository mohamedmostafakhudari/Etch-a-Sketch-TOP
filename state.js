/* State & Logic --------------------------------------- */
const drawingGridState = {
  width: 600,
  size: 16,
  borderThickness: 1,
  fillColor: "#000",
  showGrid: true, 
}

const listeners = new Set();

/*
A quick note about the subscribe/notify pattern ---

An analogy of what's happening:
  Imagine that the controller just gave [subscribe] the model their phone number [cb func] and told it
  to call them [notify] whenever some action happens
*/
export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify() {
  const snapshot = getCurrentState();
  listeners.forEach(fn => fn(snapshot));
}

export function updateGridSize(newSize) {
  drawingGridState.size = newSize;
  notify();
}

export function showGrid() {
  drawingGridState.showGrid = true;
  notify();
}

export function hideGrid() {
  drawingGridState.showGrid = false;
  notify();
}

export function getCurrentState() {
  return { ...drawingGridState }
}