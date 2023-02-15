const getAllTasks = (req, res) => {
	res.send('Get All Tasks');
};

const createTask = (req, res) => {
	res.send('Create Task');
};

module.exports = {
	getAllTasks,
};
