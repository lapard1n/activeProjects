"use strict"

// OFFTOP: просто отсавлю это здесь :D
let promise = fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // значение этого заголовка обычно ставится автоматически,
    // в зависимости от тела запроса
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource или URLSearchParams
  referrer: "about:client", // или "" для того, чтобы не послать заголовок Referer,
  // или URL с текущего источника
  referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache или only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // контрольная сумма, например "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController, чтобы прервать запрос
  window: window // null
});

const newPromise = new Promise((resolve, reject) => {
})

// БАЗОВАЯ РАБОТА С Promise В ВИДЕ ЗАПРОСА НА СЕРВЕР ПРИ ПОМОЩИ fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

// СОЗДАНИЕ ДВУХ РАЗНЫХ ЦЕПОЧЕК ПРОМИСОВ ПОСЛЕ ЗАПРОСА fetch
let newFetch = fetch('https://jsonplaceholder.typicode.com/todos/2')
newFetch.then(response => response.ok)
  .then(ok => console.log(ok))
newFetch.then(response => response.json())
  .then(json => console.log(json))

// ОБРАБОТКА ОШИБКИ ЗАПРОСА С УКАЗАНИЕМ СВОЕЙ ОШИБКИ
fetch('https://jsonplaceholder.typicode.com/there-is-no-such-route')
  .then((response) => {

    if (!response.ok) {
      throw new Error('У вас ссылка битая, сэр~')
    }

    return response.json()
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(console.log('Тут должен был быть важный код~'))

// СОЗДАНИЕ ФУНКЦИИ ДЛЯ ОБРАЩЕНИЯ НА СЕРВЕР, СОЗДАНИЕМ ЗАПРОСА
const newUrl = 'https://jsonplaceholder.typicode.com/todos/69';

const getData = url =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  )
getData(newUrl)
  .then(json => console.log(json, 'promise'))
  .catch(error => console.log(error.message))

// ПРЕОБРАЖЕНИЕ ФУНКЦИИ ВЫШЕ С ПОМОЩЬЮ async/await
const shortGetData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
const newData = await shortGetData(newUrl); //! ТАК НЕ ДЕЛАТЬ! ЭТО ТОЛЬКО ДЛЯ КОНСОЛИ~
console.log(newData, 'async');

// (async function newResp(pup) {
//   const res = await shortGetData(pup);
//   return console.log(res, 'async');
// })(newUrl)

// ОГО! ЧТО ЭТО! НИ УЖЕ ЛИ ТЫ ДОБРАЛСЯ ДО РАБОТЫ С AJAX!
let xhr = new XMLHttpRequest();

xhr.open('GET', '/my/url');

xhr.send();

xhr.onload = function () {
  if (xhr.status != 200) { // HTTP ошибка?
    // обработаем ошибку
    alert('Ошибка: ' + xhr.status);
    return;
  }

  // получим ответ из xhr.response
};

xhr.onprogress = function (event) {
  // выведем прогресс
  alert(`Загружено ${event.loaded} из ${event.total}`);
};

xhr.onerror = function () {
  // обработаем ошибку, не связанную с HTTP (например, нет соединения)
};
