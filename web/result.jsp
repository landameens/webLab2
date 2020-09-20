<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 20.09.2020
  Time: 16:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
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
    <canvas id="canvas" width="350" height="350"></canvas>

    <table>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Результат</th>
            <th>Текущее время</th>
            <th>Время выполнения</th>
        </tr>
        <tr>
            <td></td>
        </tr>
    </table>


    <a href="https://github.com/landameens/webLab2" class="link-to-page" target="_blank"><img src="images/dbl.jpg"
                                                                                              alt="me"></a>
</main>

<footer>
    <a href="https://ifmo.ru/ru"><img alt="Логотип ИТМО" title="Перейти на сайт университета"
                                      src="images/itmo-logo.png"></a>
</footer>

<script>
    <%@include file="example/node_modules/jquery/dist/jquery.min.js" %>
</script>
<script>
    <%@include file="scripts/canvas.js" %>
</script>
</body>
</html>
