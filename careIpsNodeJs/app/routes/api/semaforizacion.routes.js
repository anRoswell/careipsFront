const express = require('express')
const router = express.Router()

const { SemaforizacionController } = require('../../controllers/api/semaforizacion.controller')
const Ctrl = new SemaforizacionController()
const schema = require('../../database/schemas/semaforizacion.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'semaforizacion'

router
	.get(`/semaforizacion`, [JWT.isAuth], Ctrl.all)
	.get(`/listsemaforizacion/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idsemaforizacion/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/semaforizacion`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/semaforizacion/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/semaforizacion/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
