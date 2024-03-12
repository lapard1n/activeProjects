"use strict";

import { admin, sayHi, user } from './admin.js';

admin.name = "Pete";

console.log('hi!');
console.log(admin.name);
sayHi();
console.log(user.name);
