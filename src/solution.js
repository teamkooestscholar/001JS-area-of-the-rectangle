// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
  // Calculate the area
  let area = width * height;

  // Return the area
  return area;
}

// Prompt the user for input
const width = parseFloat(prompt("Enter the width of the rectangle:"));
const height = parseFloat(prompt("Enter the height of the rectangle:"));

// Check if the input values are valid numbers
if (!isNaN(width) && !isNaN(height)) {
  // If both width and height are valid numbers, calculate the area
  const area = calculateRectangleArea(width, height);

  // Display the calculated area to the user
  console.log(`The area of the rectangle is: ${area}`);
} else {
  // If the input values are not valid numbers, display an error message
  console.log("Invalid input. Please enter valid numeric values for width and height.");
}
