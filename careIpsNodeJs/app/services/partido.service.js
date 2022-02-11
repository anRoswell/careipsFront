/**
 * @name PartidoService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { PartidoModel } = require('../models/partido.model')
const Log4js = require('../base/log4js')()

let _model = null

class PartidoService extends Service {
	constructor() {
		super(new PartidoModel())
		_model = new PartidoModel()
	}
	
}

module.exports.PartidoService = PartidoService
