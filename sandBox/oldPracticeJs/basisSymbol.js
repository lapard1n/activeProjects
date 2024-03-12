"use strict"

let id = Symbol('Шава');

console.log(id);

const obj = {
  'name': "Вася",
  [id]: 'Треш'
}

console.log(obj.name, obj[id]);

obj[id] = 'Просто'

console.log(obj.name, obj[id]);

let ij = Symbol('id');

function name() {
  let id = Symbol('"Это же"');
  obj[id] = 'Кекс';
}

name();

console.log(obj);
