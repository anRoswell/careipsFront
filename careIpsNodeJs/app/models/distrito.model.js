/**
 * @name DistritoModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author anRoswell
 */

const { Model } = require('../base/model')

class DistritoModel extends Model {
	constructor() {
		super('M_Distritos')
	}
}

module.exports.DistritoModel = DistritoModel
