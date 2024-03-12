"use strict"

// СТРОКУ В МАССИВ, КАЖДЫЙ ЭЛЕМЕНТ МАССИВА ПРИВОЖУ К ЧИСЛУ И СОРТИРУЮ ПРОПИСАВ УСЛОВИЯ СОРТИРОВКИ ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР
function highAndLow00(numbers) {
  numbers = numbers.split(' ').map(i => parseInt(i)).sort((a, b) => {
    return a > b ? 1 : a == b ? 0 : -1; // РАСШИРЕННЫЙ ТЕРНЫЙ ОПЕРАТОР*
  })
  return numbers.length > 1 ? numbers = numbers.pop() + ' ' + numbers.shift() : numbers + ' ' + numbers;
}

// ЗДЕСЬ Я ИСПОЛЬЗУЮ МАТЕМАТИЧЕСКИЙ ГЛОБАЛЬНЫЙ "ОБЩИЙ" ОБЪЕКТ, ДЛЯ ОПРЕДЕЛЕНИЯ МАКСИМАЛЬНЫХ И МИНИМАЛЬНЫХ ЧИСЕЛ
function highAndLow01(numbers) {
  return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;
}

console.log(highAndLow01("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// ПЕРЕСТАНОВКА ЦИФР В ЧИСЛЕ
function descendingOrder(n) {
  return Number(String(n).split('').sort().reverse().join('')); // (a, b) => { return a > b ? 1 : a == b ? 0 : -1 }
}

console.log(descendingOrder(145263));
