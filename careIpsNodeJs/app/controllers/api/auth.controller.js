/**
 * @name AuthController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author Jaime Castrillón
 */

const bcrypt = require('bcryptjs')
const { compare } = require('bcryptjs')
const { JWT } = require('../../base/jwt')
const { AuthService } = require('../../services/auth.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
const email = require('../../utils/email/email')
let _service = null
const table = 'users'

class AuthController {
	constructor() {
		_service = new AuthService()
	}

	/**
	 * @method auth
	 * @param req Request realizado al endpoint
	 * @param res Response realizado por el controlador
	 * @returns Process con la acción realizada (success / error)
	 */

	async auth(req, res) {
		try {
			const { username, password } = req.body
			if (!username || !password) {
				throw Message('LOGIN_INVALID')
			} else {
				const [user] = await _service.auth(username)
				console.log(user)
				if (!user) {
					throw Message('LOGIN_INVALID')
				} else {
					if (!user.status) {
						return Process.error(res, Message('AUTH_LOCKED'), 403)
					} else {
						//console.log(user)
						const valid = await compare(password, user.password)
						if (!valid) {
							throw Message('LOGIN_INVALID')
						} else {
							_service.lastLogin(user.id, req.ip)
							delete user['password']
							delete user['status']

							const token = JWT.create(user)

							const options = await _service.menus(user.profileId)
							const menus = options.filter((o) => !o.menuId)
							menus.map((m) => {
								m.menus = options.filter((o) => m.id === o.menuId)
							})
							const buffer = Buffer.from(JSON.stringify(menus), 'utf8')
							user.access = buffer.toString('base64')

							res.setHeader('Authorization', `Bearer ${token}`)
							Process.success(res, user)
						}
					}
				}
			}
		} catch (error) {
			console.error(error)
			Log4js.error(`[action: AuthController auth][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('LOGIN_INVALID'), 401)
		}
	}

	async recoverypassmb(req, res) {
		try {
			const { emailRecovery } = req.body
			const user = await _service.auth(emailRecovery)
			if (!user) {
				throw Message('LOGIN_INVALID')
			} else {
				const resp = await email.recoverypass(user[0])
				const object = {
					codVerificacion: resp.codVerificacion,
					completeName: `${user[0].primerNombre} ${user[0].apellidoPaterno}`,
					id: user[0].id,
					email: user[0].email,
				}

				Process.success(res, object)
			}
		} catch (error) {
			Log4js.error(`[action: recoverypassmb auth][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('LOGIN_INVALID'), 500)
		}
	}

	async updatePassUsermb(req, res) {
		try {
			const {
				params: { id },
			} = req
			const fields = ['id']
			const user = await _service.one(id, fields, table)
			if (!user) {
				return Process.error(res, Message('LOGIN_INVALID'), 500)
			} else {
				let newPassword = bcrypt.hashSync(req.body.usrPassword, 10)
				const resultado = await _service.spCall(`CALL spUserUpdatePassword(${id}, '${newPassword}')`, [])
				return Process.success(res, resultado)
			}
		} catch (error) {
			console.log(error)
			Log4js.error(`[action: updatePassUsermb auth.controller][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('LOGIN_INVALID'), 500)
		}
	}
}

module.exports.AuthController = AuthController
