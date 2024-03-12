const newPromise = new Promise((resolve, reject) => {

})

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     const state = response.ok;
//     const jsonResp = response.json();
//     return [state, jsonResp];
//   })
//   .then((respArr) => {
//     console.log(respArr[0]);
//     console.log(respArr[1]);
//   })
