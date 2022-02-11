/**
 * @name AsignarPersonalModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')
const Log4js = require('../base/log4js')()
_model = null

class AsignarPersonalModel extends Model {
	constructor() {
		super('usersTemp')
		_model = new Model()
	}

	async spCall(sp, params) {
		try {
			return await _model.query(sp, params)
		} catch (error) {
			Log4js.error(`[action: AsignarPersonal.model spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.AsignarPersonalModel = AsignarPersonalModel
