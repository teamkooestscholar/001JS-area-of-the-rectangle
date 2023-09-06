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


 if (isNaN(h)){
  console.log("The entered Height is not a number")
  // let h = prompt("Enter height ");
}
  else {
    // let h = prompt("Enter height ");
    console.log("Nice one bro")
  }


  
  var area = calculateRectangleArea(w, h);
  console.log("The Area is "+ area);


  var area = CalculatePerimeter(w, h);
  console.log("The Perimeter of the triangle is "+ area);


  var area = CalculateDiagonal(w, h);
  console.log("The Diagonal of the rectangle is "+ area);



  
  // console.log(Number.isNaN);
  