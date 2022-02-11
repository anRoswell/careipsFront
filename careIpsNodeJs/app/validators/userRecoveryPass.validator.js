const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelpers')

const validateUserRecovery = [
	check('id')
		.exists()
		.withMessage('El id es obligatorio')
		.not()
		.isEmpty()
		.withMessage('El campo prueba no debe ser vacio'),
	check('usrPassword')
		.exists()
		.withMessage('La contraseña es obligatorio')
		.not()
		.isEmpty()
		.withMessage('La contraseña no puede ser vacio')
		.not(),
	// .isStrongPassword()
	// .withMessage('La contraseña no cumple los requisitos!!!'),
	(req, res, next) => {
		validateResult(req, res, next)
	},
]

module.exports = { validateUserRecovery }
