"use strict";

// ЗАДАЧА НАЙТИ ВСЕ ГЛАСНЫЕ В СТРОКЕ И ВЫДАТЬ ИХ КОЛИЧЕСТВО
const abc = 'aeiou';

// ПОПЫТКА НОМЕР 1 - КЛАССИЧЕСКАЯ
function test00(str) {
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      if (i == j) {
        x++;
      }
    }
  }
  return x;
};

// ПОПЫТКА НОМЕР 2 - С ИСПОЛЬЗОВАНИЕМ includes
function test01(str) {
  let count = 0;
  str.split('').map((item) => {
    if (abc.split('').includes(item)) {
      count++;
    }
    return item;
  });
  return count;
}

// МИНИФИЦИРОВАННАЯ ВЕРСИЯ, ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР
function test02(str) {
  let count = 0;
  str.split('').forEach(item => {
    abc.split('').includes(item) ? count++ : count += 0;
  });
  return count;
}

// САМОЕ ЛАКОНИЧЕНОЕ РЕШЕНИЕ, ГДЕ СЧЕТЧИК МЫ ПОЛУЧАЕМ БЛАГОДАРЯ ДЛИННЕ МАССИВА, КОТОРЫЙ ВЫХОДИТ ИЗ filter~
function test03(str) {
  return str.split('').filter(i => 'aeiouAEIOU'.includes(i)).length;
}

// УБИРАЮ ГЛАСНЫЕ ИЗ СТРОКИ
function disemvowel(str) {
  return str.split('').filter((i) => !"aeiouyAEIOUY".includes(i)).join('');
}

console.log(disemvowel("This website is for losers LOL!"));

// ИГРАЮСЬ С ТИПАМИ ДАННЫХ ИЗ ЧИСЛА > В СТРОКУ > СТРОКУ В МАССИВ > ПРОВОЖУ ВЫЧИСЛЕНИЯ > ПРЕОБРАЗОВЫВАЮ В ТРОКУ > И ЗАВЕРШАЮ ВОЗВРАЩЕНИЕМ ЧИСЛА~
function squareDigits(num) {
  return Number(num.toString().split('').map(i => i ** 2).join(''));
}

console.log(squareDigits(765));
