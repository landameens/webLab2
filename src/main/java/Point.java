import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Point {
    private final double x;
    private final double y;
    private final double r;
    private final String result;
    DateFormat dateFormat;
    Date date;


    public Point(double x, double y, double r, String result) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        dateFormat = new SimpleDateFormat("HH:mm dd/MM/yy");
        date = new Date();
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
                "<td>" + dateFormat.format(date) + "</td>" +
                "</tr>";
    }
}
