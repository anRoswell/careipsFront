/**
 * @name PatientsModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class PatientsModel extends Model {
	constructor() {
		super('patients')
	}
}

module.exports.PatientsModel = PatientsModel
