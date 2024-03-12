"use strict"

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
const getData = url =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  )

getData('https://jsonplaceholder.typicode.com/todos/3')
  .then(json => console.log(json))
  .catch(error => console.log(error.message))
