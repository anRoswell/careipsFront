/**
 * @name PartidoModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class PartidoModel extends Model {
	constructor() {
		super('M_Partidos')
	}
}

module.exports.PartidoModel = PartidoModel
