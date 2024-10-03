const container = document.querySelector(' .container');
const button = document.querySelector('#resizeBtn');

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

    // Add event listener for mouseover to change the color
    divElement.addEventListener('mouseover', () => {
      divElement.style.backgroundColor = 'blue';
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
