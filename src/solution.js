// Function to calculate the area of a rectangle
function getting_area(l,w){
  let a;
  if (isNaN(l) || isNaN(w)){
    return "error";
    
  }
  else{
     a = l*w;
    
  }
  return a;
}

function getting_perimeter(l, w){
  let b;
  if (isNaN(l) || isNaN(w)){
    return "error";
    
  }
  else{
    b = 2 * (l + w);
    
    
  }
  return b;
}
 


function getting_lengdig(l,w){
  let c,d,e;
  if (isNaN(l) || isNaN(w)){
    return "error";
    
  }
  else{
  c = Math.pow(l,2);
  d = Math.pow(w,2);
  e = Math.sqrt(c + d);
 
    
  }
  return e;
}
 
 
let l =5;
let w = 5;

console.log(getting_area(l,w),(" "),getting_perimeter(l,w),(" "),getting_lengdig(l,w));

