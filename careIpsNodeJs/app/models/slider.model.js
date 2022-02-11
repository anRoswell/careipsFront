/**
 * @name SliderModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

const { Model } = require('../base/model')

class SliderModel extends Model {
	constructor() {
		super('mSliders')
	}
}

module.exports.SliderModel = SliderModel
