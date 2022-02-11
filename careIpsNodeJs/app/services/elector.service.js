/**
 * @name ElectorService
 * @type Class
 * @description Servicio encargado de manejar los electores
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { ElectorModel } = require('../models/elector.model')
const Log4js = require('./../base/log4js')()

let _model = null

class ElectorService extends Service {
	constructor() {
		super(new ElectorModel())
		_model = new ElectorModel()
	}

	async spCall(sp, params) {
		try {
			return await _model.spCall(sp, params)
		} catch (error) {
			Log4js.error(`[action: elector.service spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.ElectorService = ElectorService
