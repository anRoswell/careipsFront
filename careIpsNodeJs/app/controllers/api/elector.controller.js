/**
 * @name ElectorController
 * @type Class
 * @description Controlador encargado de los electores
 * @author enosReyes
 */

const { ElectorService } = require('../../services/elector.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null
const table = 'C_electores'

class ElectorController {
	constructor() {
		_service = new ElectorService()
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
			Log4js.error(`[action: ElectorController create][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: ElectorController update][msg: ${error.message}][file:${__filename}]`)
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
			Log4js.error(`[action: ElectorController delete][msg: ${error.message}][file:${__filename}]`)
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
			const fields = [
				'id',
				'campaniaID',
				'parentId',
				'cedula',
				'primerNombre',
				'segundoNombre',
				'apellidoPaterno',
				'apellidoMaterno',
				'apellidoCasado',
				'lastDateLogin',
				'lastIpLogin',
				'status',
				'celular1',
				'celular2',
				'telefono',
				'correo',
				'sexo',
				'fechaNacimiento',
				'edad',
				'provinciaID',
				'distritoID',
				'corregimientoID',
				'comunidad',
				'barrio',
				'barriada',
				'sector',
				'edificio',
				'Calle',
				'numCasaApto',
				'otrasReferencias',
				'ubicacionLat',
				'ubicacionLng',
				'centroVotacionID',
				'mesaNum',
				'estadoCivil',
				'conyugePareja',
				'cedulaPareja',
				'amigo',
				'celularAmigo',
				'profesionID',
				'nivelEducativo',
				'situacionLaboral',
				'lugarTrabajo',
				'situacionVivienda',
				'ingresoAproximado',
				'pertenecePartido',
				'partidoID',
				'religionID',
				'redSocial',
				'semaforizacionID',
				'estadoVotoID',
				'createdAt',
				'userIdCreatedAt',
				'updatedAt',
				'userIdUpdatedAt',
			]
			const data = await _service.one(id, fields, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController one][msg: ${error.message}][file:${__filename}]`)
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
				'campaniaID',
				'parentId',
				'cedula',
				'primerNombre',
				'segundoNombre',
				'apellidoPaterno',
				'apellidoMaterno',
				'apellidoCasado',
				'lastDateLogin',
				'lastIpLogin',
				'status',
				'celular1',
				'celular2',
				'telefono',
				'correo',
				'sexo',
				'fechaNacimiento',
				'edad',
				'provinciaID',
				'distritoID',
				'corregimientoID',
				'comunidad',
				'barrio',
				'barriada',
				'sector',
				'edificio',
				'Calle',
				'numCasaApto',
				'otrasReferencias',
				'ubicacionLat',
				'ubicacionLng',
				'centroVotacionID',
				'mesaNum',
				'estadoCivil',
				'conyugePareja',
				'cedulaPareja',
				'amigo',
				'celularAmigo',
				'profesionID',
				'nivelEducativo',
				'situacionLaboral',
				'lugarTrabajo',
				'situacionVivienda',
				'ingresoAproximado',
				'pertenecePartido',
				'partidoID',
				'religionID',
				'redSocial',
				'semaforizacionID',
				'estadoVotoID',
				'createdAt',
				'userIdCreatedAt',
				'updatedAt',
				'userIdUpdatedAt',
			]
			const order = ['id']
			const data = await _service.all(fields, {}, order, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController all][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	/**
	 * Metodo que consulta todos los registros de la tabla
	 * @param {*} req request
	 * @param {*} res response
	 * @returns
	 */
	async list(req, res) {
		try {
			const fields = [
				'id',
				'campaniaID',
				'parentId',
				'cedula',
				'primerNombre',
				'segundoNombre',
				'apellidoPaterno',
				'apellidoMaterno',
				'apellidoCasado',
				'lastDateLogin',
				'lastIpLogin',
				'status',
				'celular1',
				'celular2',
				'telefono',
				'correo',
				'sexo',
				'fechaNacimiento',
				'edad',
				'provinciaID',
				'distritoID',
				'corregimientoID',
				'comunidad',
				'barrio',
				'barriada',
				'sector',
				'edificio',
				'Calle',
				'numCasaApto',
				'otrasReferencias',
				'ubicacionLat',
				'ubicacionLng',
				'centroVotacionID',
				'mesaNum',
				'estadoCivil',
				'conyugePareja',
				'cedulaPareja',
				'amigo',
				'celularAmigo',
				'profesionID',
				'nivelEducativo',
				'situacionLaboral',
				'lugarTrabajo',
				'situacionVivienda',
				'ingresoAproximado',
				'pertenecePartido',
				'partidoID',
				'religionID',
				'redSocial',
				'semaforizacionID',
				'estadoVotoID',
				'createdAt',
				'userIdCreatedAt',
				'updatedAt',
				'userIdUpdatedAt',
			]
			const order = ['primerNombre']
			const data = await _service.all(fields, {}, order, table)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController list][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spCrearElectorTmp(req, res) {
		try {
			const action = 'insertTmp'
			const {
				userIdCreatedAt,
				campananiaID,
				cedula,
				primerNombre,
				segundoNombre,
				apellidoPaterno,
				apellidoMaterno,
				apellidoCasado,
				celular1,
				celular2,
				telefono,
				correo,
				sexoID,
				fechaNacimiento,
				edad,
				provinciaID,
				distritoID,
				corregimientoID,
				comunidad,
				barrio,
				barriada,
				sector,
				edificio,
				calle,
				numCasaApto,
				otrasReferencias,
				ubicacionLat,
				ubicacionLng,
				centroVotacionID,
				mesaNumID,
				estadoCivilID,
				conyugePareja,
				cedulaPareja,
				amigo,
				celularAmigo,
				profesionID,
				nivelEducativoID,
				situacionLaboralID,
				lugarTrabajo,
				hijos,
				situacionViviendaID,
				ingresoAproximadoID,
				pertenecePartidoID,
				partidoID,
				religionID,
				religionOtra,
				whatsapp,
				facebook,
				instagram,
				twitter,
				youtube,
				tiktok,
				telegram,
				snapchapt,
				otra,
			} = req.body

			const data = await _service.query(
				`CALL spCrearElectorTemp(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					action,
					campananiaID,
					userIdCreatedAt,
					cedula,
					primerNombre,
					segundoNombre,
					apellidoPaterno,
					apellidoMaterno,
					apellidoCasado,
					celular1,
					celular2,
					telefono,
					correo,
					sexoID,
					fechaNacimiento,
					edad,
					provinciaID,
					distritoID,
					corregimientoID,
					comunidad,
					barrio,
					barriada,
					sector,
					edificio,
					calle,
					numCasaApto,
					otrasReferencias,
					ubicacionLat,
					ubicacionLng,
					centroVotacionID,
					mesaNumID,
					estadoCivilID,
					conyugePareja,
					cedulaPareja,
					amigo,
					celularAmigo,
					profesionID,
					nivelEducativoID,
					situacionLaboralID,
					lugarTrabajo,
					JSON.stringify(hijos),
					situacionViviendaID,
					ingresoAproximadoID,
					pertenecePartidoID,
					partidoID,
					religionID,
					religionOtra,
					whatsapp,
					facebook,
					instagram,
					twitter,
					youtube,
					tiktok,
					telegram,
					snapchapt,
					otra,
					0,
				]
			)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController spCrearElector][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spCrearElector(req, res) {
		try {
			const action = 'final'
			const {
				userIdCreatedAt,
				campananiaID,
				cedula,
				primerNombre,
				segundoNombre,
				apellidoPaterno,
				apellidoMaterno,
				apellidoCasado,
				celular1,
				celular2,
				telefono,
				correo,
				sexoID,
				fechaNacimiento,
				edad,
				provinciaID,
				distritoID,
				corregimientoID,
				comunidad,
				barrio,
				barriada,
				sector,
				edificio,
				calle,
				numCasaApto,
				otrasReferencias,
				ubicacionLat,
				ubicacionLng,
				centroVotacionID,
				mesaNumID,
				estadoCivilID,
				conyugePareja,
				cedulaPareja,
				amigo,
				celularAmigo,
				profesionID,
				nivelEducativoID,
				situacionLaboralID,
				lugarTrabajo,
				hijos,
				situacionViviendaID,
				ingresoAproximadoID,
				pertenecePartidoID,
				partidoID,
				religionID,
				religionOtra,
				whatsapp,
				facebook,
				instagram,
				twitter,
				youtube,
				tiktok,
				telegram,
				snapchapt,
				otra,
			} = req.body

			const data = await _service.query(
				`CALL spCrearElector(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					action,
					campananiaID,
					userIdCreatedAt,
					cedula,
					primerNombre,
					segundoNombre,
					apellidoPaterno,
					apellidoMaterno,
					apellidoCasado,
					celular1,
					celular2,
					telefono,
					correo,
					sexoID,
					fechaNacimiento,
					edad,
					provinciaID,
					distritoID,
					corregimientoID,
					comunidad,
					barrio,
					barriada,
					sector,
					edificio,
					calle,
					numCasaApto,
					otrasReferencias,
					ubicacionLat,
					ubicacionLng,
					centroVotacionID,
					mesaNumID,
					estadoCivilID,
					conyugePareja,
					cedulaPareja,
					amigo,
					celularAmigo,
					profesionID,
					nivelEducativoID,
					situacionLaboralID,
					lugarTrabajo,
					JSON.stringify(hijos),
					situacionViviendaID,
					ingresoAproximadoID,
					pertenecePartidoID,
					partidoID,
					religionID,
					religionOtra,
					whatsapp,
					facebook,
					instagram,
					twitter,
					youtube,
					tiktok,
					telegram,
					snapchapt,
					otra,
					0,
					0,
				]
			)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController spCrearElector][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spGetDataSelectFormElector(req, res) {
		try {
			const { userId, campaniaId, perfilId } = req.query
			const data = await _service.spCall(`CALL spGetDataSelectFormElector(${userId},${campaniaId},${perfilId} )`, [
				{ userId, campaniaId, perfilId },
			])
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController spGetDataSelectFormElector][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async spGetElectores(req, res) {
		try {
			const { userId, campaniaId, perfilId } = req.query
			const data = await _service.spCall(`CALL spGetElectores(${userId},${campaniaId},${perfilId} )`, [
				{ userId, campaniaId, perfilId },
			])
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController spGetElectores][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	/** Falta crear este SP
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns
	 *
	 */
	async spPlantilla(req, res) {
		try {
			const data = await _service.spCall('CALL spPlantilla', [])
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ElectorController spPlantilla][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}
}

module.exports.ElectorController = ElectorController
