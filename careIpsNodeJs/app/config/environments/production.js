require('dotenv').config()

module.exports = {
	
	mail: {
		user: process.env.MAILUSER,
		password: process.env.MAILPASSWORD,
	},
	
}
