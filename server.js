const express = require('express');

const {
	postFriend,
	getFriends,
	getFriend,
} = require('./controllers/friends.controller');
const {
	getMessages,
	postMessages,
} = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;



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

app.get('/friends', getFriends);

app.post('/friends', postFriend);

app.get('/friends/:friendId', getFriend);

app.get('/messages', getMessages);

app.post('/messages', postMessages);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
