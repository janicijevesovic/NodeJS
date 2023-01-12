const { readFileSync, writeFileSync } = require('fs');

console.log('Start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
	'./content/result-sync.txt',
	`Here is the result: ${first}, ${second}`,
	{ flag: 'a' }
);

console.log('Dont with this Task');
console.log('Starting the Next one');
