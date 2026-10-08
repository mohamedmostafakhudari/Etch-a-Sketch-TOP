# Etch-a-Sketch-TOP

A dynamic, interactive canvas board built with plain Vanilla JavaScript. This application allows users to draw by hovering over a grid, customize canvas dimensions, toggle grid lines, and experiment with different drawing modes.

---

## About The Project

This project goes beyond a basic DOM manipulation exercise by implementing clean software architecture patterns in plain JavaScript. 

### Key Features
* **Interactive Canvas:** Paint on the grid simply by hovering over cells.
* **Dynamic Grid Size:** Resize the canvas grid on the fly.
* **Grid Toggle:** Easily show or hide cell borders.
* **Random Mode:** Paint cells using randomized colors.
* **Progressive Darkening Mode:** Incrementally darkens a cell with each hover, reaching full black after 10 passes.

### Architecture & Design Patterns
* **Model-View-Controller (MVC):** The UI acts as a direct reflection of the central application state. State updates drive view changes cleanly, separating business logic from DOM updates.
* **Observer / Pub-Sub Pattern:** Implemented a custom Subscribe/Notify pattern to automate state updates and UI re-rendering via centralized triggers in the main module.
* **Selective Rendering:** Targeted specific view updates for isolated changes (rather than triggering full-page re-renders on every event) to optimize performance and prevent unnecessary DOM operations.

---

## Built With

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6+)**

---

## Getting Started

No build tools, bundlers, or external dependencies are required.

### Prerequisites
A modern web browser (e.g., Chrome, Firefox, Edge, Safari).

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/mohamedmostafakhudari/Etch-a-Sketch-TOP.git](https://github.com/mohamedmostafakhudari/Etch-a-Sketch-TOP.git)
   ```

2. Open index.html directly in your browser, or launch it using a local development server like VS Code's Live Server extension.

---

## How to Use

1. Hover to Draw: Move your mouse over the canvas grid to start painting cells.

2. Change Canvas Size: Use the size controls to change the grid resolution.

3. Toggle Grid Lines: Click the grid button to show or hide cell borders.

4. Switch Modes: Select Random Mode for unpredictable color fills or Darkening Mode to layer shading up to 10 times until pitch black.

---

## What I Learned / Reflection

While the core functionality of an Etch-a-Sketch is straightforward, the primary goal of this project was to practice architectural design patterns in a self-contained application:

- Applying MVC in Plain JS: Structuring state and UI separately without needing heavy frameworks.
- Pub/Sub Implementation: Learning how event buses and subscription loops streamline state-to-view synchronization.
- Granular DOM Operations: Deciding when to issue full view re-renders versus executing precision targeted updates to maintain a responsive user experience.

---

## Acknowledgments / Credits

- Inspired by [The Odin Project](https://www.theodinproject.com/dashboard) curriculum.

---

## License

Distributed under the MIT License. See LICENSE for more information.

---

## Tasks

### Main
- [x] create a 16x16 grid of square div 
- [x] on hover, grid squares should change color to black color
- [x] the grid size should be adjustable based on user input
### Extra
- [x] i can change the fill color of the square, not always black
- [x] random fill color mode
  - random rgb with each interaction
- [x] darkening effect mode
  - darkens by 10% with each interaction
- [x] i can clear the canvas board and start a new one