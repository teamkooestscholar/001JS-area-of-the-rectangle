const prompt=require("prompt-sync")({sigint:true});
// Function to calculate the area of a rectangle
function calculateRectangleArea(w, h) {
 
 
  var a = w * h;
return a;

}

function calculatePerimeter(w, h) {
 
 
  var a = 2*w + 2*h;
return a;

}


function calculateDiagonal(w, h) {
 
 
  var a = Math.sqrt((w**2 + h**2));
return a;

}


let w = prompt("enter width ");

let h = prompt("enter height ");

if (isNaN(w)){
  console.log("The width is not a number ");

}
 else  {

   console.log("good job ")
 }


if (isNaN(h)){
 console.log("The height is not a number")

}
 else {

   console.log("good job")
 }


var answer = calculateRectangleArea(w,h);
console.log("The area is" + answer);

var answer = calculatePerimeter(w,h);
console.log("The perimeter is" + answer);

var answer = calculateDiagonal(w,h);
console.log("The Diagonal is" + answer);
