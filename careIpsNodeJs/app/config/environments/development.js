require('dotenv').config()

module.exports = {
	// Seed database on startup
	seedDB: false,
	mail: {
		user: process.env.MAILUSER,
		password: process.env.MAILPASSWORD,
	},	
	
}
