// Function to calculate the area of a rectangle
function calculateRectangleArea(_, _) {
  var perimeter = (w + l) * 2;
  if (isNaN(w, l)) {
    return 'Error: Not a Number!';
  }
  return perimeter;
}

function calculateDiagonal(w, l) {
  var diagonal = Math.sqrt(w*w + l*l);
  if (isNaN(w, l)) {
    return 'Error: Not a Number!';
  }
  return diagonal;
}


console.log(calculateRectangleArea('5', '5'));

console.log(calculateDiagonal('5', '5'));