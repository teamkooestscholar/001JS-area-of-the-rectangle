
const prompt=require("prompt-sync")({sigint:true});
function Solvings(a, b)
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
function Diagonals(a, b)
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
function Perimeters(a,b)
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
    console.log("Error make sure the variables is only a number  " + "'" + a + "'" +"  and  " + "'" + b + "'"+ "  .");
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

var Solving = Solvings(a,b);
var Diagonal = Diagonals(a,b);
var Perimeter = Perimeters(a,b);
var DisplayErrors = DisplayError(a,b);

console.log("Width Registered:" + a );
console.log("Height Registered:" + b );
console.log("The Diagonal Measurement of the Rectangle is: " + Math.ceil(Diagonal) + ".");
console.log("The Perimeter of the Rectangle Is: " + Perimeter + ".");
console.log("The Area of the Rectangle Is: " + Solving + ".");

