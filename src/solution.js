// Function to calculate the area of a rectangle
//prompt user
var width = parseFloat(prompt("Enter the width of the rectangle:"));
var height = parseFloat(prompt("Enter the height of the rectangle:"));

// Put your code here


//invalid input error prompt

if (isNaN(width) || isNaN(height)) {
  alert("Invalid input. Please enter valid numbers.");
} else {
  // area
  var area = width * height;
  var perimeter = 2 * (width + height);
  //diagonal with math objecttt
  var diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  
  // Display area
  alert("The area of the rectangle is: " + area);
  //display perimeter
  alert("The perimeter of the rectangle is: " + perimeter);
 //display diagonal
  alert("The length of the diagonal of the rectangle is: " + diagonal);
}
