/**
 * @name SemaforizacionModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class SemaforizacionModel extends Model {
	constructor() {
		super('M_Semaforizaciones')
	}
}

module.exports.SemaforizacionModel = SemaforizacionModel
