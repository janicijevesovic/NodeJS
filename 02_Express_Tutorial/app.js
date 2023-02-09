const express = require('express');
const app = express();
let { people } = require('./data');

// Static Assets
app.use(express.static('./methods-public'));

// Parse Form Data
app.use(express.urlencoded({ extended: false }));

// Parse JSON
app.use(express.json());

app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
	const { name } = req.body;
	if (!name)
		return res.status(400).json({ success: false, msg: 'Please provide name' });
	return res.status(201).json({ success: true, person: name });
});

app.post('/login', (req, res) => {
	const { name } = req.body;
	if (!name) return res.status(401).send('Please provide credentials');
	return res.status(200).send(`Welcome ${name}`);
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
