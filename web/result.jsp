<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 20.09.2020
  Time: 16:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Lab_2</title>
    <link rel="shortcut icon" href="./images/15.ico" type="image/x-icon">
    <link rel="stylesheet" href="example/node_modules/normalize.css/normalize.css">
    <link rel="stylesheet" href="styles/style.css">
    <title>Лабораторная работа №2</title>
</head>
<body>
<header>
    <h1 class="title">Лабораторная работа №2</h1>
    <h3>Выполнила Кириллова Надежда<br>Группа P3213, вариант №2301</h3>
</header>

<main>
    <table class="result-table">
        <tr>
            <th>X</th>
            <td><%= request.getParameter("x").replace(".", ",") %>
            </td>
        </tr>
        <tr>
            <th>Y</th>
            <td><%= request.getParameter("y").replace(".", ",") %>
            </td>
        </tr>
        <tr>
            <th>R</th>
            <td><%= request.getParameter("r").replace(".", ",") %>
            </td>
        </tr>
        <tr>
            <th>Результат</th>
            <td class="result"><%= response.getHeader("result") %>
            </td>
        </tr>
        <tr>
            <th>Текущее время</th>
            <%
                java.text.DateFormat df = new java.text.SimpleDateFormat("HH:mm:ss dd/MM/yy");
            %>
            <td><%= df.format(new java.util.Date()) %>
            </td>
        </tr>
    </table>

    <a class="back-button" href="${pageContext.request.contextPath}/index.jsp">Вернуться на главную
        страницу</a>
    <table>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Результат</th>
            <th>Время запроса</th>
        </tr>
        <%= application.getAttribute("arrayPoints") %>
    </table>


    <div class="link-to-page">
        <a href="https://github.com/landameens/webLab2" target="_blank"><img src="images/dbl.jpg"
                                                                             alt="me"></a>
        <a href="https://docs.google.com/document/d/1Yb9C2Pw1iVHMJi087HbvO4OluI3AV1B9yrg9CD2zpfA/edit?usp=sharing"
           target="_blank"><img src="images/document.png" alt="report"></a>
    </div>
</main>

<footer>
    <a href="https://ifmo.ru/ru"><img alt="Логотип ИТМО" title="Перейти на сайт университета"
                                      src="images/itmo-logo.png"></a>
</footer>
</body>
</html>