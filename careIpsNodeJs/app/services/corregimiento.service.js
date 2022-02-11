/**
 * @name CorregimientoService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { CorregimientoModel } = require('../models/corregimiento.model')
const Log4js = require('../base/log4js')()

let _model = null

class CorregimientoService extends Service {
	constructor() {
		super(new CorregimientoModel())
		_model = new CorregimientoModel()
	}
	
}

module.exports.CorregimientoService = CorregimientoService
