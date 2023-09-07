// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  let area;
  if (isNaN(length) || isNaN(width)) {
    return "error";
  } else {
    area = length * width;
  }
  return area;
}

function calculatePerimeter(length, width) {
  let perimeter;
  if (isNaN(length) || isNaN(width)) {
    return "error";
  } else {
    perimeter = 2 * (length + width);
  }
  return perimeter;
}

function calculateDiagonal(length, width) {
  let diagonal;
  if (isNaN(length) || isNaN(width)) {
    return "error";
  } else {
    const squaredLength = Math.pow(length, 2);
    const squaredWidth = Math.pow(width, 2);
    diagonal = Math.sqrt(squaredLength + squaredWidth);
  }
  return diagonal;
}

let length = 5;
let width = 5;

console.log(
  "Area:", calculateArea(length, width),
  "Perimeter:", calculatePerimeter(length, width),
  "Diagonal:", calculateDiagonal(length, width)
);

