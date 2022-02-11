const express = require('express')
const router = express.Router()

const { TipoSeguimientoController } = require('../../controllers/api/tipoSeguimiento.controller')
const Ctrl = new TipoSeguimientoController()
const schema = require('../../database/schemas/seguimiento.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'tipoSeguimiento'

router
	.get(`/tipoSeguimiento`, [JWT.isAuth], Ctrl.all)
	.get(`/tipoSeguimiento/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idtipoSeguimiento/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/tipoSeguimiento`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/tipoSeguimiento/:id`, [JWT.isAuth], Ctrl.update)
//.delete(`/tipoSeguimiento/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
