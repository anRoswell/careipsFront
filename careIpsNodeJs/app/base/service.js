/**
 * @name Service
 * @type Class
 * @description Clase base de la cual extienden los servicios encargados de implementar
 * la funcionalidad de los modelos de la aplicación
 * @author Jaime Castrillón
 */

const Log4js = require('../base/log4js')()
const Message = require('../messages/message')
let _model = null

class Service {
	constructor(model) {
		_model = model
	}

	async create(fields, table, ignore = false) {
		try {
			fields.createdAt = new Date()
			const { insertId } = await _model.create(fields, table, ignore)
			return { action: 'created', id: insertId }
		} catch (error) {
			Log4js.error(`[action: Service create][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async update(fields, id, table) {
		try {
			fields.updatedAt = new Date()
			return await _model.update(fields, id, table)
		} catch (error) {
			Log4js.error(`[action: Service update][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async delete(id, table) {
		try {
			return await _model.delete(id, table)
		} catch (error) {
			Log4js.error(`[action: Service delete][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async one(id, fields, table) {
		try {
			return await _model.one(id, fields, table)
		} catch (error) {
			Log4js.error(`[action: Service one][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async all(fields, where, order, table) {
		try {
			const data = await _model.all(fields, where, order, table)
			return data || []
		} catch (error) {
			Log4js.error(`[action: Service all][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async menus(profileId) {
		try {
			const data = await _model.menus(profileId)
			return data || []
		} catch (error) {
			Log4js.error(`[action: Service menus][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async query(sql, params) {
		try {
			const data = await _model.query(sql, params)
			return data || []
		} catch (error) {
			Log4js.error(`[action: Service all][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.Service = Service
