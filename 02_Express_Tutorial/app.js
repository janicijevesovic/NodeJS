const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

// Static Assets
app.use(express.static('./methods-public'));

// Parse Form Data
app.use(express.urlencoded({ extended: false }));

// Parse JSON
app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
