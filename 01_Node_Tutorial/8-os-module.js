const os = require('os');

// User info
const user = os.userInfo();
console.log(user);

// Returns the system uptime
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};

console.log(currentOS);
