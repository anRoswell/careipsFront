const express = require('express')
const router = express.Router()

const { ElectorController } = require('../../controllers/api/elector.controller')
const Ctrl = new ElectorController()
const schema = require('../../database/schemas/elector.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'campaia'

router
	.get(`/elector`, [JWT.isAuth], Ctrl.all)
	.get(`/spGetDataSelectFormElector`, [JWT.isAuth], Ctrl.spGetDataSelectFormElector) //shit + alt + flecha abajo
	.get(`/spElectores`, [JWT.isAuth], Ctrl.spGetElectores) //shit + alt + flecha abajo
	.get(`/listelector/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idelector/:id`, [JWT.isAuth], Ctrl.one) //shit + alt + flecha abajo
	.post(`/tmpElector`, [JWT.isAuth], Ctrl.spCrearElectorTmp)
	.post(`/elector`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.spCrearElector)
	.put(`/elector/:id`, [JWT.isAuth], Ctrl.update)
//.delete(`/elector/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
