const path = require('path');

function getMessages(req, res) {
	// res.send('<ul><li>Hello Albert</li></ul>');

	// sendFile needs absolute path to file.
	res.sendFile(path.join(__dirname, '..', 'public', 'IMG_0353.JPG'));
}

function postMessages(req, res) {
	console.log('Updating messages......');
}

module.exports = {
	getMessages,
	postMessages,
};
