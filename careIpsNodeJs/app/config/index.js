const path = require('path')
const _ = require('lodash')

let envFile = require('./environments')

all = {
	language: 'es',
	host: process.env.URL_CSHARP,
	PORT: process.env.PORT || 8182,
	PORTS: process.env.PORTS || 8182,
	sessionEncrypt: '$ZC6rNk/Y5MWPj8-3Q0WcK48ZgHvL.',
	sessionToken: '$Tv8eZm/G2jEwI9-5V9TLK86bQGcD.',
	sessionTime: 1, // Definicion en horas de sesión
	appPath: path.dirname(__dirname),
	emailGoogle: {
		host: process.env.MAILHOST,
		port: process.env.MAILPORT,
		secure: process.env.MAILSECURE, // true for 465, false for other ports
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	},
	emailOutllook: {
		host: process.env.MAILHOST,
		secureConnection: process.env.MAILSECURE, // true for 465, false for other ports
		port: process.env.MAILPORT,
		tls: {
			ciphers:'SSLv3',
		},
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	},
	emailOAuth2: {
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
			clientId: process.env.OAUTH_CLIENTID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN,
		},
	},
	fileExtensions: {
		visit: ['image/jpeg', 'image/png'],
	},
}

module.exports = _.merge(all, envFile || {})
