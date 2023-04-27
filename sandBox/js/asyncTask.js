"use strict"

//ЗАДАЧКА НА ВЫВОД ЧИСЕЛ, В КАКОМ ПОРЯДКЕ ОНИ ВЫЙДУТ
function test() {
  console.log('1');

  setTimeout(() => {
    console.log('2');
  }, 0);

  function count() {
    console.log('3');
  }

  const res = new Promise((res) => {
    console.log('4');

    res('5');
  })
  count();
  console.log(res);
}

console.clear();
test();

console.log('first');

let second = new Promise((resolve, reject) => {
  console.log('second');
  let secondTwo = 'secondTwo';
  resolve(secondTwo);
})
second.then((number) => {
  console.log(number);
})

console.log('fird');
