/**
 * @name ReligionService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author anRoswell
 */

const { Service } = require('../base/service')
const { ReligionModel } = require('../models/religion.model')
const Log4js = require('../base/log4js')()

let _model = null

class ReligionService extends Service {
	constructor() {
		super(new ReligionModel())
		_model = new ReligionModel()
	}
}

module.exports.ReligionService = ReligionService
