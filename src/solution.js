// Function to calculate the area of a rectangle
const calculateRectangleArea = (w, l) => {
  let area;

  if(isNaN(w) || isNaN(l)){
    return 'Error: Invalid input'
  } else {
    area = w * l;
  }
  return area;
}

// Function to calculate the perimeter of a rectangle

const calculateRectanglePerimeter = (w, l) => {
  let perimeter;

  if(isNaN(w) || isNaN(l)){
    return 'Error: Invalid Input'
  } else {
    perimeter = 2 * (w + l);
  }
  return perimeter;
}

// Function to calculate the length of the diagonal

const calculateDiagonalLength = (a, b) => {
  let c;

  if(isNaN(a) || isNaN(b)){
    return 'Error: Invalid Input'
  } else {
    a *= a;
    b *= b;

    let sum = a + b;
    c = Math.sqrt(sum);
  }

  return c
}

console.log(calculateRectangleArea(10,10));
console.log(calculateRectanglePerimeter(10,10));
console.log(calculateDiagonalLength(9,7));
