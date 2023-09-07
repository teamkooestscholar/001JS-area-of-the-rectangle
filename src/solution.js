console.log("This program calculates the area, perimeter, and diagonal of a rectangle");

// Function to calculate the area of a rectangle
function calculateRectangleArea(_, _) {
  const a = w * h;
  const perimeter = 2 * (w + h);
  const diagonal = Math.sqrt(w ** 2 + h ** 2);

  console.log("The Area of the Rectangle is:", a);
  console.log("The Perimeter of the Rectangle is:", perimeter);
  console.log("The Length of the Diagonal is:", diagonal);
}

let wInput, hInput;
let w, h;

while (isNaN(w) || isNaN(h)) {
  wInput = prompt("Enter the width:");
  hInput = prompt("Enter the height:");
  w = parseFloat(wInput);
  h = parseFloat(hInput);

  if (isNaN(w) || isNaN(h)) {
    console.log("Kindly enter valid numbers only for width and height.");
  }
}

calculateRectangleArea(w, h);

