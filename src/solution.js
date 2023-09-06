//Code spaces uses node.js prompt is a function that does not come installed for node.js
//first step npm install prompt-sync 

//then add this to make the prompt command work
const prompt=require("prompt-sync")({sigint:true});


function calculateRectangleArea(w, h) {
  const a = w * h;
  return a;
  }


function CalculatePerimeter(w, h) {
  const a =  2 * w + 2 * h;
  return a;
  }

function CalculateDiagonal(w, h) {
  const a =  Math.sqrt((w**2 + h**2));
  return a;
    }
  
  
  let w = prompt("Enter Width ");
  let h = prompt("Enter height ");



  if (isNaN(w)){
   console.log("The entered Width is not a number ");
  // let w = prompt("Enter Width ");
}
  else  {
    // let w = prompt("Enter Width ");
    console.log("nice one bro ")
  }

function calculateRectangleArea(width, height) {
  const a = width * height;
  return a;
  }
  
  
  
  let width = prompt("Enter Width");
  let height = prompt("Enter height");
  
  var area = calculateRectangleArea(width, height);
  console.log("The Area is "+ area);
  Number.isNaN(area);
  
  console.log(Number.isNaN);
  
