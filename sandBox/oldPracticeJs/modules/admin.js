"use strict";

export let admin = {
  name: "John"
};

let user = {
  name: "Cici"
}

export { user }

export function sayHi() {
  console.log(`Ready to serve, ${admin.name}!`);
}
