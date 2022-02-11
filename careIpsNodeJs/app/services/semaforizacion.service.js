/**
 * @name SemaforizacionService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { SemaforizacionModel } = require('../models/semaforizacion.model')
const Log4js = require('../base/log4js')()

let _model = null

class SemaforizacionService extends Service {
	constructor() {
		super(new SemaforizacionModel())
		_model = new SemaforizacionModel()
	}
	
}

module.exports.SemaforizacionService = SemaforizacionService
