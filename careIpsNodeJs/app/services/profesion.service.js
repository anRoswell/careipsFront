/**
 * @name ProfesionService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { ProfesionModel } = require('../models/profesion.model')
const Log4js = require('../base/log4js')()

let _model = null

class ProfesionService extends Service {
	constructor() {
		super(new ProfesionModel())
		_model = new ProfesionModel()
	}
	
}

module.exports.ProfesionService = ProfesionService
