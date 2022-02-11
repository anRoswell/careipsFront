const express = require('express')
const router = express.Router()

const { SeguimientoController } = require('../../controllers/api/seguimiento.controller')
const Ctrl = new SeguimientoController()
const schema = require('../../database/schemas/seguimiento.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'seguimiento'

router
	.get(`/seguimiento`, [JWT.isAuth], Ctrl.all)
	.get(`/listsemaforizacion/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idsemaforizacion/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/seguimiento`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/seguimiento/:id`, [JWT.isAuth], Ctrl.update)
//.delete(`/seguimiento/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
