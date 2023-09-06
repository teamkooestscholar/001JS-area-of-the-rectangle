# Calculate the Area of the Rectangle

This JavaScript program calculates the area of a rectangle based on user-provided input for its width and height.

## Function for Calculating Rectangle Area

The code defines a function called `calculateRectangleArea` that takes the `width` and `height` of a rectangle as parameters and returns its area.

```javascript
function calculateRectangleArea(width, height) {
  // Calculate the area
  let area = width * height;

  // Return the area
  return area;
}
```

## User Input

The program prompts the user to enter the width and height of the rectangle using the `prompt()` function. It then converts the user input to floating-point numbers using `parseFloat()`.

```javascript
// Prompt the user for input
const width = parseFloat(prompt("Enter the width of the rectangle:"));
const height = parseFloat(prompt("Enter the height of the rectangle:"));
```

## Input Validation

The code checks if the input values are valid numbers using `isNaN()`. If both `width` and `height` are valid numbers, it calculates the area using the `calculateRectangleArea` function.

```javascript
// Check if the input values are valid numbers
if (!isNaN(width) && !isNaN(height)) {
  // If both width and height are valid numbers, calculate the area
  const area = calculateRectangleArea(width, height);

  // Display the calculated area to the user
  console.log(`The area of the rectangle is: ${area}`);
} else {
  // If the input values are not valid numbers, display an error message
  console.log("Invalid input. Please enter valid numeric values for width and height.");
}
```

This program ensures that the user's input is valid and provides a calculated area of the rectangle if the input is valid, or an error message if it's not.
