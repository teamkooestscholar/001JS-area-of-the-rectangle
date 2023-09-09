// Use HTML Live Server for User Input
function calculateRectangleArea(w, h) {
    const a = w * h;
    return a;
}

function calculateRectanglePerimeter(w, h) {
    const p = 2 * (w + h);
    return p;
}

function calculateRectangleDiagonal(w, h) {
    const d = Math.sqrt(w * w + h * h);
    return d;
}

function calculate() {
    const w = parseFloat(document.getElementById("w").value);
    const h = parseFloat(document.getElementById("h").value);
    const calculationType = document.getElementById("calculationType").value;
    let result = "";

    if (isNaN(w) || isNaN(h)) {
        result = "Please enter valid numeric values for w and h.";
    } else {
        switch (calculationType) {
            case "area":
                result = "The area of this rectangle is: " + calculateRectangleArea(w, h);
                break;
            case "perimeter":
                result = "The perimeter of this rectangle is: " + calculateRectanglePerimeter(w, h);
                break;
            case "diagonal":
                result = "The diagonal of this rectangle is: " + calculateRectangleDiagonal(w, h);
                break;
            default:
                result = "Invalid calculation type.";
        }
    }

    document.getElementById("result").textContent = result;
}