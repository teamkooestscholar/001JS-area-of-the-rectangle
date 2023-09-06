let length, width;


while (true) {
  length = parseFloat(prompt("Enter the length of the rectangle:"));
  width = parseFloat(prompt("Enter the width of the rectangle:"));


  if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
    break; 
  } else {
    alert("Please enter valid positive numbers for length and width.");
  }
}


const area = length * width;
alert(`The area of the rectangle is: ${area}`);