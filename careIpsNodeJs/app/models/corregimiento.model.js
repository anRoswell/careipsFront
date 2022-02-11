/**
 * @name CorregimientoModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class CorregimientoModel extends Model {
	constructor() {
		super('M_Corregimientos')
	}
}

module.exports.CorregimientoModel = CorregimientoModel
