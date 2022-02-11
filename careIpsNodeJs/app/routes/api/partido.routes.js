const express = require('express')
const router = express.Router()

const { PartidoController } = require('../../controllers/api/partido.controller')
const Ctrl = new PartidoController()
const schema = require('../../database/schemas/partido.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'partidos'

router
	.get(`/partidos`, [JWT.isAuth], Ctrl.all)
	.get(`/listpartidos/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idpartidos/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/partidos`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/partidos/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/partidos/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
