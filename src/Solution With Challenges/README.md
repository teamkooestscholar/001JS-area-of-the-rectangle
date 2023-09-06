# Calculate the Area of the Rectangle

This JavaScript program calculates the area, perimeter, and length of the diagonal of a rectangle based on user-provided input for its width and height.

## Functions for Calculations

The code defines three functions to perform various calculations:

### 1. `calculateRectangleArea(width, height)`

This function calculates the area of a rectangle using the formula `width * height`.

```javascript
function calculateRectangleArea(width, height) {
  // Calculate the area
  let area = width * height;

  // Return the area
  return area;
}
```

### 2. `calculateRectanglePerimeter(width, height)`

This function calculates the perimeter of a rectangle using the formula `2 * (width + height)`.

```javascript
function calculateRectanglePerimeter(width, height) {
  // Calculate the perimeter
  let perimeter = 2 * (width + height);

  // Return the perimeter
  return perimeter;
}
```

### 3. `calculateRectangleDiagonal(width, height)`

This function calculates the length of the diagonal of a rectangle using the Pythagorean theorem `Math.sqrt(width ** 2 + height ** 2)`.

```javascript
function calculateRectangleDiagonal(width, height) {
  // Calculate the diagonal using the Pythagorean theorem
  let diagonal = Math.sqrt(width ** 2 + height ** 2);

  // Return the diagonal
  return diagonal;
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

The code checks if the input values are valid numbers using `isNaN()`. If both `width` and `height` are valid numbers, it proceeds with calculations.

```javascript
// Check if the input values are valid numbers
if (!isNaN(width) && !isNaN(height)) {
}
```

## Calculations and Output

If the input is valid, the program calculates and displays the following:

- The perimeter of the rectangle with two decimal places.
- The length of the diagonal of the rectangle with two decimal places.
- The area of the rectangle with two decimal places.

```javascript
// Calculate and display the perimeter with two decimal places
const perimeter = calculateRectanglePerimeter(width, height).toFixed(2);
console.log(`The perimeter of the rectangle is: ${perimeter}`);

// Calculate and display the length of the diagonal with two decimal places
const diagonal = calculateRectangleDiagonal(width, height).toFixed(2);
console.log(`The length of the diagonal of the rectangle is: ${diagonal}`);

// Display the calculated area with two decimal places
console.log(`The area of the rectangle is: ${area.toFixed(2)}`);
```

## Error Handling

If the user provides invalid input (non-numeric values), the program displays an error message.

```javascript
console.log("Invalid input. Please enter valid numeric values for width and height.");
```

This program ensures that the user's input is valid and provides accurate calculations and output for rectangle properties.
