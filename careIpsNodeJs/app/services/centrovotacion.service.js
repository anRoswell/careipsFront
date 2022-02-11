/**
 * @name CentroVotacionService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

const { Service } = require('../base/service')
const { CentroVotacionModel } = require('../models/centroVotacion.model')
const Log4js = require('../base/log4js')()

let _model = null

class CentroVotacionService extends Service {
	constructor() {
		super(new CentroVotacionModel())
		_model = new CentroVotacionModel()
	}
	
}

module.exports.CentroVotacionService = CentroVotacionService
