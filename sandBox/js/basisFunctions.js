"use strict"

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
  alert('Доступ получен');
} else {
  alert('Доступ закрыт');
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("Вам показывается кино");
}

showMovie(age);

function checkAge01(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge02(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge03(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

function pow01(a, b) {
  return a ** b;
}

function pow02(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

// декларируемая функция
function ask(question, yes, no) { // yes/no - callback функиции - функция обратного вызова
  if (confirm(question)) yes()
  else no();
}

// функция выражение
let no = function () {
  alert("Вы отменили выполнение.");
};

// стрелочная функция
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  no,
);

// Не забывай про уровень "вложенности" переменных. Нельзя обратиться из глобального пространства за переменной внутри функции, но вот внутри функции, можно обращаться к переменным снаружи > объявленным выше по уровню и т.п.
let puk = 2002;
function calculateAge(yaer) {
  return 2021 - yaer;
}
const myAge = calculateAge(puk);
console.log(myAge);
console.log(calculateAge(1998));

// Использование функции внутри функции
function infoAbout(name, year) {
  const age = calculateAge(year);
  (age > 0) ? console.log(`Info about: ${name}, ${age}`) : console.log("Ошибочка, так-то");
}

infoAbout("Marat", 2022);

const strelka = (...all) => { // Возможности ECMAScript 6 "..." - аргумент передачи массива в функицю
  let res = 0;
  for (num of all) {
    res += num;
  }
  return res;
}

console.log(strelka(1, 2, 3, 4, 5, 6, 7));


