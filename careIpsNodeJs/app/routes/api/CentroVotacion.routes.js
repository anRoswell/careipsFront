const express = require('express')
const router = express.Router()

const { CentroVotacionController } = require('../../controllers/api/CentroVotacion.controller')
const Ctrl = new CentroVotacionController()
const schema = require('../../database/schemas/CentroVotacion.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'CentroVotaciones'

router
	.get(`/CentroVotaciones`, [JWT.isAuth], Ctrl.all)
	.get(`/listCentroVotaciones/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idCentroVotaciones/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/CentroVotaciones`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/CentroVotaciones/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/CentroVotaciones/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
