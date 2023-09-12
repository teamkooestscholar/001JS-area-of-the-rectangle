// Function to calculate and display the perimeter of a rectangle
function calculateRectanglePerimeter(width, length) {
  // Calculate the sum of width and length
  var sum = width + length;
  // Calculate the perimeter (twice the sum)
  var perimeter = 2 * sum;

  // Check if either width or length is not a number
  if (isNaN(width) || isNaN(length)) {
    return 'Error: Both values must be numbers';
  }

  // Return the result as a string
  return "Perimeter: " + perimeter;
}

// Function to calculate and display the length of the diagonal of a rectangle
function calculateLengthofDiagonal(length, width) {
  // Calculate the square of width and length and their sum
  var sumOfSquares = width ** 2 + length ** 2;
  // Calculate the square root of the sum of squares
  var diagonalLength = Math.sqrt(sumOfSquares);

  // Check if either length or width is not a number
  if (isNaN(length) || isNaN(width)) {
    return 'Error: Both values must be numbers';
  }

  // Return the result as a string
  return "Diagonal length: " + diagonalLength;
}

// Test the functions with numeric and non-numeric inputs
console.log(calculateRectanglePerimeter(11, 11));
console.log(calculateRectanglePerimeter("not a number"));

console.log(calculateLengthofDiagonal(11, 11));
console.log(calculateLengthofDiagonal("not a number"));