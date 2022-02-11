/**
 * @name SeguimientoController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author enosReyes
 */

const { SeguimientoService } = require('../../services/seguimiento.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null
const table = 'mSeguimiento'

class SeguimientoController {
	constructor() {
		_service = new SeguimientoService()
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
			return Process.success(res, data, 201)
		} catch (error) {
			Log4js.error(`[action: SeguimientoController create][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: SeguimientoController update][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: SeguimientoController delete][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: SeguimientoController one][msg: ${error.message}][file:${__filename}]`)
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
			const fields = ['id', 'descripcion', 'estado']
			const order = ['id']
			const data = await _service.all(fields, {}, order, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: SeguimientoController all][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: SeguimientoController list][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spAsignarPersonalSelect(req, res) {
		try {
			const { cedula, idCampania, userIDAsignador, pJerarquiasID, email, token, userIDPadre } = req.body
			const data = await _service.spCall(
				`CALL spAsignarPersonal ('${cedula}', ${idCampania}, ${userIDAsignador}, 
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
			Log4js.error(`[action: AsignarPersonalController spAsignarPersonal][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}
}

module.exports.SeguimientoController = SeguimientoController
