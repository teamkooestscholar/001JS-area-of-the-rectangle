function calculateRectangleArea(width, height) {
  // Calculate the area
  let area = width * height;
  // Return the area
  return area;
}
function calculateRectangleProperties() {
  // Prompt the user for width and height
  const widthInput = prompt("Input width of the rectangle:");
  const heightInput = prompt("Input the height of the rectangle:");

  // Convert the input to numbers and check for NaN
  const width = parseFloat(widthInput);
  const height = parseFloat(heightInput);

  if (isNaN(width) || isNaN(height)) {
    console.log("Error enter only valid numeric values for width and height");
    return;
  }

  // Calculate area, perimeter, and diagonal
  const area = width * height;
  const perimeter = 2 * (width + height);
  const diagonal = Math.sqrt(width ** 2 + height ** 2);

  // Display the results
  console.log(`Area of the rectangle: ${area}`);
  console.log(`Perimeter of the rectangle: ${perimeter}`);
  console.log(`Length of the diagonal is: ${diagonal}`);
}

// Call the function to calculate and display rectangle properties
calculateRectangleProperties();

