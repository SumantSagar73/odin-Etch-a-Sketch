# Etch-a-Sketch Project

## Introduction
This project is a browser-based version of an Etch-a-Sketch toy that allows users to draw on a grid of squares. The grid dynamically changes in size based on user input, and each square changes color randomly and darkens progressively with each interaction.

## Features
- A 16x16 grid of square divs is created using JavaScript.
- Each square changes color to a random RGB value when hovered over.
- Squares darken progressively by 10% opacity with each hover until fully opaque after ten interactions.
- Users can resize the grid to a maximum of 100 squares per side.
- Built with HTML, CSS, and JavaScript.

## Getting Started
1. Clone the repository or download the ZIP file.
2. Open `index.html` in a web browser to start using the application.
3. Click the "Resize Grid" button to enter the number of squares per side (1-100) and generate a new grid.

## Technologies Used
- HTML
- CSS
- JavaScript

### Project Structure

```
/etch-a-sketch
│
├── index.html        # Main HTML file
├── style.css         # Stylesheet for the project
└── script.js         # JavaScript file for DOM manipulation and logic
```

### Usage

1. When the application loads, you will see a 16x16 grid of squares.
2. Move your mouse over the squares to change their colors, creating a drawing effect.
3. Click the "Change Grid Size" button to input a new grid size (up to 100). The existing grid will be replaced with a new one of the specified size while maintaining the total area.

### Known Issues

- Ensure your browser's JavaScript is enabled for proper functionality.
- If the grid does not appear, check for console errors or ensure the CSS is linked correctly.

## Acknowledgments

- This project was inspired by the classic Etch-a-Sketch toy and aims to practice DOM manipulation skills in JavaScript.

## Live Preview

You can view a live demo of the project [here](https://your-live-preview-link.com).

## Extra Credit

- Randomized RGB colors with each interaction.
- Progressive darkening effect of squares based on user interaction.

