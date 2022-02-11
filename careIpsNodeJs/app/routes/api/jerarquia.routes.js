const express = require('express')
const router = express.Router()

const { JerarquiaController } = require('../../controllers/api/jerarquia.controller')
const Ctrl = new JerarquiaController()
const schema = require('../../database/schemas/jerarquia.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'campaia'

router
	.get(`/jerarquia`, [JWT.isAuth], Ctrl.all)
	.get(`/spjerarquia/:pJerarquiasID`, [JWT.isAuth], Ctrl.spJerarquiaSelect) //shit + alt + flecha abajo
	.get(`/listjerarquia/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idjerarquia/:id`, [JWT.isAuth], Ctrl.one) //shit + alt + flecha abajo
	.post(`/jerarquia`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/jerarquia/:id`, [JWT.isAuth], Ctrl.update)
	//.delete(`/jerarquia/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
