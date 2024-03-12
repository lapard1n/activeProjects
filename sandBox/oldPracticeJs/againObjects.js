// ОБЩЕПРИНЯТОЕ НАИМЕНОВАНИЕ ПЕРЕМЕННЫХ
var PascalCase = 'Типы и классы';
let camelCase = 'Все остальное';
const DB_PASSWROD = 'qwerty123';

// ОПЕРАТОР УДАЛЕНИЯ
const locationPerson = {
  house: 'house 3, building 2',
  city: 'Saint-P',
}
console.log(locationPerson.house, '\n');
delete locationPerson.house;
console.log(locationPerson.house, '\n');

// СОЗДАНИЯ СВОЙСТВА ОБЪЕКТА ЧЕРЕЗ ПЕРЕМЕННУЮ
locationPerson.house = 'house 3';
console.log(locationPerson.house, '\n');
const locationPersonBuilding = 'building';
locationPerson[locationPersonBuilding] = 'building 2';
console.log(locationPerson.building, '\n');

// ВКЛАДЫВАНИЕ ОБЪЕКТА В ОБЪЕКТ
locationPerson.home = {
  floor: '4',
  flat: '18',
  rooms: '1'
}
console.log(locationPerson, '\n');

// СОАЗДАНИЕ СВОЙСТВ ОБЪЕКТА ПО ИМЕНИ ПЕРЕМЕННОЙ
const personName = 'Peter';
const personAge = '21';
const person = { // ЗДЕСЬ УКАЗАН ПОРЯДОК СВОЙСТВ В ОБЪЕКТЕ
  personName,
  personAge,
  foo: 'Yes, I\'m',
  bar: '123',
  fooBar: {
    fooA: 'Why?',
    barA: 'qwerty'
  }
}
console.log(person.personName, '\n');

// ОДНО ИЗ УСЛОВНЫХ ПРАВИЛ: НЕ ИЗМЕНЯТЬ ВНЕШНИЕ ОБЪЕКТЫ С ПОМОЩЬЮ ФУНКЦИЙ
const personOne = {
  name: 'Foo',
  age: 18,
  registered: false
}

function changeOfStatus(person) {
  const newPerson = { ...person };
  newPerson.registered = true;
  return newPerson;
}

const personTwo = changeOfStatus(personOne);
console.log(personOne.registered);
console.log(personTwo.registered);

let b = true, c = false;

b && console.log('Выполнено!');
c && console.log('Труляля!');

console.table(personOne);

// НЕЯВНОЕ ВОЗВРАЩЕНИЕ ОБЪЕКТА ЗА СЧЕТ КРУГЛЫХ СКОБОК
const newPost = (post, addedAt = Date()) => ({ ...post, addedAt, })

const firstPost = {
  id: 0,
  author: 'Bogdya',
}

console.log(newPost(firstPost));
