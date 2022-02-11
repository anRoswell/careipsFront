/**
 * @name SeguimientoModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')
const Log4js = require('../base/log4js')()
_model = null

class SeguimientoModel extends Model {
	constructor() {
		super('mSeguimiento')
		_model = new Model()
	}

	async spCall(sp, params) {
		try {
			return await _model.query(sp, params)
		} catch (error) {
			Log4js.error(`[action: SeguimientoModel.model spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.SeguimientoModel = SeguimientoModel
