/**
 * @name ProvinciaModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class ProvinciaModel extends Model {
	constructor() {
		super('M_Provincias')
	}
}

module.exports.ProvinciaModel = ProvinciaModel
