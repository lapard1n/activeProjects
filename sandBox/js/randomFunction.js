"use strict"

function getRandomIntInclusive(min, max) { // создаю функцую для определения рандомного числа в диапозоне, которое: "Возвращаемое значение не менее (и может быть равно) min и не более (и не равно) max."
  min = Math.ceil(min); // Округляет аргумент до ближайшего большего целого.
  max = Math.floor(max); // Округляет аргумент до ближайшего меньшего целого.
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются в обе стороны.
}

console.log(getRandomIntInclusive(1, 6), getRandomIntInclusive(1, 6)); // Игральная кость.
