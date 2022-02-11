const EmailValidator = require('email-deep-validator')

module.exports = {
	emailValidator: async (mail) => {
		const emailValidator = new EmailValidator()
		const { wellFormed, validDomain, validMailbox } = await emailValidator.verify(mail)
		return {
			wellFormed,
			validDomain,
			validMailbox,
		}
	},
}
