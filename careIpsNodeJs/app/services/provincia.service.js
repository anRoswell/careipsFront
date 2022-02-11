/**
 * @name ProvinciaService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { ProvinciaModel } = require('../models/provincia.model')
const Log4js = require('../base/log4js')()

let _model = null

class ProvinciaService extends Service {
	constructor() {
		super(new ProvinciaModel())
		_model = new ProvinciaModel()
	}
	
}

module.exports.ProvinciaService = ProvinciaService
