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

test();
console.log('');
console.log('\n 1');

let second = new Promise((resolve, reject) => {
  console.log('2');
  let secondTwo = '22';
  resolve(secondTwo);
})
second.then((number) => {
  console.log(number);
})

console.log('3');
