/**
 * @name CentroVotacionModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class CentroVotacionModel extends Model {
	constructor() {
		super('M_CentroVotaciones')
	}
}

module.exports.CentroVotacionModel = CentroVotacionModel
