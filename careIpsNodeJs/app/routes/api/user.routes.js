const express = require('express')
const router = express.Router()

const { UserController } = require('../../controllers/api/user.controller')
const Ctrl = new UserController()
const schema = require('../../database/schemas/user.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
const route = 'users'

router
	.get(`/${route}`, [JWT.isAuth], Ctrl.all)
	.get(`/${route}/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/${route}/:id`, [JWT.isAuth], Ctrl.one)
	.get(`/spGetUsuario/:pJerarquiasID`, [JWT.isAuth], Ctrl.spGetUsuario)
	.get(`/validateInvitation/:cedula`, Ctrl.spValidateInvitation)
	.post(`/${route}`, [Schema.cleaner, Schema.validate], Ctrl.create)
	.post(`/registrarUsuario`, [Schema.cleaner, Schema.validate], Ctrl.spRegistrarUsuario)
	.put(`/${route}/:id`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.update)
	.delete(`/${route}/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
