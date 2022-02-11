/**
 * @name SliderService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { SliderModel } = require('../models/slider.model')
const Log4js = require('../base/log4js')()

let _model = null

class SliderService extends Service {
	constructor() {
		super(new SliderModel())
		_model = new SliderModel()
	}
}

module.exports.SliderService = SliderService
