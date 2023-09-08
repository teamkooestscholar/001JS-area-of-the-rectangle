function calculateRectangleArea(w, h) 
{
    if (isNaN(w) || isNaN(h))
    {
        console.log("Error: Please enter valid numbers for width and height.");
        return;
    }

    const a = w * h;
    const p = 2 * (w + h);
    const d = Math.sqrt(w**2 + h**2);

    console.log("Area of the rectangle: " + a);
    console.log("Perimeter of the rectangle: " + p);
    console.log("Length of the diagonal: " + d);
}
