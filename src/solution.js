console.log("Area, perimeter, and diagonal of a rectangle calculator");

function calculateRectangleProperties() {
  let wInput = prompt("Enter the width:");
  let hInput = prompt("Enter the height:");

  if (!wInput || !hInput) {
    console.log("Error: Please enter valid values.");
    return;
  }

  let w = parseFloat(wInput);
  let h = parseFloat(hInput);

  if (isNaN(w) || isNaN(h)) {
    console.log("Error: Please enter valid numbers.");
    return;
  }

  let a = w * h;
  let perimeter = 2 * (w + h);
  let diagonal = Math.sqrt(w ** 2 + h ** 2);

  console.log(`Rectangle Properties:`);
  console.log(`- Area: ${a}`);
  console.log(`- Perimeter: ${perimeter}`);
  console.log(`- Length of Diagonal: ${diagonal}`);
}

calculateRectangleProperties();