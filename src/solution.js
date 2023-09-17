//Change Perms
const prompt=require("prompt-sync")({sigint:true});

//Area of the Rectangle.
function solbing(w, h)
{
  if (isNaN(w) || isNaN(h)) 
  {
    console.log(" ");
    //process.exit(2);
  } 
  else 
  {
    const a = w * h;
    return a; 
  }
}

//Diagonal Of Rectangle
function diagons(w, h)
{
  if (isNaN(w) || isNaN(h)) 
  {
    console.log(" ");
    //process.exit(3);
  } 
  else 
  {
    var d = Math.sqrt(w**2 + h**2);
    return d;
  }
}

//Perimeter Of Rectangle
function perimeter(w,h)
{
  if (isNaN(w) || isNaN(h)) 
  {
    console.log(" ");
    //process.exit(1);
  } 
  else 
  {
    const p = (h * 2) + (w * 2);
    return p;
  }
}

//Function that Display the error where in the variable registered are not valid through isNan(x).
function displayError(w,h)
{
  if (isNaN(w) || isNaN(h)) 
  {
    console.log("ERROR: Variable Invalid but It's Okay! Just check Width & Height Values " + "'" + w + "'" +"  and  " + "'" + h + "'"+ "  .");
    console.log("NOTE: MAKE SURE VARIABLES ARE NUMBERS!");
    process.exit(1);
  }
  else 
  {
    console.log("!!~Values Registered Succefully~!!");
    console.log(" ");
    console.log("Good Job It Worked!");
  }
}



//Registered Variables
let w, h;
w = prompt("What Width You Want: ");
h = prompt("What Height You Want: ");

//Callout Variable for Output
var solby = solbing(w,h);
var diagy = diagons(w,h);
var perip = perimeter(w,h);
//var NumRorW = NumRorDU(w);

//Prompt Output For Variables and Functions
console.log(" ");
console.log("Width Registered:" + "[" + w + "]");
console.log("Height Registered:" + "[" + h + "]");
console.log(" ");
console.log("The Area of the Rectangle Is: " + solby + ".");
console.log("The Diagonal Measurement of the Rectangle is: " + Math.ceil(diagy) + ".");
console.log("The Perimeter of the Rectangle Is: " + perip + ".");