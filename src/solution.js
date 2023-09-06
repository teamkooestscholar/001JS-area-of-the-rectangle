
function calculateRectangleArea(widthh,height) {
  // formula of the area
  let area = width * height;

  // Return the Area
  return area;
}
  function calculateRectanglePerimeter(width,height) {
  let perimeter = (length+width) * 2;

  // Return the Perimeter
  return perimeter;
}
  function calculateRectangleDiagonal(width,height){
  let diagonal =(length^2 + width^2)**2;

  // Return the Diagonal
  return diagonal;
}
  //Prompt the user for input
  const width = parseFloat(prompt("Please input the Width of the Rectangle: "));
  const height = parseFloat(prompt("Please input the height of the Rectangle: "));
  //Check if the Width and Height are Numerical Values

  if (!isNaN(width) && !isNaN(height)) {
    const area = calculateRectangleArea(width,height).toFixed(2);
    console.log (`The area of the rectangle is: ${area}`)
    const perimeter = calculateRectanglePerimeter(width,height).toFixed(2);
    console.log (`The Perimeter of the rectangle is: ${perimeter}`)
    const diagonal = calculateRectangleDiagonal(width,height).toFixed(2);
    console.log (`The Diagonal of the rectangle is: ${diagonal}`)
    
  } else {
    console.log("Invalid input for Width and Height. Please enter valid numerical values.")
  }