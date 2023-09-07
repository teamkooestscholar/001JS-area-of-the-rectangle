// Function to calculate the area of a rectangle
function calculateRectangleArea(w, h) {
  let w, h;
  
  while (isNaN(w)) {
    let winput = prompt("Enter the width of the rectangle");
    w = parseFloat(input);
    if(isNaN(w)){
      console.error("Invalid input. Please enter a valid number for width.");
    }
  }

while (isNaN(h)) {
  let hinput = prompt("Enter the height of the rectangle");
  h = parseFloat(input);
  if(isNaN(h)){
    console.error("Invalid input. Please enter a valid number for height.");
  }
}
 let a = w * h;

 let diagonal = Math.sqrt(Math.pow(h, 2) +
 Math.pow(w, 2));

 console.log("The area of rectangle is: " + a);
 console.log("The diagonal of the rectangle is: " + diagonal)
}

function calculateRectangleArea();
