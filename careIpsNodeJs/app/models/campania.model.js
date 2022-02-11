/**
 * @name CampaniaModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')
const Log4js = require('./../base/log4js')()
_model = null

class CampaniaModel extends Model {
	constructor() {
		super('C_campanias')
		_model = new Model()
	}

	async spCall(sp, params) {
		try {
			return await _model.query(sp, params)
		} catch (error) {
			Log4js.error(`[action: campania.model spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.CampaniaModel = CampaniaModel
