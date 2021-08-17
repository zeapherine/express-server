const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
	{
		id: 0,
		name: 'Albert Einstein',
	},
	{
		id: 1,
		name: 'Sir Isaac Newton',
	},
];

// timer middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();

	//actions go here : following code run after getting the response from route handlers
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}.ms`);
});

// JSON parsing express middleware.
// express does not read JSON out of the box.
// req.body won't be available without the middleware.
app.use(express.json());

app.get('/friends', (req, res) => {
	res.json(friends);
});

app.post('/friends', (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			error: 'Missing friend name',
		});
	}

	const newFriend = {
		name: req.body.name,
		id: friends.length,
	};

	friends.push(newFriend);
	res.json(newFriend);
});

app.get('/friends/:friendId', (req, res) => {
	const friendId = Number(req.params.friendId);
	const friend = friends[friendId];
	if (friend) {
		res.status(200).json(friend);
	} else {
		res.status(404).json({
			error: 'Friend does not exists',
		});
	}
});

app.get('/messages', (req, res) => {
	res.send('<ul><li>Hello Albert</li></ul>');
});

app.post('/messages', (req, res) => {
	console.log('Updating messages......');
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
