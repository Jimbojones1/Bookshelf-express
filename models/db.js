require('dotenv').config(); //# dot-env
var db = require('knex')({	//# knex
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'l33tdba',
		password: 'w0rk5pac3',
		database: 'cats_fansite'
	}
});

module.exports = db;