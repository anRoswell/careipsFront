/**
 * @name TipoSeguimientoService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author anRoswell
 */

const { Service } = require('../base/service')
const { TipoSeguimientoModel } = require('../models/tipoSeguimiento.model')
const Log4js = require('../base/log4js')()

let _model = null

class TipoSeguimientoService extends Service {
	constructor() {
		super(new TipoSeguimientoModel())
		_model = new TipoSeguimientoModel()
	}

	async spCall(sp, params) {
		try {
			return await _model.spCall(sp, params)
		} catch (error) {
			Log4js.error(`[action: TipoSeguimientoService.service spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.TipoSeguimientoService = TipoSeguimientoService
