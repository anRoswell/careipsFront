/**
 * @name PatientsController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author enosReyes
 */

const { PatientsService } = require('../../services/patients.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null
const table = 'patients'

class PatientsController {
	constructor() {
		_service = new PatientsService()
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
			console.log(data)
			return Process.success(res, data, 201)
		} catch (error) {
			Log4js.error(`[action: PatientsController create][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: PatientsController update][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: PatientsController delete][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: PatientsController one][msg: ${error.message}][file:${__filename}]`)
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
				'consecutivo',
				'nitPrestador',
				'numIdentificacion',
				'name',
				'primerApellido',
				'segundoApellido',
				'phone',
			]
			const order = ['consecutivo']
			const data = await _service.all(fields, {}, order, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: PatientsController all][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: PatientsController list][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}
}

module.exports.PatientsController = PatientsController
