import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/check")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        double x = Double.parseDouble(req.getParameter("x"));
        double y = Double.parseDouble(req.getParameter("y"));
        int r = Integer.parseInt(req.getParameter("r"));
        String key = req.getParameter("key");

        //checkData(x, y, r);
        HttpSession session = req.getSession();

        resp.setContentType("text/html;charset=UTF-8");

        req.getServletContext().getRequestDispatcher("/result.jsp").forward(req, resp);

    }

    private void checkData(double x, double y, int r) {

    }


}
