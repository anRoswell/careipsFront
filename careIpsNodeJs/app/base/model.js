/**
 * @name Model
 * @type Class
 * @description Clase base de la cual extienden los modelos de la aplicación
 * @author Jaime Castrillón
 */

const { Database } = require('../database/database')
const Log4js = require('./log4js')()

class Model {
	constructor(table) {
		this.table = table
	}

	async create(fields, table, ignore = false) {
		try {
			return await Database.create(table, fields, ignore)
		} catch (error) {
			Log4js.error(`[action: Model create][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async update(fields, id, table) {
		try {
			return await Database.update(table, fields, id)
		} catch (error) {
			Log4js.error(`[action: Model update][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async delete(id, table) {
		try {
			return await Database.delete(table, id)
		} catch (error) {
			Log4js.error(`[action: Model delete][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async one(id, fields, table) {
		try {
			return await Database.one(table, id, fields)
		} catch (error) {
			Log4js.error(`[action: Model one][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async all(fields, where, order, table) {
		try {
			return await Database.all(table, fields, where, order)
		} catch (error) {
			Log4js.error(`[action: Model all][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async menus(profileId) {
		try {
			const sql = `
				SELECT
					m.id,
					m.name,
					m.url,
					m.icon,
					m.menuId,
					m.divider
				FROM menus m
				INNER JOIN access a ON m.id = a.menuId
				WHERE 
					a.profileId=${profileId}
				ORDER BY 
					m.menuId, m.order
			`

			console.log(sql)
			return await Database.query(sql, [])
		} catch (error) {
			Log4js.error(`[action: Queries menus][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async query(sql, params) {
		try {
			return await Database.query(sql, params)
		} catch (error) {
			Log4js.error(`[action: Model query][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.Model = Model
