const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(promptMessage, callback) {
  rl.question(promptMessage, (input) => {
    const number = parseFloat(input);
    if (isNaN(number)) {
      console.log("Error: Please enter a valid number.");
      getUserInput(promptMessage, callback);
    } else {
      callback(number);
    }
  });
}

getUserInput("Enter width of rectangle: ", (width) => {
  getUserInput("Enter height of rectangle: ", (height) => {
    // Calculate the area of the rectangle
    const area = width * height;

    // Calculate the perimeter of the rectangle
    const perimeter = 2 * (width + height);

    // Calculate the length of the diagonal using the Pythagorean theorem
    const diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

    // Print a message with the answers using template literals
    console.log(`The area of the rectangle with width ${width} and height ${height} is ${area} square units.`);
    console.log(`The perimeter of the rectangle with width ${width} and height ${height} is ${perimeter} units.`);
    console.log(`The length of the diagonal of the rectangle with width ${width} and height ${height} is ${diagonal} units.`);
    
    rl.close();
  });
});