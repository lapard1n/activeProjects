"use strict"

const h1 = document.getElementById('hello');

const h2 = document.getElementsByTagName("h2")[0];
const h3 = document.getElementsByClassName("h3-class")[0];
// Обращенеи по имени тега и класс происходит как обращение к массиву с конкретным id;
const h4 = document.querySelector("h4"); // Буквально запрос по любому возможному селектору
const h4Class = document.querySelector(".h4-class");
const h4Id = document.querySelector("#h4Yo");

function qwerty(name) {
  name.textContent = "Марат, ПРИКИНЬ ЧЕ? Я? МОГУ?"
  name.style.color = "red";
  name.style.textAlign = "center";
}

qwerty(h1);
qwerty(h2);
qwerty(h3);
qwerty(h4);
qwerty(h4Class);
qwerty(h4Id);

h1.onclick = () => {
  if (h1.style.color === "red") {
    h1.style.color = "white"
    h1.style.backgroundColor = "black";
  } else {
    h1.style.color = "red"
    h1.style.backgroundColor = "#FFF";
  }
}

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
