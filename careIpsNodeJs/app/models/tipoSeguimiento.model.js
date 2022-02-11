/**
 * @name TipoSeguimientoModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')
const Log4js = require('../base/log4js')()
_model = null

class TipoSeguimientoModel extends Model {
	constructor() {
		super('mTipoSeguimiento')
		_model = new Model()
	}

	async spCall(sp, params) {
		try {
			return await _model.query(sp, params)
		} catch (error) {
			Log4js.error(`[action: TipoSeguimientoModel.model spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.TipoSeguimientoModel = TipoSeguimientoModel
