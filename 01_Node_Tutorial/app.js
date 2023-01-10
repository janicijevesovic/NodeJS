// Modules - Encapsulated Code

const names = require('./4-names');

const sayHi = require('./5-utils');

const data = require('./6-alternative-syntax');
require('./7-interesting-example'); // Function gets executed

sayHi(names.john);
sayHi('Susan');
sayHi(names.jim);
console.log(data);
console.log('Test1');
