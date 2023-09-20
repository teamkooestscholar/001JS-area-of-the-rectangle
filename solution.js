// Get user input for length and width
const length = parseFloat(prompt("Enter the length of the rectangle:"));
const width = parseFloat(prompt("Enter the width of the rectangle:"));

// Check if the input is valid
if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
  alert("Invalid input. Both length and width must be valid positive numbers.");
} else {
  // Calculate the area
  const area = length * width;
  alert(`The area of the rectangle is: ${area}`);
}