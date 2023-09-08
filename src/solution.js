const prompt=require("prompt-sync")({sigint:true});
// Function to calculate the area of a rectangle

function calculateRectangleArea(w, h) {
  // Put your code here
  const a = w * h;
  return a;
}

function calculatePerimeter(w, h) {
  // Put your code here
  const a = 2*w + 2*h;
  return a;
}

function calculateDiagonal(w, h) {
  // Put your code here
  const a = Math.sqrt((w**2+h**2));
  return a;
}

let w = prompt("Enter width:");

let h = prompt("Enter height:");

if (isNaN(w)){
  console.log("The entered Width is not a number ");
}

  else  {
   console.log("You did Great!")
  }

if (isNaN(h)){
 console.log("Input is Not A Number")
}
  else {
   console.log("You did Great!")
  }

var area = calculateRectangleArea(w, h);
  console.log("The Area is "+ area);

var perimeter = calculatePerimeter(w, h);
  console.log("The Perimeter is "+ perimeter);

var diagonal = calculateDiagonal(w, h);
  console.log("The Diagonal length is "+ diagonal);