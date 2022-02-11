/**
 * @name DistritoService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author anRoswell
 */

const { Service } = require('../base/service')
const { DistritoModel } = require('../models/distrito.model')
const Log4js = require('../base/log4js')()

let _model = null

class DistritoService extends Service {
	constructor() {
		super(new DistritoModel())
		_model = new DistritoModel()
	}
}

module.exports.DistritoService = DistritoService
