// 001 Function to calculate the area of a rectangle
function calcRectArea(l,w) 
{
  let a;
  if (isNaN(l) || isNaN(w)){
    return "Error: An unexpected error has occurred." ;
    
  }
  else{
     a = l*w;
  }
  return a;
}

function calcPerimeter(l, w)
{
  let p;
  if (isNaN(l) || isNaN(w))
  {
    return "Error: An unexpected error has occurred." ;
    
  }
  else{
   p = 2 * (l + w);

      }
  return p;
}
 
function calcLengthDiagonal(l,w){
  let c,d,e;
  if (isNaN(l) || isNaN(w)){
    return "Error: An unexpected error has occurred." ;
    
  }
  else{
  c = Math.pow(l,2);
  d = Math.pow(w,2);
  e = Math.sqrt(c + d);
      }
  return e;
}

let l =10;
let w = 15;


console.log(calcRectArea(l,w),(" "),calcPerimeter(l,w),(" "),calcLengthDiagonal(l,w)); 



