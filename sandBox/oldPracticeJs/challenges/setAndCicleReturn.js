"use strict"

// Реализовываю функцю вывода центральных символов строки
function getMiddle(s) {
  return s.length % 2 ? s[Math.floor(s.length / 2)] : s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)];
  // return s.slice((s.length - 1) / 2, s.length / 2 + 1); // Возвращает новый массив с индекса X по индекс Y
}

console.log(getMiddle("testing"));

// Функция повторения каждого элемента в строке
function accum(s) {
  return s.split('').map((item, index) => {
    return item.toUpperCase() + item.toLowerCase().repeat(index);
  }).join('-');
}

console.log(accum("ZpglnRxqenU"));

// Функция проверки квадратного корня у числа
function isSquare(n) {
  return n >= 0 ? !Math.sqrt(n).toString().split('').includes('.') : false;
  // return Math.sqrt(n) % 1 === 0; - ??
}

console.log(isSquare(0));

// Фильтр на тип данных
function filter_list(l) {
  return l.filter(i => typeof i == "number");
}

console.log(filter_list([1, 2, 'a', 'b']));

// МОЙ БЛЯДСКИЙ МОЗГ ОЧЕНЬ ДАВНО ТАК НЕ КИПЕЛ!!!
function isIsogram00(str) {
  str = str.toLowerCase().split('');
  for (let i = 0; str.length > i; i++) {
    if (str.includes(str[i], i + 1)) {
      return false;
    }
  }
  return true;
}

//Первоначальный вариант~
function isIsogram01(str) {
  str = str.toLowerCase().split('');
  for (let i = 0; str.length > i; i++) {
    for (let j = i + 1; str.length > j; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// ЧТО ЭТО БЛЯТЬ И КАК ОНО РАБОТАЕТ???
function isIsogram02(str) {
  return new Set(str.toUpperCase()).size == str.length; // ЭТО БЛЯТЬ ГЕНИАЛЬНО!!!
}

console.log(isIsogram01("pos"));
