/**
 * @name ProfesionModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class ProfesionModel extends Model {
	constructor() {
		super('M_Profesiones')
	}
}

module.exports.ProfesionModel = ProfesionModel
