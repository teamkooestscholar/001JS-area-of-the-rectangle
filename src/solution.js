// Function to calculate the area of a rectangle
function calculateRectanglePerimeter(w, l) {

  var a = w + l;
  var p = 2 * a;

  if(isNaN(w, l)) {
    return 'Error: the entered value is not a number';
  }

  return "Perimeter is:" + p;
}

function calculateDiagonal(w, l) {

  var a = w**2 + l**2;
  var d = Math.sqrt(a);
  
  if(isNaN(w, l)){
    return 'Error: the entered value is not a number';
  }

  return "Diagonal is: " + d;
}

console.log(calculateRectanglePerimeter(5, 5));
console.log(calculateRectanglePerimeter("abc"));

console.log(calculateDiagonal(5, 5));
console.log(calculateDiagonal("abc"));
