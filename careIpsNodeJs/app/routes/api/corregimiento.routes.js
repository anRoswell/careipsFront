const express = require('express')
const router = express.Router()

const { CorregimientoController } = require('../../controllers/api/corregimiento.controller')
const Ctrl = new CorregimientoController()
const schema = require('../../database/schemas/corregimiento.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'corregimiento'

router
	.get(`/corregimiento`, [JWT.isAuth], Ctrl.all)
	.get(`/listcorregimiento/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idcorregimiento/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/corregimiento`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/corregimiento/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/corregimiento/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
