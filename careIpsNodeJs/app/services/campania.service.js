/**
 * @name CampaniaService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { CampaniaModel } = require('../models/campania.model')
const Log4js = require('./../base/log4js')()

let _model = null

class CampaniaService extends Service {
	constructor() {
		super(new CampaniaModel())
		_model = new CampaniaModel()
	}

	async spCall(sp, params) {
		try {
			return await _model.spCall(sp, params)
		} catch (error) {
			Log4js.error(`[action: campania.service spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.CampaniaService = CampaniaService
