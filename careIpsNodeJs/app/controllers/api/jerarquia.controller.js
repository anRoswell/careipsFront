/**
 * @name JerarquiaController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author enosReyes
 */

const { JerarquiaService } = require('../../services/jerarquia.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null
const table = 'P_jerarquias'

class JerarquiaController {
	constructor() {
		_service = new JerarquiaService()
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
			Log4js.error(`[action: JerarquiaController create][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: JerarquiaController update][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: JerarquiaController delete][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: JerarquiaController one][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: JerarquiaController all][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: JerarquiaController list][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spJerarquiaSelect(req, res) {
		try {
			const { pJerarquiasID } = req.params
			const { idCampania } = req.query
			console.log(pJerarquiasID, idCampania)
			const data = await _service.spCall(`CALL spJerarquiaSelect(${pJerarquiasID}, ${idCampania})`, [
				pJerarquiasID,
				idCampania,
			])
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: JerarquiaController spJerarquiaSelect][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	/**
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns
	 */
	async spPlantilla(req, res) {
		try {
			const data = await _service.spCall('CALL spPlantilla', [])
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: JerarquiaController spPlantilla][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}
}

module.exports.JerarquiaController = JerarquiaController
