function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next(), '\n');

let peperator = generateSequence();

console.log(peperator);
console.log(peperator.next());
console.log(peperator.next());
console.log(peperator.next());
console.log(peperator.next());
console.log(peperator.next());

console.log('\n');

let pange = { // КЛАССИЧЕСКИЙ НЕ ИТЕРИРУЕМЫЙ ОБЪЕКТ
  from: 1,
  to: 5
};

pange[Symbol.iterator] = function () { // СОЗДАНИЕ ИТЕРАТОРА, ЗА СЧЕТ СПЕЦ-СИМВОЛА
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

for (let num of pange) {
  console.log(num);
}

console.log('\n');

let range = { // КЛАССИЧЕСКИЙ НЕ ИТЕРИРУЕМЫЙ ОБЪЕКТ
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // создание итератора - итерируемого объекта
    for (let value = this.from; value <= this.to; value++) { // создание генератора, для итерации объекта
      yield value;
    }
  }
};

for (key of range) {
  console.log(key);
}

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

console.log(arrayLike);

let papa = Array.from(arrayLike);

console.log(papa);

console.log('\n');

// СРАВНЕНИЕ РАБОТЫ ПРОСТОЙ ФУНКЦИИ И ФУНКЦИИ ГЕНЕРАТОРА
function iterFunc(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
  return num;
}

console.log(iterFunc(4));


function* genFunc(num) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}

const gen = genFunc(4);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
