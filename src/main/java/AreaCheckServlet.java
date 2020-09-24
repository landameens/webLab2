import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "AreaCheckServlet", urlPatterns = "/check")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");

        double x = Double.parseDouble(req.getParameter("x"));
        double y = Double.parseDouble(req.getParameter("y"));
        double r = Double.parseDouble(req.getParameter("r"));
        String key = req.getParameter("key");

        checkData(x, y, r);


        req.getServletContext().getRequestDispatcher("/result.jsp").forward(req, resp);

    }

    private boolean checkData(double x, double y, double r) {
        if (x >= 0 && y >= 0 && y <= (r / 2) - x) {
            return true;
        }
        if (x >= 0 && y <= 0 && ((x * x + y * y) <= (r / 2) * (r / 2))) {
            return true;
        }
        if (x <= 0 && y <= 0 && x >= -r && y >= -r) {
            return true;
        }
        return false;
    }
}