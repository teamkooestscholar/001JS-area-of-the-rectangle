public class RectangleArea {
    public static double calculateRectangleArea(double length, double width) {
        if (length < 0 || width < 0) {
            throw new IllegalArgumentException("Length and width must be non-negative.");
        }

        double area = length * width;
        return area;
    }

    public static void main(String[] args) {
        double length = 5.0; // Replace with the length of the rectangle
        double width = 3.0;  // Replace with the width of the rectangle

        try {
            double area = calculateRectangleArea(length, width);
            System.out.println("The area of the rectangle is: " + area);
        } catch (IllegalArgumentException e) {
            System.err.println(e.getMessage());
        }
    }
}
