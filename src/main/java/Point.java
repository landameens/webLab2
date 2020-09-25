import java.util.Date;

public class Point {
    private double x;
    private double y;
    private double r;
    private final String result;

    public Point(double x, double y, double r, String result) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getResult() {
        return result;
    }

    @Override
    public String toString() {
        return "<tr>" +
                "<td>" + getX() + "</td>" +
                "<td>" + getY() + "</td>" +
                "<td>" + getR() + "</td>" +
                "<td>" + getResult() + "</td>" +
                "<td>" + new Date().toString() + "</td>" +
                "</tr>";
    }
}
