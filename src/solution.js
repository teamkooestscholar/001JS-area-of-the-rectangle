// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
  if (!isNaN(width) && !isNaN(height)) {
    const area = width * height;

    return area;
  } else {
  
    return "Invalid input. Please enter valid numeric values for width and height.";
  }
}
const width = parseFloat(prompt("Enter the width of the rectangle:"));
const height = parseFloat(prompt("Enter the height of the rectangle:"));
const area = calculateRectangleArea(width, height);

if (typeof area === 'number') {
  alert(`The area of the rectangle with width ${width} and height ${height} is ${area.toFixed(2)}.`);
} else {
  alert(area);
}
