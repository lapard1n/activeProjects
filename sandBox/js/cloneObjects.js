"use strict"

let obj = {
  age: 28,
  name: "Pablo",
  kek: [1, 2, 3],
  work: {
    first: "Code",
    exp: 2,
    prework: {
      second: "Design",
      exp: 1,
    },
  },
  func: function exc(a = 2, b = 4) {
    return a * b;
  }
}

let kekeke = {
  exp: 0,
  pepe: "sad...",
  pup: function pupu(a = 2, b = 4) {
    return a * b;
  },
  lololo: {
    pip: "died",
  }
}

function getObj(a, b) {
  for (let key in b) {
    if (typeof b[key] === "function") {
      a[key] = Object.assign(b[key]);
    } else {
      a[key] = JSON.parse(JSON.stringify(b[key]));
    }
  }
}

let clone = {};
getObj(clone, obj);
getObj(clone, kekeke);

clone.func = function exc(a = 6, b = 6) {
  return a * b;
}

console.log(obj);
console.log(kekeke);
console.log(clone);
console.log(clone === obj);
