<<<<<<< HEAD
/**
 * TASKS:
 * - Create a function called calculateRectangleArea that accepts 2 parameters: width and height.
 */
function calculateRectangleArea(width, height) {
  /**
   * CHALLENGE 1:
   * - Make sure that all inputs are numbers. Display an error message if the user did not enter numbers for the width and height.
   */
  if (isNaN(width) || isNaN(height)) {
    return "Error: one or more of the parameters is not a number!";
  } else {
    const area = width * height;
    
    /**
     * CHALLENGE 2:
     * - Calculate and display the perimiter of the rectangle.
     */
    const perimeter = 2 * (width + height);

    /**
     * CHALLENGE 3:
     * - Calculate and display the length of the diagonal.
     */
    const diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    return `AREA: ${area}, PERIMETER: ${perimeter}, and DIAGONAL: ${diagonal}`;
  }
};

console.log(calculateRectangleArea(5, 5)); // Output -> AREA: 25, PERIMETER: 20, and DIAGONAL: 7.0710678118654755
console.log(calculateRectangleArea(10, 7)); // Output -> AREA: 70, PERIMETER: 34, and DIAGONAL: 12.206555615733702



=======
// Function to calculate the area of a rectangle
function calculateRectangleArea(_, _) {
  // Put your code here
}

>>>>>>> parent of 834dd09... Merge pull request #1 from cortezrc6/std-rollycortez
