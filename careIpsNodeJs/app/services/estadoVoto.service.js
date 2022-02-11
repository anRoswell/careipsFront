/**
 * @name EstadoVotoService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author anRoswell
 */

const { Service } = require('../base/service')
const { EstadoVotoModel } = require('../models/estadoVoto.model')
const Log4js = require('../base/log4js')()

let _model = null

class EstadoVotoService extends Service {
	constructor() {
		super(new EstadoVotoModel())
		_model = new EstadoVotoModel()
	}
}

module.exports.EstadoVotoService = EstadoVotoService
