const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

// setting up templating engine
// handlebars engine (hbs)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

// timer middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();

	//actions go here : following code run after getting the response from route handlers
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}.ms`);
});

// Serving static files.
app.use('/site', express.static(path.join(__dirname, 'public')));

// JSON parsing express middleware.
// express does not read JSON out of the box.
// req.body won't be available without the middleware
app.use(express.json());

// mounting a routes
app.get('/', (req, res) => {
	res.render('index.hbs', {
		title: 'The Witches',
		caption: 'The Legendary Trio Witches',
	});
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
