/**
 * @name AsignarPersonalController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author Alfonso Navarro
 */

const { AsignarPersonalService } = require('../../services/asignarPersonal.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
const Email = require('./../../base/email')
const email = new Email()
let _service = null
const table = 'usersTemp'

class AsignarPersonalController {
	constructor() {
		_service = new AsignarPersonalService()
	}

	/**
	 * @method create un registro en base de datos
	 * @param fields Campos para la creación de registro
	 * @returns Promise datos de la acción realizada
	 */
	async create(req, res) {
		try {
			const fields = req.body
			const data = await _service.create(fields, table)
			email.emailAsignarUser(fields)
			return Process.success(res, data, 201)
		} catch (error) {
			Log4js.error(`[action: AsignarPersonalController create][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('CREATE_ERROR'))
		}
	}

	/**
	 * Actualizamos registros por su id
	 * @param {*} req request
	 * @param {*} res response
	 * @returns retorna respuesta
	 */
	async update(req, res) {
		try {
			const fields = req.body
			const id = req.params.id
			const data = await _service.update(fields, id, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: AsignarPersonalController update][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('UPDATE_ERROR'))
		}
	}

	/**
	 * Elimina registro por su id
	 * @param {*} req request
	 * @param {*} res response
	 * @returns retorna respuesta
	 */
	async delete(req, res) {
		try {
			const id = req.params.id
			const data = await _service.delete(id, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: AsignarPersonalController delete][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DELETE_ERROR'))
		}
	}

	/**
	 * Consultamos un solo registro por su id
	 * @param {*} req request
	 * @param {*} res response
	 * @returns retorna el registro consultado o vacio sino encuentra
	 */
	async one(req, res) {
		try {
			const id = req.params.id
			const fields = ['id', 'descripcion', 'estado']
			const data = await _service.one(id, fields, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: AsignarPersonalController one][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	/**
	 * Metodo que consulta todo los registros de la tabla
	 * @param {.} req request
	 * @param {*} res response
	 * @returns returna todos los registros de la tabla
	 */
	async all(req, res) {
		try {
			const fields = [
				'id',
				'nombreCampania',
				'idPartido',
				'idCircuito',
				'idPostulacion',
				'estado',
				'candidatoNombre',
				'candidatoApellido',
				'cedula',
				'activarVotacion',
				'createdAt',
			]
			const order = ['id']
			const data = await _service.all(fields, {}, order, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: AsignarPersonalController all][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	/**
	 * Metodo que consulta todo los registros de la tabla
	 * @param {*} req request
	 * @param {*} res response
	 * @returns
	 */
	async list(req, res) {
		try {
			const fields = ['id', 'descripcion', 'estado']
			const order = ['descripcion']
			const data = await _service.all(fields, {}, order, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: AsignarPersonalController list][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spCrearUserTmp(req, res) {
		try {
			const { cedula, idCampania, userIDAsignador, pJerarquiasID, email, token, userIDPadre } = req.body
			const data = await _service.spCall(
				`CALL spCrearUserTmp ('${cedula}', ${idCampania}, ${userIDAsignador}, 
			${pJerarquiasID}, '${email}', '${token}', ${userIDPadre} )`,
				[]
			)
			const { msg, estado } = data[0][0]
			if (estado === 200) {
				return Process.success(res, data)
			} else {
				console.log(msg)
				return Process.error(res, msg)
			}
		} catch (error) {
			Log4js.error(`[action: AsignarPersonalController spCrearUserTmp][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}
}

module.exports.AsignarPersonalController = AsignarPersonalController
