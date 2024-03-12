"use strict";

let n = 10;

nextPrime: //! это называет метка и она является нежелательной практикой, из-за совей неинтуинтивности
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(i); // простое число
}

console.log(`\n`);

let cars = ["бэха", "тэха", "баха"];

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  console.log(car);
}

console.log(`\n`); // альтернатива симу решению чуть ниже, друг мой потерянный =>

for (let car in cars) {
  console.log(car);
}

console.log(`\n`); // альтернатива симу решению чуть ниже, друг мой потерянный =>

for (let car of cars) {
  console.log(car);
}
