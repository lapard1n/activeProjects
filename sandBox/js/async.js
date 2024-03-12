const newPromise = new Promise((resolve, reject) => {

})

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

let newFetch = fetch('https://jsonplaceholder.typicode.com/todos/1');

newFetch.then(response => response.ok)
  .then(ok => console.log(ok))
newFetch.then(response => response.json())
  .then(json => console.log(json))
