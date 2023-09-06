// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
  // Calculate the area
  let area = width * height;

  // Return the area
  return area;
}

// Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(width, height) {
  // Calculate the perimeter
  let perimeter = 2 * (width + height);

  // Return the perimeter
  return perimeter;
}

// Function to calculate the length of the diagonal of a rectangle
function calculateRectangleDiagonal(width, height) {
  // Calculate the diagonal using the Pythagorean theorem
  let diagonal = Math.sqrt(width ** 2 + height ** 2);

  // Return the diagonal
  return diagonal;
}

// Prompt the user for input
const width = parseFloat(prompt("Enter the width of the rectangle:"));
const height = parseFloat(prompt("Enter the height of the rectangle:"));

// Check if the input values are valid numbers
if (!isNaN(width) && !isNaN(height)) {
  // If both width and height are valid numbers, calculate the area
  const area = calculateRectangleArea(width, height);

  // Calculate and display the perimeter with two decimal places
  const perimeter = calculateRectanglePerimeter(width, height).toFixed(2);
  console.log(`The perimeter of the rectangle is: ${perimeter}`);

  // Calculate and display the length of the diagonal with two decimal places
  const diagonal = calculateRectangleDiagonal(width, height).toFixed(2);
  console.log(`The length of the diagonal of the rectangle is: ${diagonal}`);

  // Display the calculated area with two decimal places
  console.log(`The area of the rectangle is: ${area.toFixed(2)}`);
} else {
  // If the input values are not valid numbers, display an error message
  console.log("Invalid input. Please enter valid numeric values for width and height.");
}
