"use strict"

class Person {
  static counter = 0;
  constructor(name, age, sex, marriage) {
    this.name = name,
      this.age = age,
      this.sex = sex,
      this.marriage = marriage
    Person.counter += 1;
  }
  get adulthood() {
    if (this.age < 21) {
      return `Продажа алкогольной и никотиносодержащей продукции лицам младще 21 строго воспрещена! Вам осталось: ${21 - this.age} years.`;
    }
    return `Вы можете употреблять живую смерть уже как ${this.age - 21} years`;
  }
  personInfo() {
    console.log(`This is ${this.name}, ${this.age} years old.`);
  }
  getMarriage() {
    if (this.marriage === false) {
      console.log(`Поздравляю, ${this.name} у вас еще все впереди!`);
    }
    console.log(`${this.name}, но к сожалению выбор нового партнера для вас не доступен.`);
  }
}

let Jhon = new Person('Jhon', 21, 'male', false);
let Mary = new Person('Mary', 19, 'female', true);
Jhon.personInfo();
Mary.getMarriage();
console.log(Jhon.adulthood);
console.log(Mary.adulthood);
