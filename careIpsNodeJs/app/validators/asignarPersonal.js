const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelpers')

const validateAsignarPersonal = [
	check('cedula')
		.exists()
		.withMessage('La cédula es obligatorio')
		.not()
		.isEmpty()
		.withMessage('La cédula no debe ser vacio'),
	check('email')
		.exists()
		.withMessage('El email es obligatorio')
		.isEmail()
		.normalizeEmail()
		.withMessage('Debe ingresar un email valido'),
	check('idCampania').exists().isNumeric(),
	check('pJerarquiasID').exists().not().isEmpty(),
	check('userIDAsignador').exists().not().isEmpty(),
	check('userIDPadre').exists().not().isEmpty(),
	(req, res, next) => {
		validateResult(req, res, next)
	},
]

module.exports = { validateAsignarPersonal }
