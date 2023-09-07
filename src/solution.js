// Calculate the area of a rectangle
function areaofrect(lng,wdt){
  let a;
  if (isNaN(lng) || isNaN(wdt)){
    return "error";
    
  }
  else{
     a = lng*wdt;
    
  }
  return a;
}

// Calculate and display the perimiter of the rectangle.

function rectpermtr(lng, wdt){
  let b;
  if (isNaN(lng) || isNaN(wdt)){
    return "error";
    
  }
  else{
    b = 2 * (lng + wdt);
    
    
  }
  return b;
}
 
// Calculate and display the length of the diagonal


function diagnlngth(lng,wdt){
  let x,y,z;
  if (isNaN(lng) || isNaN(wdt)){
    return "error";
    
  }
  else{
  x = Math.pow(lng,2);
  y = Math.pow(wdt,2);
  z = Math.sqrt(x + y);
  }
  return z;
}
 
 
let lng =10;
let wdt = 15;

console.log(
  "Area:", areaofrect(lng, wdt),
  "Perimeter:", rectpermtr(lng, wdt),
  "Diagonal Length:", diagnlngth(lng, wdt)
  );