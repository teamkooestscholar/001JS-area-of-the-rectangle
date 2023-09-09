// Function to calculate the area of a rectangle
function calculateArea(width, height) {
  return width * height;
}

// Function to calculate the perimeter of a rectangle
function calculatePerimeter(width, height) {
  return 2 * (width + height);
}

// Function to calculate the length of the diagonal of a rectangle
function calculateDiagonal(width, height) {
  return Math.sqrt(width * width + height * height);
}

// Function to validate if a given input is a number
function isNumber(input) {
  return !isNaN(input);
}

// Prompt the user for width and height
const widthInput = prompt("Enter your desired width of the rectangle:");
const heightInput = prompt("Enter your desired height of the rectangle:");

// Parse the input to numbers
const width = parseFloat(widthInput);
const height = parseFloat(heightInput);

// Check if the inputs are valid numbers
if (isNumber(width) && isNumber(height)) {
  // Calculate area, perimeter, and diagonal
  const area = calculateArea(width, height);
  const perimeter = calculatePerimeter(width, height);
  const diagonal = calculateDiagonal(width, height);

  // Display the results
  console.log(`The calculated area of the rectangle is: ${area}`);
  console.log(`The calculated perimeter of the rectangle is: ${perimeter}`);
  console.log(`The calculated length of the diagonal is: ${diagonal}`);
} else {
  // Display an error message for invalid input
  console.error("Invalid entry. Please enter a valid number for width and height.");
}
