"use strict";

const RIGHT_AGE = 18;
let userAge = 14,
  title = "МАРАТ ГДЕ ДЕНЬГИ?";

if (userAge > RIGHT_AGE) {
  alert("Hello, bruder!");
} else if (userAge < RIGHT_AGE) {
  var menu = prompt(title, []);
  alert(menu);
} else {
  var question = confirm("ТЕ ЧЕ 18?");
  if (question == false) {
    alert("ТЫ ДОЛБАЕБ!!!");
  } else {
    alert("НУ ТАК, ДЯДЯ, ПРОХОДИ, ПРИСАЖИВАЙСЯ!");
  }
}

let value = prompt('Введите число:', '');
alert(value = (value > 0 ? 1 : value < 0 ? -1 : 0));

let browser = prompt("Enter the name your browser", []);
if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
  || browser == 'Firefox'
  || browser == 'Safari'
  || browser == 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case (0):
    alert('Вы ввели число 0');
    break;

  case (1):
    alert('Вы ввели число 1');
    break;

  case (2):
  case (3):
    alert('Вы ввели число 2, а может и 3');
    break;
}
