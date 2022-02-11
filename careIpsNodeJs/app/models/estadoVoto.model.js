/**
 * @name EstadoVotoModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author anRoswell
 */

const { Model } = require('../base/model')

class EstadoVotoModel extends Model {
	constructor() {
		super('M_EstadosVotos')
	}

	asignarTabla() {
		super.asignarTabla('M_EstadosVotos')
	}
}

module.exports.EstadoVotoModel = EstadoVotoModel
