
```markdown
# Etch-a-Sketch Project

## Introduction

This project is a browser-based version of an Etch-a-Sketch, allowing users to draw on a grid using DOM manipulation skills. The application features a flexible grid layout, hover effects for drawing, and the ability to customize the grid size.

## Project Features

- **Dynamic Grid Creation**: Generates a 16x16 grid of square divs using JavaScript.
- **Flexbox Layout**: Utilizes Flexbox to display the grid without using CSS Grid.
- **Hover Effects**: Changes the color of squares on mouse hover, creating a drawing effect.
- **Custom Grid Size**: Users can input the number of squares per side, allowing for grid resizing.
- **Responsive Design**: Maintains the total pixel area while changing the grid size.

## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- A code editor (e.g., Visual Studio Code) installed on your computer.
- A web browser for testing the application.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SumantSagar73/etch-a-sketch.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd etch-a-sketch
   ```

3. **Open `index.html` in your web browser**.

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
