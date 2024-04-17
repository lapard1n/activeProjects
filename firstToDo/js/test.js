// УДАЛЕНИЕ ВНЕШНИХ ПРОБЕЛОВ В СТОКЕ:
const input = '   Hello, world!     ';
input.replace(/^\s+|\s+$/g, '')
input.trim()

// ПРОВЕРКА СТРОКИ НА ЗАПОЛНЕННОСТЬ:
function splitSpace00(str) {
  str = str.split(' ').join('');
  if (str) {
    console.log(true, 'long');
  } else {
    console.log(false, 'long');
  }
}
function splitSpace01(str) {
  str = str.split(' ').join('');
  return str ? console.log(str, true, 'short') : console.log(str, false, 'short');
}

// МЕТОДЫ УДАЛЕНИЯ ПРОБЕЛОВ В МУЛЬТИСТРОКЕ:
let someText = `

          <span class="todo-app__counter-value">tasks: 0</span>
          <span class="todo-app__counter-value">checked: 0</span>

          `;
console.log(someText.replace(/^\s+/gim, ''));
console.log(someText.replace(/^\s+|\s+$/gim, ''));
console.log(someText.split('\n').map((el, i) => el.match(/\S+/g) ? el.trim() : el = '').join('\n').trim());

// ФУНКЦИЯ ПЕРЕВОРОТА СЛОВ ОТ 5 СИМВОЛОВ В СТРКОЕ:
function spinWords00(s) {
  return s.split(' ').map(w => w.length > 4 ? w.split('').reverse().join('') : w).join(' ');
}
function spinWords01(string) {
  return string.replace(/\w{5,}/gim, (el) => { return el.split('').reverse().join('') })
}

// ФУНКЦИЯ ПРИМЕРА СВИТЧА:
function likes00(names) {
  let newStr = '';
  if (names.length === 0) {
    return 'no one likes this';
  }
  if (names.length === 1) {
    newStr = names[0] + ' likes this';
  }
  if (names.length === 2) {
    newStr = names.join(' and ') + ' like this';
  }
  if (names.length === 3) {
    newStr = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  }
  if (names.length > 3) {
    newStr = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
  return newStr;
}
function likes01(names) {
  switch (names.length) {
    case 0: return `no one likes this`;
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`;
  }
}
