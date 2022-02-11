const express = require('express')
const router = express.Router()

const { DistritoController } = require('../../controllers/api/distrito.controller')
const Ctrl = new DistritoController()
const schema = require('../../database/schemas/distrito.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'distritos'

router
	.get(`/distritos`, [JWT.isAuth], Ctrl.all)
	.get(`/listdistritos/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/iddistritos/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/distritos`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/distritos/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/distritos/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
