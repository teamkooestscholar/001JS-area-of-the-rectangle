// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
  return "Please enter valid numbers for width and height.";
  }
  
  const area = width * height;
  const perimeter = 2 * (width + height);
  const diagonal = Math.sqrt(width ** 2 + height ** 2);
  
  return `Rectangle Area: ${area}\nRectangle Perimeter: ${perimeter}\nRectangle Diagonal Length: ${diagonal}`;
  }
  
  const widthInput = 5;
  const heightInput = 10;
  const result = calculateRectangleArea(widthInput, heightInput);
  console.log(result);
