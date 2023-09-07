const prompt=require("prompt-sync")({sigint:true});
function Solving(a, b)
{
  if (isNaN(a) || isNaN(b)) 
  {
   
  } 
  else 
  {
    const z = a * b;
    return z; 
  }
}
function Diagonal(a, b)
{
  if (isNaN(a) || isNaN(b)) 
  {
    
    
  } 
  else 
  {
    var d = Math.sqrt(a**2 + b**2);
    return d;
  }
}
function Perimeter(a,b)
{
  if (isNaN(a) || isNaN(b)) 
  {
  } 
  else 
  {
    const p = (b * 2) + (a * 2);
    return p;
  }
}
function DisplayError(a,b)
{
  if (isNaN(a) || isNaN(b)) 
  {
    console.log("Error make sure the variables is only a number " + "'" + a + "'" +"  and  " + "'" + b + "'"+ "  .");
    process.exit(1);
  } 
  else 
  {
    console.log("Good Job!");
  }
}
let a, b;
a = prompt("Width of the rectangle: ");
b = prompt("Height of the rectangle: ");

var Solvings = Solving(a,b);
var Diagonals = Diagonal(a,b);
var Perimeters = Perimeter(a,b);
var DisplayErrors = DisplayError(a,b);

console.log("Width Registered:" +  a );
console.log("Height Registered:" +  b );
console.log("Diagonal Measurement of the Rectangle : " + Math.ceil(Diagonals) + ".");
console.log("Perimeter of the rectangle: " + Perimeters + ".");
console.log("Area of rectangle: " + Solvings + ".");

