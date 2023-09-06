const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateRectangleProperties(w, h) {
  const a = w * h;
  const p = 2 * (w + h);
  const d = Math.sqrt(w ** 2 + h ** 2);
  return { a, p, d };
}

function calculateRectangleArea() {
  let w, h; 

  rl.question("Enter the width of the rectangle: ", (widthInput) => {
    w = parseFloat(widthInput); 

    rl.question("Enter the height of the rectangle: ", (heightInput) => {
      h = parseFloat(heightInput); 

      if (isNaN(w) || isNaN(h)) {
        console.log("ERROR: Please enter valid numbers for width and height.");
      } else {
        const { a, p, d } = calculateRectangleProperties(w, h);
        console.log(`Rectangle Area: ${a}`);
        console.log(`Rectangle Perimeter: ${p}`);
        console.log(`Diagonal Length: ${d}`);
      }

      rl.close();
    });
  });
}

calculateRectangleArea();
