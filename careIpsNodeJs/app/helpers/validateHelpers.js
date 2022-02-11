const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
	try {
		validationResult(req).throw()
		return next()
	} catch (errors) {
		res.status(400)
		res.send({ errorsMsg: errors.array() })
	}
}

module.exports = { validateResult }
