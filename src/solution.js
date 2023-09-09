// Declarations
const prompt = require("prompt-sync")({sigint:true});
let w, h, choice, area, diagonal, perimeter;

// Function to calculate the area of a rectangle
function calculateRectangleArea(w,h) {
  const a = w * h;
  return a;
}
// Function to calculate the diagonal of a rectangle
function calculateRectangleDiagonal(w,h) {
  const d = Math.sqrt(w*w + h*h);
  return d;
}
// Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(w,h) {
  const p = 2*(w*h);
  return p;
}

// Inputs
start: while(true) {
  console.log("\n------------------------------------------------\n" +
              "! RECTANGLE CALCULATOR | by Aires Javan Macalino !\n" +
              "[1] Calculate Area\n" + 
              "[2] Calculate Diagonal\n" + 
              "[3] Calculate Perimeter\n" +
              "[0] End Program\n")

              choice = prompt("Choose formula to solve for: ");

  // Process-Output
  choice1: while(choice == 1) {
    w = prompt("Enter value for width: ");
    if (isNaN(w)) {
      console.log("Entered width value is: Not a Number!");
      w = undefined;
      continue choice1;
    }
    h = prompt("Enter value for height: ");
    if (isNaN(h)) {
      console.log("Entered height value is: Not a Number!");
      w = undefined;
      continue choice1;
    }
    area = calculateRectangleArea(w,h);
    console.log("The area of this rectangle is: " + area);
    choice = undefined;
    continue start;
  }

  choice2: while(choice == 2) {
    w = prompt("Enter value for width: ");
    if (isNaN(w)) {
      console.log("Entered width value is: Not a Number!");
      w = undefined;
      continue choice2;
    }
    h = prompt("Enter value for height: ");
    if (isNaN(h)) {
      console.log("Entered height value is: Not a Number!");
      w = undefined;
      continue choice2;
    }
    diagonal = calculateRectangleDiagonal(w,h);
    console.log("The diagonal of this rectangle is: " + diagonal);
    choice = undefined;
    continue start;
  }

  choice3: while(choice == 3) {
    w = prompt("Enter value for width: ");
    if (isNaN(w)) {
      console.log("Entered width value is: Not a Number!");
      w = undefined;
      continue choice3;
    }
    h = prompt("Enter value for height: ");
    if (isNaN(h)) {
      console.log("Entered height value is: Not a Number!");
      w = undefined;
      continue choice3;
    }
    perimeter = calculateRectanglePerimeter(w,h);
    console.log("The perimeter of this rectangle is: " + perimeter);
    choice = undefined;
    continue start;
  }

  if (choice < 1, choice > 3, isNaN(choice)) {
    console.log("The entered value is invalid!");
    choice = undefined;
    continue start;
  }

  if (choice == 0) {
    console.log("Thanks for using the program!");
    return;
  }
}