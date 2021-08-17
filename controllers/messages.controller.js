const path = require('path');

function getMessages(req, res) {
	// sendFile needs absolute path to file.
	res.sendFile(path.join(__dirname, '..', 'public', 'images', 'trio.JPG'));
}

function postMessages(req, res) {
	console.log('Updating messages......');
}

module.exports = {
	getMessages,
	postMessages,
};
