// Calculate and display the perimeter of the rectangle
function calculateRectanglePerimeter(w, l) {
  
  var a = w + l;
  var p = 2 * a;

  if(isNaN(w, l)){
    return 'Error raised: The value must be a number';
  }


  return "Perimeter is: " + p;
}

// Function to Calculate and display the length of the diagonal
function calculateLengthofDiagonal(l, w){

  var a = w**2 + 1**2;
  var d = Math.sqrt(a); 

  if(isNaN(l, w)){
    return 'Error raised: The value must be a number'
  }

  return "the length of the diagonal is: " + d;
}

console.log(calculateRectanglePerimeter(11, 11));
console.log(calculateRectanglePerimeter("not a number"));

console.log(calculateLengthofDiagonal(11,11));
console.log(calculateLengthofDiagonal("not a number"))
