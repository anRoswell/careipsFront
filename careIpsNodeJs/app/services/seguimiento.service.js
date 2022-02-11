/**
 * @name SeguimientoService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author anRoswell
 */

const { Service } = require('../base/service')
const { SeguimientoModel } = require('../models/seguimiento.model')
const Log4js = require('../base/log4js')()

let _model = null

class SeguimientoService extends Service {
	constructor() {
		super(new SeguimientoModel())
		_model = new SeguimientoModel()
	}

	async spCall(sp, params) {
		try {
			return await _model.spCall(sp, params)
		} catch (error) {
			Log4js.error(`[action: asignarPersonal.service spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.SeguimientoService = SeguimientoService
