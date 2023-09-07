// Function to calculate the area of a rectangle
const calculateRectangleArea = (w, h) => {
  let area = w * h;

  return area;
}

// Function to calculate the perimeter of a rectangle

const calculateRectanglePerimeter = (w, h) => {
  let perimeter = 2 * (w + h);

  return perimeter;
}

// Function to calculate the length of the diagonal

const calculateDiagonalLength = (a, b) => {
  let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

  return c
}

const width = parseFloat(prompt("Enter width: "));
const height = parseFloat(prompt("Enter height: "));

if(isNaN(width) || isNaN(height)) {
  alert("Error: Invalid Input")
} else {
  alert(`Area: ${calculateRectangleArea(width,height)}, Perimeter: ${calculateRectanglePerimeter(width,height)}, Diagonal: ${calculateDiagonalLength(width, height)}`);
}
