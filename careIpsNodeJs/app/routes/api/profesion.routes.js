const express = require('express')
const router = express.Router()

const { ProfesionController } = require('../../controllers/api/profesion.controller')
const Ctrl = new ProfesionController()
const schema = require('../../database/schemas/profesion.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'profesion'

router
	.get(`/profesiones`, [JWT.isAuth], Ctrl.all)
	.get(`/listprofesiones/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idprofesiones/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/profesiones`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/profesiones/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/profesiones/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
