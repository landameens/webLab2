import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "AreaCheckServlet", urlPatterns = "/check")
public class AreaCheckServlet extends HttpServlet {
    List<String> points = new ArrayList<>();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");

        ServletContext context = getServletContext();

        double x = Double.parseDouble(req.getParameter("x"));
        double y = Double.parseDouble(req.getParameter("y"));
        double r = Double.parseDouble(req.getParameter("r"));

        String result = checkData(x, y, r);
        resp.addHeader("result", result);

        Point point = new Point(x, y, r, result);
        points.add(0, point.toString());

        context.setAttribute("arrayPoints", points);

        req.getServletContext().getRequestDispatcher("/result.jsp").forward(req, resp);

    }

    private String checkData(double x, double y, double r) {
        final String positiveResult = "Попадает в область";
        final String negativeResult = "Не попадает в область";
        if (x >= 0 && y >= 0 && y <= (r / 2) - x) {
            return positiveResult;
        }
        if (x >= 0 && y <= 0 && ((x * x + y * y) <= (r / 2) * (r / 2))) {
            return positiveResult;
        }
        if (x <= 0 && y <= 0 && x >= -r && y >= -r) {
            return positiveResult;
        }
        return negativeResult;
    }
}