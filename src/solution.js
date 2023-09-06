function calculateDiagonal(length, width) {
  return Math.sqrt(length ** 2 + width ** 2);
}

function calculateAndDisplayRectangleProperties() {
  const length = getValidInput("Enter the length of the rectangle:");
  const width = getValidInput("Enter the width of the rectangle:");

  const area = calculateRectangleArea(length, width);
  const perimeter = calculateRectanglePerimeter(length, width);
  const diagonal = calculateDiagonal(length, width);

  alert(`The area of the rectangle is: ${area}`);
  alert(`The perimeter of the rectangle is: ${perimeter}`);
  alert(`The length of the diagonal is: ${diagonal.toFixed(2)}`);
}


while (true) {
  calculateAndDisplayRectangleProperties();

  const continueInput = prompt("Do you want to calculate properties for another rectangle? (yes/no)").toLowerCase();
  if (continueInput !== "yes") {
    break;
  }
}

alert("Goodbye!");