require('dotenv').config(); //# dot-env
var db = require('knex')({	//# knex
	client: process.env.CLIENT,
	connection: {
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE
	}
});