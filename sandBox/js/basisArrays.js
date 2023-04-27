"use strict";

let arrayBro = ["Саня", "Санчезе", "Санчес", "Санек", "Сасок", "Сашок", "Сашко", "Сашка", "Сашидзе - все лучшее для Грузинов"];
let arrayNew = new Array("Александр", "Алехандро", "Алекс", "Алексей?", "Лекс", "Лексус", "БМВ!");


arrayNew[7] = "Не саня, а шайтан машина, ежи!";

console.log(arrayBro[3] + " - " + arrayNew[7]);

if (arrayBro.length <= 10) {
  arrayBro[arrayBro.length] = "Сахаруня";
  console.log(arrayBro[9]);
} else {
  arrayBro[8] = "Сахаридзе";
  console.log(arrayBro[8]);
}

let newArray = [1, 2, 3];
console.log(newArray);

newArray.push(4); // Протолкнуть в конец
console.log(newArray);

console.log("\n");

newArray.unshift(0); // Добавить в начало
console.log(newArray);

console.log("\n");

console.log(newArray.shift()); // Выводит первый элемент и удаляет его*
console.log(newArray);

console.log("\n");

console.log(newArray.pop()); // Выводит последний элемент и удаляет его*
console.log(newArray);

console.log("\n"); // Пример использования:

let firstElement = newArray.shift();
let lastElement = newArray.pop();

console.log(firstElement);
console.log(lastElement);
console.log(newArray);

console.log("\n");

let secArray = [0, 1, "хуй"];
console.log(secArray.reverse());
console.log(secArray.indexOf("хуй")); // Вывод индекса элмента
let index = secArray.indexOf("хуй"); // Присвоение новой переменной индекса элемента
secArray[index] = 3; // Замена элемента по его индексу
console.log(secArray);

console.log("\n"); // Пример:

let text = "Привет, я саша и я блять хочу разъебать все это дерьмо...";
let textReverse = text.split("").reverse().join(""); // 1. Делаем из строки массив, где каждый элемент строки становится элемнтом массива, пробелы в том числе - split(""). 2. Переворачиваем массив и 3. объединяем его методом .join("") - где "" говорит что соединение должно происходить "без швов" - по умолчанию разделение идет через запятые.
console.log(textReverse);

console.log("\n");
