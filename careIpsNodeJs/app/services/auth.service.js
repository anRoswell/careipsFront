/**
 * @name AuthService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author Jaime Castrillón
 */

const { Service } = require('../base/service')
const { UserModel } = require('../models/user.model')
const Log4js = require('../base/log4js')()
let _model = null

class AuthService extends Service {
	constructor() {
		_model = new UserModel()
		super(_model)
	}

	async auth(username) {
		try {
			return await _model.auth(username)
		} catch (error) {
			Log4js.error(`[action: AuthService auth][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async lastLogin(id, ip) {
		try {
			return await _model.lastLogin(id, ip)
		} catch (error) {
			Log4js.error(`[action: AuthService lastLogin][msg: ${error.message}][file:${__filename}]`)
			return false
		}
	}

	async updatePass(){
		
	}

	async spCall(sp, params) {
		try {
			return await _model.spCall(sp, params)
		} catch (error) {
			Log4js.error(`[action: Jerarquia.service spCall][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.AuthService = AuthService
