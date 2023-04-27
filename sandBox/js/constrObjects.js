"use strict";

function UserInfo(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
  this.helloUser = function () {
    let about = (`Hello, ${this.name}, do you like ${this.hobbies[1]}?`);
    return about;
  }
}

let sasha = new UserInfo('Sasha', 21, ["Games", "Books", "Music"]);
let marat = new UserInfo("Marat", 21, ['Drochka', 'Narkota', 'Sasha'])

let user01 = document.querySelector(".user01");
user01.textContent = sasha.helloUser();

let user02 = document.querySelector(".user02");
user02.textContent = marat.helloUser();
