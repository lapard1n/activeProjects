"use strict"

let user = {
  name: "John",
  age: 30
};

user.isAdmin = true;
delete user.age; // Оператор удаления свойств объекта;

for (let key in user) { // цикл перебора объектов
  console.log(key);
}

console.log("\n"); // Копируем объект, создавая новый пустой:

let clone = {};

for (let key in user) {
  clone[key] = user[key];
  console.log(key);
}

console.log("\n"); // То же самое, только через глобальный объект:

let zero = {};
Object.assign(zero, user);

let zero2 = Object.assign({}, user); // Или так, НЕОЖИДАННО, НЕ ПРАВДА ЛИ!?

console.log(zero, zero2);

// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// console.log(user[key]);

console.log("\n");

function makeUser(name, age) {
  return {
    name, // Ровнохуйственно!
    age: age, // Одножопно!
  };
}

let kek = makeUser("Mata", 30);
console.log(kek.name, kek.age);

console.log("\n");

let obj = {
  test: undefined
};

console.log(obj.test); //  выведет undefined, значит свойство не существует?
console.log("test" in obj); // true, свойство существует!

console.log("\n"); // АХТУНГ! ТУТ СЛОЖНАЯ ФУНКЦИЯ, а ти пока глюпий, но смотри:

let obj01 = {
  age: 28,
  name: "Pablo",
  work: {
    exp: 2,
    first: "Code",
    prework: {
      second: "Design",
      exp: 1,
    },
  },
}

function getObj01(i, k) { // Рекурсивная функция - функция которая вызывает сама себя,позволяя осуществлять ГЛУБОКОЕ клонирование объекта!
  for (let key in k) { // Создаем цикл перебора объекта по его св-ам.
    if (typeof k[key] !== "object") { // Делаем проверку свойств, не являются ли они объектом?
      i[key] = k[key]; // Передаем данные свойств в копию.
    } else {
      i[key] = {}; // Иначе, мы создаем в качестве нового свойства объект.
      return getObj01(i[key], k[key]); // Который отпряем в качестве значения самовызываемой функции!
    }
  }
}

let obj02 = {};
getObj01(obj02, obj01)

console.log(obj01);
console.log(obj02);

console.log("\n");

const person = new Object();
// or
const pepersone = {
  firstName: "AMONGUS",
  lastName: "CRINGE",
  dateOfBirth: 2005,
  passport: true,
  hobbies: ["games", "movies"],
  greet: function () {
    console.log("greet");
  }
}

pepersone.hasWife = "ТНН BITCH"; // Добавляю новое значение в объект
console.log(pepersone.hasWife);

console.log("\n") // НУ А ТЕПЕРЬ! НЕ ЖДАЛИ?? да. обращение к объекту :D

console.log(pepersone.hobbies[0]);
pepersone.greet();

console.log("\n") // ИСЧО ПРИКОЛЮХИ ;)

console.log(pepersone['lastName']); // Вывод как из массива
let key = "firstName";
console.log(pepersone[key]);

const pipirson = {
  name: "Sanya",
  age: 21,
  married: false,
  hobbies: ["anime", "games", "books"],
  welcome(name) {
    return `Hi, ${name}, I'm Sanya!`
  },
  info() {
    console.info(`${this.name} is broken.`);
  }
}

pipirson.info();

console.log("\n");

for (let i in pipirson) { // Цикл с in создан для перебора объектов по ключу каждого св-ва и метода
  if (pipirson.hasOwnProperty(i)) { // Проверка на то чтобы при итерации цикл не проходился по прототипу объекта
    console.log("key: ", i, " value: ", pipirson[i]); // Работа с выводом элементов объекта, где i равно ключу, а person[i] значению
  }
}

console.log("\n"); // А теперь современная версия без перечисления свойств и строчек прототипов:

Object.keys(pipirson).forEach(key => { // Возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in
  console.log("key: ", key); // Метод перебора массива
  console.log("value: ", pipirson[key])
})
