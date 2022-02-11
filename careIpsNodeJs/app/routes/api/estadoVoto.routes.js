const express = require('express')
const router = express.Router()

const { EstadoVotoController } = require('../../controllers/api/estadoVoto.controller')
const Ctrl = new EstadoVotoController()
const schema = require('../../database/schemas/estadoVoto.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'EstadoVoto'

router
	.get(`/estadovoto`, [JWT.isAuth], Ctrl.all)
	.get(`/estadovoto/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idestadovoto/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/estadovoto`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/estadovoto/:id`, [JWT.isAuth], Ctrl.update)
//.delete(`/estadovoto/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
