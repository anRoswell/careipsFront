/**
 * @name ReligionModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author anRoswell
 */

const { Model } = require('../base/model')

class ReligionModel extends Model {
	constructor() {
		super('M_Religiones')
	}
}

module.exports.ReligionModel = ReligionModel
