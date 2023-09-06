function calculateRectangleArea(w, l) {
  var a = w + l;
  var a2 = a * 2;
  if (isNaN(w, l)) {
    return 'ERROR: not a Number!';
  }
  return a2;
}

function calculateDiagonal(w , l){
  var a1 = w**2;
  var a2 = l**2;
  var a3 = a1 + a2;
  var total = Math.sqrt(a3);

  if (isNaN(w, l)) {
    return 'ERROR: not a Number!';
  }
  return total;
}

console.log(calculateRectangleArea('5', '5'));

console.log(calculateDiagonal(5, 5))

