const express = require('express')
const router = express.Router()

const { AsignarPersonalController } = require('../../controllers/api/asignarPersonal.controller')
const Ctrl = new AsignarPersonalController()
const schema = require('../../database/schemas/asignarPersonal.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
const { validateAsignarPersonal } = require('./../../validators/asignarPersonal')
//const route = 'campaia'

router
	.get(`/asignarPersonal`, [JWT.isAuth], Ctrl.all)
	.get(`/listasignarPersonal/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idasignarPersonal/:id`, [JWT.isAuth], Ctrl.one) //shit + alt + flecha abajo
	.post(`/asignarPersonal`, [JWT.isAuth, Schema.cleaner, Schema.validate], validateAsignarPersonal, Ctrl.spCrearUserTmp)
	.put(`/asignarPersonal/:id`, [JWT.isAuth], Ctrl.update)
//.delete(`/asignarPersonal/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
