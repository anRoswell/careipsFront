/**
 * @name AsignarPersonalService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { AsignarPersonalModel } = require('../models/asignarPersonal.model')
const Log4js = require('../base/log4js')()

let _model = null

class AsignarPersonalService extends Service {
	constructor() {
		super(new AsignarPersonalModel())
		_model = new AsignarPersonalModel()
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

module.exports.AsignarPersonalService = AsignarPersonalService
