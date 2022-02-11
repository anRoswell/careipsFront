/**
 * @name UserController
 * @type Class
 * @description Controlador encargado de la funcionalidad de marcas
 * @author Alfonso Navarro
 */

const bcrypt = require('bcryptjs')
const UUID = require('../../utils/uuid')
const { UserService } = require('../../services/user.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null

class UserController {
	constructor() {
		_service = new UserService()
	}

	/**
	 * @method create
	 * @param fields Campos para la creación de marcas
	 * @returns Promise datos de la acción realizada
	 */

	async create(req, res) {
		try {
			const fields = req.body
			fields.password = bcrypt.hashSync(fields.password, 10)
			fields.token = UUID.get()
			fields.validation = 0
			fields.lastDateLogin = new Date()
			//	delete fields['confirmPassword']
			const data = await _service.create(fields)
			return Process.success(res, data, 201)
		} catch (error) {
			Log4js.error(`[action: UserController create][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('CREATE_ERROR'))
		}
	}

	async update(req, res) {
		try {
			const fields = req.body
			const id = req.params.id
			const data = await _service.update(fields, id)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: UserController update][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('UPDATE_ERROR'))
		}
	}

	async delete(req, res) {
		try {
			const id = req.params.id
			const data = await _service.delete(id)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: UserController delete][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DELETE_ERROR'))
		}
	}

	async one(req, res) {
		try {
			const id = req.params.id
			const fields = ['id', 'name']
			const data = await _service.one(id, fields)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: UserController one][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async all(req, res) {
		try {
			const fields = ['id', 'name', 'status']
			const order = ['id']
			const data = await _service.all(fields, {}, order)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: UserController all][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async list(req, res) {
		try {
			const fields = ['id', 'name', 'status']
			const order = ['name']
			const data = await _service.all(fields, {}, order)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: UserController list][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spGetUsuario(req, res) {
		try {
			const { pJerarquiasID } = req.params
			const { idCampania, pJerarquiasIDSelected } = req.query
			const data = await _service.spCall(
				`CALL spGetUsuario(${pJerarquiasID}, ${idCampania}, ${pJerarquiasIDSelected})`,
				[pJerarquiasID, idCampania]
			)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: UserController spGetUsuario][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spValidateInvitation(req, res) {
		try {
			const { cedula } = req.params
			const { token } = req.query
			const data = await _service.spCall(
				`CALL spCrearUser('validateInvitacion', '${cedula}', '${token}', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0')`,
				[cedula, token]
			)

			console.log(data)

			if (data[1][0].estado === 200) {
				return Process.success(res, data)
			} else {
				return Process.error(res, data[1][0].msg)
			}
		} catch (error) {
			Log4js.error(`[action: UserController spValidateInvitation][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spRegistrarUsuario(req, res) {
		try {
			const {
				idCampania,
				pJerarquiasID,
				userIDPadre,
				userIDAsignador,
				cedula,
				primerNombre,
				segundoNombre,
				apellidoPaterno,
				apellidoMaterno,
				apellidoCasado,
				email,
				usrPassword,
				mobile,
				usrTerminosCondiciones,
				token,
			} = req.body

			const query = `CALL spCrearUser('registrarUsuario', '${cedula}', '${token}', '${userIDAsignador}', '${userIDPadre}', '${idCampania}', '${primerNombre}', '${segundoNombre}',
				 '${apellidoPaterno}', '${apellidoMaterno}', '${apellidoCasado}', '${email}', '${usrPassword}', '${mobile}', '${pJerarquiasID}')`

			const data = await _service.spCall(query, [cedula, token])

			console.log(data)

			if (data[1][0].estado === 200) {
				return Process.success(res, data)
			} else {
				return Process.error(res, data[1][0].msg)
			}
		} catch (error) {
			Log4js.error(`[action: UserController spRegistrarUsuario][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}
}

module.exports.UserController = UserController
