const express = require('express');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

// timer middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();

	//actions go here : following code run after getting the response from route handlers
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}.ms`);
});

// JSON parsing express middleware.
// express does not read JSON out of the box.
// req.body won't be available without the middleware
app.use(express.json());

// mounting a routes
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
