"use strict";

import { admin, sayHi } from './admin.js';
import "./pete.js";
admin.name = "Pete";

console.log('hi!');
console.log(admin);
sayHi();
