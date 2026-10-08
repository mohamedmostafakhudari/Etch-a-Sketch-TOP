import * as utils from "./utils.js";

/* State & Logic --------------------------------------- */
const drawingCanvasState = {
  width: 600,
  size: 16,
  borderThickness: 1,
  fillColor: "rgb(0,0,0)",
  showGrid: true,
  fillMode: "normal" // normal - random - darkening 
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

export function setCanvasSize(newSize) {
  drawingCanvasState.size = newSize;
  notify();
}

export function setShowGrid(bool) {
  drawingCanvasState.showGrid = bool;
  notify();
}

export function setFillColor(newColor) {
  if (newColor.startsWith("#")) {
    newColor = utils.hexToRgb(newColor);
  }
  
  drawingCanvasState.fillColor = newColor;
}

export function setFillMode(mode) {
  drawingCanvasState.fillMode = mode;
}


export function getCurrentState() {
  return { ...drawingCanvasState }
}