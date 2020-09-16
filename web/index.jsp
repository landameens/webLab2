<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 05.09.2020
  Time: 14:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Lab_2</title>
    <link rel="shortcut icon" href="./images/15.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/style.css">
    <title>Лабораторная работа №2</title>
  </head>
  <body>

  <header>
    <h1 class="title">Лабораторная работа №2</h1>
    <h3>Выполнила Кириллова Надежда<br>Группа P3213, вариант №2301</h3>
  </header>

  <main>
    <div class="flex-container">
      <form>
        <label for="x-input">Введите X</label>
        <input type="text" id="x-input" class="form_input" placeholder="значение из промежутка (-3, 3)">

        <div class="y-input">
          <input name="Y-button" type="button" value="-4">
          <input name="Y-button" type="button" value="-3">
          <input name="Y-button" type="button" value="-2">
          <input name="Y-button" type="button" value="-1">
          <input name="Y-button" type="button" value="0">
          <input name="Y-button" type="button" value="1">
          <input name="Y-button" type="button" value="2">
          <input name="Y-button" type="button" value="3">
          <input name="Y-button" type="button" value="4">
        </div>

        <div class="r-input">
          <input name="R-button" type="button" value="1">
          <input name="R-button" type="button" value="2">
          <input name="R-button" type="button" value="3">
          <input name="R-button" type="button" value="4">
          <input name="R-button" type="button" value="5">
        </div>

        <button class="form_button">Узнать ответ</button>
      </form>

      <canvas id="canvas" width="350" height="350"></canvas>

    </div>

    <a href="https://github.com/landameens/webLab2" class="link-to-page" target="_blank"><img src="images/dbl.jpg" alt="me"></a>
  </main>

  <footer>
    <a href="https://ifmo.ru/ru"><img alt="Логотип ИТМО" title="Перейти на сайт университета" src="images/itmo-logo.png"></a>
  </footer>

  <script><%@include file="scripts/jquery.min.js"%></script>
  <script><%@include file="scripts/canvas.js"%></script>
  <script><%@include file="scripts/main.js"%></script>
  </body>
</html>
