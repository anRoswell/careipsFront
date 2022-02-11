const express = require('express')
const router = express.Router()

const { ProvinciaController } = require('../../controllers/api/provincia.controller')
const Ctrl = new ProvinciaController()
const schema = require('../../database/schemas/provincia.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'distritos'

router
	.get(`/provincias`, [JWT.isAuth], Ctrl.all)
	.get(`/listprovincias/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idprovincia/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/provincia`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/provincia/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/distritos/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
