const container = document.querySelector(' .container');
const button = document.querySelector('#resizeBtn');

// Function to create a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Red value
  const g = Math.floor(Math.random() * 256); // Green value
  const b = Math.floor(Math.random() * 256); // Blue value
  return `rgb(${r}, ${g}, ${b})`; // Return RGB string
}
// Function to create the grid
function createGrid(squaresPerSide) {
  // Clear the existing grid
  container.innerHTML = '';

  // Calculate the size of each square
  const squareSize = 640 / squaresPerSide; // Adjusted to 640 for proper fitting

  // Create the new grid
  for(let i = 1; i <= squaresPerSide * squaresPerSide; i++) {
    const divElement = document.createElement('div');
    divElement.style.width = `${squareSize}px`;
    divElement.style.height = `${squareSize}px`;
    divElement.style.transition = "background-color 0.2s, opacity 0.2s"; // Smooth transition

    // Initialize opacity
    divElement.dataset.opacity = 0; // Custom data attribute to track opacity level


    // Add event listener for mouseover to change the color
    divElement.addEventListener('mouseover', () => {
      if (divElement.dataset.opacity < 10) {
        divElement.dataset.opacity++;
    }
    // Calculate new opacity
    const newOpacity = divElement.dataset.opacity * 0.1;
    // Darken the square
    divElement.style.backgroundColor = getRandomColor();
    divElement.style.opacity = newOpacity;
    });

    container.appendChild(divElement);
  }
}

// Initial grid creation
createGrid(16); // Default 16x16 grid

// Event listener for the resize button
button.addEventListener('click', () => {
  const squaresPerSide = parseInt(prompt('Enter the number of squares per side:'));
  
  // Input validation and maximum limit check
  if (squaresPerSide && squaresPerSide > 0 && squaresPerSide <= 100) { // Limit to 100 for performance
    createGrid(squaresPerSide);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});
